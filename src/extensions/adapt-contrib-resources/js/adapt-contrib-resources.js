/*
* Page Level Progress
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var ResourcesView = require('extensions/adapt-contrib-resources/js/adapt-contrib-resourcesView');
	var ResourcesHelpers = require('extensions/adapt-contrib-resources/js/adapt-contrib-resourcesHelpers');

	function setupResources(resourcesModel, resourcesItems) {

		var resourcesCollection = new Backbone.Collection(resourcesItems);
		var resourcesModel = new Backbone.Model(resourcesModel);

		Adapt.on('resources:showResources', function() {
			Adapt.drawer.triggerCustomView(new ResourcesView({
				model: resourcesModel, 
				collection: resourcesCollection
			}).$el);
		});
	
	}
	
	function setupResources2(resourcesModel, resourcesItems) {

		var resourcesCollection = new Backbone.Collection(resourcesItems);
		var resourcesModel = new Backbone.Model(resourcesModel);

		Adapt.on('resources:showResources2', function() {
			Adapt.drawer.triggerCustomView(new ResourcesView({
				model: resourcesModel, 
				collection: resourcesCollection
			}).$el);
		});
	
	}

	Adapt.once('app:dataReady', function() {

		var courseResources = Adapt.course.get('_resources');

		if (courseResources) {
			var drawerObject = {
		        title: courseResources.title,
		        description: courseResources.description,
		        className: 'resources-drawer'
		    };
		    // Syntax for adding a Drawer item
		    // Adapt.drawer.addItem([object], [callbackEvent]);
		    Adapt.drawer.addItem(drawerObject, 'resources:showResources');
		} else {
			return console.log('Sorry, no resources object is set on the course.json file');
		}

		setupResources(courseResources, courseResources._resourcesItems);
		
		var courseResources2 = Adapt.course.get('_resources2');

		if (courseResources2) {
			var drawerObject = {
		        title: courseResources2.title,
		        description: courseResources2.description,
		        className: 'resources-drawer'
		    };
		    // Syntax for adding a Drawer item
		    // Adapt.drawer.addItem([object], [callbackEvent]);
		    Adapt.drawer.addItem(drawerObject, 'resources:showResources2');
		} else {
			return console.log('Sorry, no resources2 object is set on the course.json file');
		}

		setupResources2(courseResources2, courseResources2._resourcesItems);


	});

})
