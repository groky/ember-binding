import Ember from 'ember';

export default Ember.Controller.extend({
  students: Ember.computed.alias('model'),
  isShowingAStudent: false,
  currentStudent: null,

  actions: {
    viewStudent(student) {
      this.set('currentStudent', student);
      this.set('isShowingAStudent', true);
    }
  }
});
