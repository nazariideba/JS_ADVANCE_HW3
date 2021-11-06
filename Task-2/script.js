function Animals(skin, limbs, wings, horn) {
    this.skin = skin;
    this.limbs = limbs;
    this.wings = wings;
    this.horn = horn;
}

Animals.prototype.run = function() {
    console.log('I can runing');
}

Animals.prototype.breath = function() {
    console.log('I can breath');
}

function Herbivorous(skin, limbs, wings, horn) {
    Animals.call(this, skin, limbs, wings, horn);
}

Herbivorous.prototype = Object.create(Animals.prototype);
Herbivorous.prototype.constructor = Herbivorous;

function Deer(skin, limbs, wings, horn) {
    Herbivorous.call(this, skin, limbs, wings, horn);
}

Deer.prototype = Object.create(Herbivorous.prototype);
Deer.prototype.constructor = Deer;

Deer.prototype.eat = function() {
    console.log('I dont eat meat, but I like herbs');
}

Deer.prototype.shy = function() {
    console.log('I afraid predors');
}

function Rabbit(skin, limbs, wings, horn) {
    Herbivorous.call(this, skin, limbs, wings, horn);
}

Rabbit.prototype = Object.create(Herbivorous.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.carrot = function() {
    console.log('I cant imagine my life without carrot');
}

Rabbit.prototype.jump = function() {
    console.log('I can jump all day');
}

function Predator(skin, limbs, wings, horn) {
    Animals.call(this, skin, limbs, wings, horn);
}

Predator.prototype = Object.create(Animals.prototype);
Predator.prototype.constructor = Predator;

function Lion(skin, limbs, wings, horn) {
    Predator.call(this, skin, limbs, wings, horn);
}

Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;

Lion.prototype.strong = function() {
    console.log('I am the strongest animal in savana');
}

Lion.prototype.awesome = function() {
    console.log('I am the pritiest animal in savana');
}

function Aligator(skin, limbs, wings, horn) {
    Predator.call(this, skin, limbs, wings, horn);
}

Aligator.prototype = Object.create(Predator.prototype);
Aligator.prototype.constructor = Aligator;

Aligator.prototype.fly = function() {
    console.log('Sorry, but i cant flying');
}

Aligator.prototype.teeth = function() {
    console.log('I have the sharpest teeth in river');
}
