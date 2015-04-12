define([
	'backbone',
	'communicator',
	'layouts/pathfinderLayout',
	'hbs!tmpl/main'
],

function( Backbone, Communicator, PathfinderApp, Main_tmpl ) {
    'use strict';

	var mainTmpl = Main_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		pathfinder: "#pathfinder-app"
	});

	App.PathfinderApp = new PathfinderApp();

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = mainTmpl();
		Communicator.mediator.trigger("APP:START");

		App.pathfinder.show(App.PathfinderApp);
		App.PathfinderApp.start();
	});

	return App;
});
