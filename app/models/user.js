import DS from 'ember-data';

var UserModel = DS.Model.extend({
  fullName: DS.attr('string')
});



UserModel.reopenClass({
  FIXTURES: [
    { id: 1, fullName: 'Trek' },
    { id: 2, fullName: 'Tom' }
  ]
});


export default UserModel;
