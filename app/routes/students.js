import Ember from 'ember';

class Student extends Ember.Object {
  constructor(name, lastName, subjects){
    super();
    this.name = name;
    this.lastName = lastName;
    this.subjects = subjects;
  }
}

class Subject extends Ember.Object {
  constructor(name, credits) {
    super();
    this.name = name;
    this.credits = credits;
  }
}

let peterSubjects = [
  new Subject('Geography', 3),
  new Subject('Sprints', 2)
];

let carterSubjects = [
  new Subject('Free throws', 1),
  new Subject('Push Ups', 4),
  new Subject('Math', 5)
];

export default Ember.Route.extend({
  model() {
    return [
      new Student('Peter', 'Jackson', peterSubjects),
      new Student('Coach', 'Carter', carterSubjects)
    ];
  },

  setupController(controller, model) {
    controller.set('model', model);
  }
});
