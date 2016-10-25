import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  isMain: DS.attr(),
  isFeatured: DS.attr(),
  timestamp: DS.attr()
});
