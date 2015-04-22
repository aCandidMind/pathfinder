define([
	'backbone',
	'communicator',
	'hbs!tmpl/question'
],
function( Backbone, Communicator, Question_tmpl ){
    'use strict';

	return Backbone.Marionette.ItemView.extend({

		template: Question_tmpl,

		onShow: function() {
			console.log('model:', this.model.toJSON());
		}
	});
});
