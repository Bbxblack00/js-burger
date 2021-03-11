
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

      if (trueIngredient) {
        finalPrice += priceIngredient;
      }

    }

    var coupons = [
      'Ilmiosconto01',
      'Ilmiosconto02',
      'Ilmiosconto03'
    ];

    var burgerCoupon = document.getElementById('burger-coupon').value;
    for (var i = 0; i < coupons.length; i++) {

       var coupon = coupons[i];

       var finded = false;

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
