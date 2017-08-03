import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed.alias('student.name'),
  lastName: Ember.computed.alias('student.lastName'),
  subjects: Ember.computed.alias('student.subjects'),

  actions: {
    closeWindow() {
      this.set('isShowingAStudent', false);
      this.set('student', null);
    },

    updateName(val) {
      this.set('name', val);
    },
    updateLastName(val) {
      this.set('lastName');
    },
  }
});
