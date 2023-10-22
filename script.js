function main(){  //all processing goes here

    var availableIngredients = [] //ingredients that the user has (list)
    var checkboxes = document.querySelectorAll('input[name="ingredientsCheckBoxes"]:checked')
    for (var i = 0; i < checkboxes.length; i++) { //getting ingredients from checkboxes
      availableIngredients.push(checkboxes[i].value)
    } 

    recipesList.forEach((object, index) => { //for each recipe
     // object is giving the one by one object
      for (let i = 0; i < availableIngredients.length; i++) {
        if (recipe.ingredientList.includes(availableIngredients[i])) {
          
        }
      }
      console.log(index, object.name, object.age, object.skill); 
    });


  
  var recipeScores = []
  for(var i = 0; i < recipesList.length; i++) {
    recipeScores.push(recipeScore(recipesList[i], availableIngredients))
  }

  
  
}


class Recipes {

  title;  //title of the recipe
  ingredientList;  //list of ingredients recipe has
  link;  //the link to the recipe

  constructor(title, ingredientList, link, score) {
    this.title = title;
    this.ingredientList = ingredientList;
    this.link = link;
    this.score = recipeScore(this, availableIngredients);
  }
  
  recipesList = [
    {
      "title": "Filling Yogurt",
      "ingredientList": ["Fruit", "Nuts", "Granola", "Yogurt"],
      "link": "https://www.allrecipes.com/recipe/273916/greek-yogurt-breakfast-parfait/"
    },
    {
      "title": "Chicken Super Sandwich",
      "ingredientList": ["Bread", "Chicken", "Vegetables", "Egg"],
      "link": "https://www.recipetips.com/recipe-cards/t--2018/chicken-and-egg-salad-sandwich.asp"
    },
    {
      "title": "Chicken Fried Rice",
      "ingredientList": ["Chicken", "Rice", "Vegetables", "Oil", "Egg"],
      "link": "https://www.averiecooks.com/easy-better-takeout-chicken-fried-rice/"
    }.
    {
      "title": "Chicken Super Salad",
      "ingredientList": ["Lettuce", "Chicken", "Croutons", "Tomato", "Cucumber"],
      "link": "https://cookingwithbry.com/the-best-chicken-salad-recipe/"
    },
    {
      "title": "Chicken Alfredo Pasta",
      "ingredientList": ["Pasta", "Cheese", "Chicken", "Tomato", "Broccoli", "Milk"],
      "link": "https://www.tasteslovely.com/broccoli-chicken-fettuccine-alfredo/"
      
    }
  ]
  
  get getTitle(){
    return this.title;
  }

  get getIngredientList(){
    // recipe.forEach((object, index) => {
      
    // }
    return this.ingredientList;
  }

  get getLink(){
    return this.link;
  }

  function recipeScore(recipe, userList) {
    let score = 0;
  
    for (let i = 0; i < userList.length; i++) {
      if (recipe.ingredientList.includes(userList[i])) {
        score++;
      }
    }
    return score;
  }

  // print() {
  //   const { name, job } = this;
  //   console.log(`${name}, ${job}`);
  // }

  
}
    
const thatGuy = new Person('John Doe', 'Software Engineer');
thatGuy.print();

