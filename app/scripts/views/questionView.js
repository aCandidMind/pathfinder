define([
	'backbone',
	'communicator',
	'hbs!tmpl/question'
],
function( Backbone, Communicator, Question_tmpl ){
    'use strict';

	return Backbone.Marionette.View.extend({

		onShow: function() {
			this.el.innerHTML = Question_tmpl();
		}
	});
});
