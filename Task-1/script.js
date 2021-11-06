function Human(height, weight, skin) {
     this.height = height;
     this.weight = weight;
     this.skin = skin;
}

Human.prototype.speakAbility = function() {
    console.log('I can speak with human');
}

Human.prototype.walkAbility = function() {
    console.log('I can walking on the street');
}

function Woman(height, weight, skin) {
    Human.call(this, height, weight, skin);
}

Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;

function Nurse(height, weight, skin, clinic, schedule) {
    Woman.call(this, height, weight, skin);
    this.clinic = clinic;
    this.schedule = schedule;
}

Nurse.prototype = Object.create(Woman.prototype);
Nurse.prototype.constructor = Nurse;

Nurse.prototype.takeAnalyzes = function() {
    console.log('I take analyzes in patients');
}

Nurse.prototype.createList = function() {
    console.log('I create medical list');
}

function Librarian(height, weight, skin, age, hobbie) {
    Woman.call(this, height, weight, skin);
    this.age = age;
    this.hobbie = hobbie;
}

Librarian.prototype = Object.create(Woman.prototype);
Librarian.prototype.constructor = Librarian;

Librarian.prototype.giveBooks = function() {
    console.log('I give books');
}

Librarian.prototype.repairBooks = function() {
    console.log('I repair broken books');
}

function Man(height, weight, skin) {
    Human.call(this, height, weight, skin);
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

function Hunter(height, weight, skin, weapon, location) {
    Man.call(this, height, weight, skin);
    this.weapon = weapon;
    this.location = location;
}

Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype.killAnimals = function() {
    console.log('I kill wild animals');
}

Hunter.prototype.explore = function() {
    console.log('I explore wild forest and search wild animals');
}

function Worker(height, weight, skin, company, position) {
    Man.call(this, height, weight, skin);
    this.company = company;
    this.position = position;
}

Worker.prototype = Object.create(Man.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.createElements = function() {
    console.log('I work in corporation and crate new elements from vacumcleaner');
}

Worker.prototype.buyComponents = function() {
    console.log('I buy components for my job');
}
