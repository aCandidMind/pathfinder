define([
	'backbone',
	'backbone.marionette'
],
function( Backbone ) {
    'use strict';

	var Communicator = Backbone.Marionette.Controller.extend({
		initialize: function( options ) {
			console.log("initialize a Communicator");

			// create a pub sub
			this.mediator = new Backbone.Wreqr.EventAggregator();

			//create a req/res
			this.reqres = new Backbone.Wreqr.RequestResponse();

			// create commands
			this.command = new Backbone.Wreqr.Commands();

			this.mediator.on('all', this.logMediatorEvents, this);
		},

		logMediatorEvents: function(eventName, options) {
			if(_.isEmpty(options) || _.isObject(options)) {
				console.log(eventName);
			} else {
				console.log(eventName, options);
			}
		}
	});

	return new Communicator();
});
