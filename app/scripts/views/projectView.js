define([
	'backbone',
	'communicator',
	'hbs!tmpl/project'
],
function( Backbone, Communicator, Project_tmpl ){
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		template: Project_tmpl,
		tagName: 'li',
		className: 'span4'
	});
});
