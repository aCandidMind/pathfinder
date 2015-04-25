define([
	'backbone',
	'communicator',
	'hbs!tmpl/question'
],
function (Backbone, Communicator, Question_tmpl) {
	'use strict';

	return Backbone.Marionette.ItemView.extend({
		template: Question_tmpl,

		events: {
			"click .answer button": "onQuestionAnswered"
		},

		onQuestionAnswered: function (event) {
			var answers = {
				"Ja": "yes",
				"Nein": "no"
			};
			var button = $(event.target);
			this.model.set('answer', answers[button.text()]);
			Communicator.trigger('question:answered', this.model);
		},

		templateHelpers: {
			answerYes: function () {
				return this.answer == "yes"
			},
			answerNo: function () {
				return this.answer == "no"
			}
		}
	});
});
