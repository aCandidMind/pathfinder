define([
	'jquery',
	'backbone',
	'communicator',
	'collections/labels',
	'views/projectsView',
	'views/questionView',
	'hbs!tmpl/pathfinder_app'
],

function( $, Backbone, Communicator, Labels, ProjectsView, QuestionView, Pathfinder_tmpl ) {
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

			$.getJSON("questions.json", function (data) {
				Labels.prototype.json = data;
				Communicator.mediator.trigger(Labels.prototype.json);
				var labels = new Labels([], {ids: [1, 3, 5]});
				Communicator.mediator.trigger(labels.models);
				Communicator.mediator.trigger(labels.length);
				Communicator.mediator.trigger(labels.pluck('name'));
			});

			this.projectsView = new ProjectsView();
			this.projects.show(this.projectsView);

			this.questionView = new QuestionView();
			this.question.show(this.questionView);
		}
	});
});
