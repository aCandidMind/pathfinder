/**
 * Created by bogn on 16.03.15.
 */

define([
	'backbone',
	'communicator',
	'models/project'
],
function( Backbone, Communicator, Project ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Project,

		initialize: function(models, options) {
			if (options && !_.isEmpty(options.fromLabels)) {
				var jsonData = Communicator.reqres.request('jsonData');
				var projects = [];
				_.each(jsonData.projects, function (attrs) {
					var labelIntersection = _.intersection(attrs.labels, options.fromLabels);
					if (!_.isEmpty(labelIntersection)) {
						projects.push(new Project(attrs));
					}
				});
				this.reset(projects, {silent: true});
			}
		}
	});
});