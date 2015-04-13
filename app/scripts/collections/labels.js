/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'models/label'
],
function( Backbone, Label ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Label,
		json: null,

		initialize: function(models, options) {
			var jsonLabels = this.json.labels;
			var labels = [];
			if (!_.isEmpty(options.ids)) {
				_.each(options.ids, function (id) {
					var name = jsonLabels[id];
					labels.push(new Label({name: name}));
				});
				this.reset(labels, {silent: true});
			}
		}
	});
});
