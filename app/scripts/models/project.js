/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'underscore'
],
function( Backbone, _ ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({

		name: null,
		logo: null,

		initialize: function(name, logo) {
			this.name = name;
			this.logo = logo;
		}
	});
});
