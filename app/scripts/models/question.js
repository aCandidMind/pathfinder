/**
 * Created by bogn on 20.03.15.
 */

define([
	'backbone',
	'collections/labels',
	'underscore'
],
function( Backbone, Labels, _ ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({

		defaults: {
			text: null,
			labels: [],
			active: false
		},

		parse: function (data, options) {
			var labels = new Labels(null, {ids: data.labels});
			return _.extend(data, {labels: labels});
		}
	});
});
