
var finalPrice;
var coupons = [
  'Ilmiosconto01',
  'Ilmiosconto02',
  'Ilmiosconto03'
];
var calculator = document.getElementById('calculate');
calculator.addEventListener('click', function() {

  finalPrice = 5;

  var burgerName = document.getElementById('burger-name').value;
  if (burgerName.length < 1) {
    alert('inserisci il nome de panino');
  }else {

    var ingredients = document.getElementsByClassName('ingred');

    for (var i = 0; i < ingredients.length; i++) {
      var ingredient = ingredients[i];
      var trueIngredient = ingredient.checked;
      var priceIngredient;

      if (trueIngredient) {
        priceIngredient = parseInt(ingredient.dataset.price);
        finalPrice += priceIngredient;
      }

    }



    var burgerCoupon = document.getElementById('burger-coupon').value;
    var finded = false;
    for (var i = 0; i < coupons.length; i++) {

       var coupon = coupons[i];


       if (coupon == burgerCoupon) {

           finded = true;

         }
       }
       if (finded) {

         finalPrice -= finalPrice * 0.2;

       }

    }

    document.getElementById('price').innerHTML = finalPrice;
});
