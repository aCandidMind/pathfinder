define([
	'backbone',
	'communicator',
	'views/projectView'
],
function( Backbone, Communicator, ProjectView ){
	'use strict';

	return Backbone.Marionette.CollectionView.extend({
		childView: ProjectView,
		tagName: 'ul',
		className: 'inline'
	});
});
