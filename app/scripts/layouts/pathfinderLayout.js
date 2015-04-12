define([
	'jquery',
	'backbone',
	'communicator',
	'views/projectsView',
	'views/questionView',
	'hbs!tmpl/pathfinder_app'
],

function( $, Backbone, Communicator, ProjectsView, QuestionView, Pathfinder_tmpl ) {
	return Backbone.Marionette.Layout.extend({
		template: Pathfinder_tmpl,
		id: "pathfinder-app",

		regions: {
			projects: "#projects-region",
			question: "#question-region"
		},

		onShow: function() {
			$('#main').prepend(this.$el);
		},

		start: function() {
			// publish
			Communicator.mediator.trigger("PATHFINDER:START");

			this.projectsView = new ProjectsView();
			this.projects.show(this.projectsView);

			this.questionView = new QuestionView();
			this.question.show(this.questionView);
		}
	});
});
