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

		text: null,
		labels: null,

		initialize: function (text, labels) {
			this.text = text;
			this.labels = new Labels(labels);
		}
	});
});
