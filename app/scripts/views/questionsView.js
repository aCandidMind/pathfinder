define([
	'backbone',
	'communicator',
	'views/questionView'
],
function( Backbone, Communicator, QuestionView ){
    'use strict';

	return Backbone.Marionette.CollectionView.extend({
		itemView: QuestionView
	});
});
