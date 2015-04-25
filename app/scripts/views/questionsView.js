define([
	'backbone',
	'communicator',
	'views/questionLayout',
	'holderjs'
],
function( Backbone, Communicator, QuestionLayout, Holder ){
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
			if (nextQuestion) {
				nextQuestion.set('active', true);
			}
			this.render();
		},

		onRender: function() {
			Holder.run();
		}
	});
});
