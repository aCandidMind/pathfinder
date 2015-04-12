define([
	'backbone',
	'communicator',
	'underscore',
	'collections/projects',
	'models/project',
	'hbs!tmpl/projects'
],
function( Backbone, Communicator, _, Projects, Project, Projects_tmpl ){
	'use strict';

	return Backbone.View.extend({

		initialize: function() {
			this.collection = new Projects();
		},

		onShow: function() {
			this.el.innerHTML = Projects_tmpl();
		}

	});
});
