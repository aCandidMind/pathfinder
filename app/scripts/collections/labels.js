/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'communicator',
	'models/label'
],
function( Backbone, Communicator, Label ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Label,

		initialize: function(models, options) {
			var jsonLabels = Communicator.reqres.request('jsonData').labels;
			if (!_.isEmpty(options.ids)) {
				var labels = [];
				_.each(options.ids, function (id) {
					var name = jsonLabels[id];
					labels.push(new Label({id: id, name: name}));
				});
				this.reset(labels, {silent: true});
			}
		}
	});
});
