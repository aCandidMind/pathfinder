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

		onQuestionAnswered: function(question) {
			var index = this.collection.indexOf(question);
			var nextQuestion = this.collection.at(index + 1);
			nextQuestion.set('active', true);
			this.render();
		}
	});
});
