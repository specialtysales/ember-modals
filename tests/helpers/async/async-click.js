import Ember from 'ember';
// import inspect from '../sync/inspect';

/* like click() but runs asyncrously allowing you to
use it outside of an andThen function with the same
stuff in the DOM */

export default Ember.Test.registerAsyncHelper('asyncClick',
  function(app, testProperty) {
    click(inspect(testProperty));
  }
);
