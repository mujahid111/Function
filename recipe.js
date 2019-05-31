class Kitchen {
    constructor(recipe) {
        //recipe = ['Panir Masala', 'panir handi', 'cake', 'chicken', 'shahi panir'];
        this.recipe = recipe;
    }
    getTotalRecipeCount() {
        console.log('Total Length of Array:', this.recipe.length);
        
    }

    displayRecipe(a) {
        console.log('Display Particullar Array of Elements :', this.recipe[a]);  
        return a.recipe;      
    }

    diplayAllRecipe() {
        console.log('Display all the Elements Of Array :', this.recipe);
        
    }

    removeRecipe(b, c) {
        console.log('Removed the Element from the Array :', this.recipe.splice(b,1));
        return b.recipe;
    }

    removeAllRecipe() {
        this.recipe = [];
        console.log('Before Remove all the Elements of Array :', this.recipe);
    }
}
var k = new Kitchen(['Panir Masala', 'panir handi', 'cake', 'chicken', 'shahi panir']);
k.getTotalRecipeCount();
k.displayRecipe(1);
k.diplayAllRecipe();
k.removeRecipe(1);
//k.diplayAllRecipe();
k.removeAllRecipe();



