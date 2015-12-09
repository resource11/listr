import Ember from 'ember';

// make the ul part of the implementation of the listr-list in the component.js file


// test for hidden is true or false

// export default Ember.Component.extend({
//   tagName: 'ul',
//   items: ['Sleep', 'Cats', 'Star Wars', 'Keith Hulu'],
//   click: function(){
//     this.get('hidden')? this.set('hidden', false) : this.set('hidden', true);
//   },
//   hidden: false
// });



// export default Ember.Component.extend({
//   tagName: 'ul',
//   items: ['Sleep', 'Cats', 'Star Wars', 'Keith Hulu', 'Coffee'],
//   click: function () {
//     this.get('hidden') ? this.set('hidden', false) : this.set('hidden', true);
//   },
//   hidden: false
// });


// need an actions key

export default Ember.Component.extend({
  tagName: 'ul',
  items: ['Sleep', 'Cats', 'Star Wars', 'Keith Hulu', 'Coffee'],
  hidden: false,
  actions: {
    toggleList: function () {
      this.get('hidden') ? this.set('hidden', false) : this.set('hidden', true);
    }
  }
});
