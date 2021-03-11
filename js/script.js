
var finalPrice = 5;
var calculator = document.getElementById('calculate');
calculator.addEventListener('click', function() {

  var burgerName = document.getElementById('burger-name').value;
  if (burgerName.length < 1) {
    alert('inserisci il nome de panino');
  }else {

    var ingredients = document.getElementsByClassName('ingred');

    for (var i = 0; i < ingredients.length; i++) {
      var ingredient = ingredients[i];
      var trueIngredient = ingredient.checked;
      var priceIngredient = parseInt(ingredient.dataset.price)

      finalPrice += priceIngredient;
      
    }


  }
});
