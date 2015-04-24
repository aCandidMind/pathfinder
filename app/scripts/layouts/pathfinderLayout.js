define([
	'jquery',
	'backbone',
	'communicator',
	'collections/labels',
	'collections/questions',
	'views/projectsView',
	'views/questionsView',
	'hbs!tmpl/pathfinder_app'
],

function( $, Backbone, Communicator, Labels, Questions, ProjectsView, QuestionsView, Pathfinder_tmpl ) {
	return Backbone.Marionette.LayoutView.extend({
		template: Pathfinder_tmpl,

		regions: {
			projects: "#projects-region",
			questions: "#questions-region"
		},

		onShow: function() {
			$('#main').prepend(this.$el);
		},

		start: function() {
			// publish
			Communicator.mediator.trigger("PATHFINDER:START");

			// get JSON & initialize QuestionsView with it
			$.when($.getJSON("data.json")).done(_.bind(this.loadQuestions, this));
			Communicator.reqres.setHandler("jsonData", _.bind(this.getJSONData, this));

			this.projectsView = new ProjectsView();
			this.projects.show(this.projectsView);
		},

		loadQuestions: function (data) {
			this.jsonData = data;
			var questions = new Questions(null, {data: data});

			this.questionsView = new QuestionsView({collection: questions});
			this.questions.show(this.questionsView);
		},

		getJSONData: function () {
			return this.jsonData;
		}
	});
});
