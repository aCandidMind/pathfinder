define([
	'backbone',
	'communicator',
	'views/questionLayout'
],
function( Backbone, Communicator, QuestionLayout ){
    'use strict';

	return Backbone.Marionette.CollectionView.extend({
		itemView: QuestionLayout
	});
});
