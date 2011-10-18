var recipe, ingredients;
ds.Ingredient.remove();
ds.IngredientDescription.remove();
ds.Recipe.remove();
function addIngredients(ingredient) {
    var name;
    name = ingredient.name;
    ingredient.recipe = recipe;
    if (!(name in ingredients)) {
        ingredients[name] = new ds.IngredientDescription({name: name});
        ingredients[name].save();
    }
    ingredient.reference = ingredients[name];
    delete ingredient.name;
    new ds.Ingredient(ingredient).save();
}

if (ds.Recipe.length === 0) {
	ingredients = {};
        
    recipe = new ds.Recipe(
        {
            title: "No Bake Chocolate Cookies",
            servings: 36,
            directions: "In a saucepan over medium heat, combine sugar, milk, and margarine. Bring to a boil, stirring occasionally, then boil for 4 to 5 minutes. Remove from heat and stir in the oats, vanilla, cocoa and coconut. Spoon onto waxed paper and allow to cool for at least an hour. Store in an airtight container."
        }
    );
    recipe.save();
    
    [
        {
            quantity: 2,
            unit: "cups",
            name: "white sugar"
        },
        {
            quantity: 0.5,
            unit: "cup",
            name: "milk"
        },
        {
            quantity: 0.5,
            unit: "cup",
            name: "margarine"
        },
        {
            quantity: 3,
            unit: "cup",
            name: "rolled oats"
        },
        {
            quantity: 1,
            unit: "teaspoon",
            name: "vanilla extract"
        },
        {
            quantity: 3,
            unit: "tablespoons",
            name: "unsweetened cocoa powder"
        },
        {
            quantity: 0.5,
            unit: "cup",
            name: "flaked coconut"
        }
    ].forEach(addIngredients);
    
    recipe = new ds.Recipe(
        {
            title: "Peanut Butter Kiss Cookies",
            servings: 9,
            directions: "   1.   Preheat oven to 350 degrees F.\n   2. Combine sugar, peanut butter, and egg.\n   3. Shape into 1 inch balls and place on ungreased cookie sheet. NOTE: If dough is too sticky, refrigerate 1/2 hour or until easy to handle.\n   4. Bake for 10 minutes. Remove cookies from oven. Press a chocolate kiss into the center of each warm cookie."
        }
    );
    recipe.save();
    
    [
        {
            quantity: 1,
            unit: "cup",
            name: "white sugar"
        },
        {
            quantity: 1,
            unit: "cup",
            name: "peanut butter"
        },
        {
            quantity: 1,
            unit: "",
            name: "egg"
        },
        {
            quantity: 18,
            unit: "",
            name: "milk chocolate candy kisses, unwrapped"
        }
    ].forEach(addIngredients);
    
    recipe = new ds.Recipe(
        {
            title: "Moroccan Couscous Recipe",
            servings: 4,
            directions: "Bring juice and 1/2 cup water to a boil in a small pot. Remove from heat.\n Stir in couscous and allow to sit covered for 5 minutes. \n Meanwhile, in a separate pan, saute dates, raisins, almonds, and cinnamon in 1/2 cup water for 2 minutes. Add cooked couscous. Mix well and serve warm. \n Per serving: 301 calories, 8 grams protein, 59 grams carbohydrates, 4 grams fat, 0 grams saturated fat, 0 milligrams cholesterol, 7 milligrams sodium. "
        }
    );
    recipe.save();
    
    [
        {
            quantity: 1,
            unit: "cup",
            name: "orange or other juice"
        },
        {
            quantity: 1,
            unit: "cup",
            name: "instant couscous"
        },
        {
            quantity: 1/4,
            unit: "cup",
            name: "pitted dates, finely chopped"
        },
        {
            quantity: 1/4,
            unit: "cup",
            name: "raisins"
        },
        {
            quantity: 1/4,
            unit: "cup",
            name: "slivered almonds"
        },
        {
            quantity: 1,
            unit: "teaspoon",
            name: "cinnamon"
        }
    ].forEach(addIngredients);
    
}
ds.Recipe.length;