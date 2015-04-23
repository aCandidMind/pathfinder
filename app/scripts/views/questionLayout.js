define([
	'backbone',
	'communicator',
	'collections/projects',
	'views/projectsView',
	'views/questionView',
	'hbs!tmpl/questions'
],
function( Backbone, Communicator, Projects, ProjectsView, QuestionView, Questions_tmpl ){
    'use strict';

	return Backbone.Marionette.Layout.extend({

		template: Questions_tmpl,

		regions: {
			projects: ".projects",
			question: ".question"
		},

		onShow: function() {
			var labels = this.model.get('labels').pluck('id');
			var projects = new Projects(null, {fromLabels: labels});
			this.projectsView = new ProjectsView({collection: projects});
			this.projects.show(this.projectsView);

			this.questionView = new QuestionView({model: this.model});
			this.question.show(this.questionView);
		}
	});
});
