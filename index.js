let displayMeals = (data) => {
    let arrayOfMeals = data.result;
    let html = "";
    let mealDiv = document.getElementById("api");
    arrayOfMeals.map((meal) => {
        html += `<p>${meal[].strMeal}</p>`;
    });
    mealDiv.innerHTML = html;
};

let getMeals = async (event) => {
    try {
      event.preventDefault();
  
      let userSearch = document.getElementById("api").value;
  
      let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?=${userSearch}`);
  
      meals = await meals.json();
  
      displayMeals(meals);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  getMeals()