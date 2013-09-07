Cards.module('Pool', function(Pool, App) {
	Pool.CategorySetItemView = Backbone.Marionette.ItemView.extend({
		tagName: "tr",
		template: "#pool-category-set-list-item",
		events: {
			"click a": "linkClicked"
		},
		linkClicked: function(ev){
			ev.preventDefault();
			console.log("asd");
			App.trigger("set:details", this.model.get("name").replace(/[^a-zA-Z0-9-_]/g, '_'), this.model.get("_id"));
		}
	});

	Pool.CategorySetView = Backbone.Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-bordered table-striped table-hover",
		template: "#pool-category-set-list",
		itemView: Pool.CategorySetItemView,
		itemViewContainer: "tbody",
		initialize: function() {
			this.collection.fetch();
		},
		onRender: function(){
			$("#pool-category-layout-headline").text(this.collection.category);
		}
	});
});