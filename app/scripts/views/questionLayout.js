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

	return Backbone.Marionette.LayoutView.extend({

		template: Questions_tmpl,
		className: "question-container row-fluid",

		regions: {
			projects: ".projects",
			question: ".question"
		},

		onShow: function() {
			var projects = null;
			if(!_.isEmpty(this.model.get('answer'))) {
				var labels = this.model.get('labels').pluck('id');
				projects = new Projects(null, {fromLabels: labels});
			}
			this.projectsView = new ProjectsView({collection: projects});
			this.projects.show(this.projectsView);

			this.questionView = new QuestionView({model: this.model});
			this.question.show(this.questionView);
		}
	});
});
