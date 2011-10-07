
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ingredientEvent = WAF.namespace("Recipes.page.ingredient.events");	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	ingredientEvent.onCurrentElementChange = function ingredientEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		sources.recipe.query('ingredients.name = "' + sources.ingredient.name + '"');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ingredient", "onCurrentElementChange", ingredientEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
