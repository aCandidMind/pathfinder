/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'underscore',
	'collections/labels',
	'holderjs'
],
function( Backbone, Labels, _ ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({

		defaults: {
			name: null,
			logo: "holder.js/102x102",
			link: '#'
		},

		parse: function (data, options) {
			var labels = new Labels(null, {ids: data.labels});
			return _.extend(data, {labels: labels});
		}
	});
});
