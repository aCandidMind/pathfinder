/**
 * Created by bogn on 22.04.15.
 */

define([
	'backbone',
	'models/question'
],
function( Backbone, Question ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Question,

		initialize: function(models, options) {
			var data = options.data;
			if (!_.isEmpty(data.questions)) {
				var questions = [];
				_.each(data.questions, function (attrs) {
					questions.push(new Question(attrs, {parse: true}));
				});
				this.reset(questions, {silent: true});
			}
		}
	});
});
