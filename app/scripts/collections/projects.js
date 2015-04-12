/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'models/project'
],
function( Backbone, Project ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Project
	});
});