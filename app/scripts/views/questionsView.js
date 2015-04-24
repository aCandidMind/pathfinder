define([
	'backbone',
	'communicator',
	'views/questionLayout'
],
function( Backbone, Communicator, QuestionLayout ){
    'use strict';

	return Backbone.Marionette.CollectionView.extend({
		childView: QuestionLayout,
		className: 'container-fluid',

		initialize: function() {
			Communicator.on('question:answered', _.bind(this.onQuestionAnswered, this));
		},

		// Only show views whose question is active
		filter: function (child, index, collection) {
			return child.get('active');
		},

		onQuestionAnswered: function(question) {
			var index = this.collection.indexOf(question);
			var nextQuestion = this.collection.at(index + 1);
			nextQuestion.set('active', true);
			this.render();
		}
	});
});
