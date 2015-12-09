import Ember from 'ember';

// li is implied, so we add it here and remove it in listr-item template.hbs

// export default Ember.Component.extend({
//   tagName: 'li'
// });

export default Ember.Component.extend({
  tagName: 'li',
  strikethrough: false,
  click: function () {
      this.toggleProperty('strikethrough');
  }
});
