        var btnDrinks  = document.getElementById("button-drinks");
        var btnFoods  = document.getElementById("button-foods");
        var btnDesserts  = document.getElementById("button-desserts");
        
        var btn1  = document.getElementById("btn-drinks");
        var btn2  = document.getElementById("btn-foods");
        var btn3  = document.getElementById("btn-desserts");
        
        var menuDrinks = document.getElementById('menu-drinks');
        var menuFoods = document.getElementById('menu-foods');
        var menuDesserts = document.getElementById('menu-desserts');
        
        var priceDrinks = document.getElementById("price-drinks");        
        var priceFoods = document.getElementById("price-foods");         
        var priceDesserts = document.getElementById("price-desserts");
      
        btnDrinks.onclick = function() {
            menuDrinks.style.display="flex";
            menuFoods.style.display="none";
            menuDesserts.style.display="none";
            priceDrinks.style.display="block";
            priceFoods.style.display="none";
            priceDesserts.style.display="none";
           
        }        
        btnFoods.onclick = function() {
            menuDrinks.style.display="none";
            menuFoods.style.display="flex";
            menuDesserts.style.display="none";
            priceDrinks.style.display="none";
            priceFoods.style.display="block";
            priceDesserts.style.display="none";
        }        
        btnDesserts.onclick = function() {
            menuDrinks.style.display="none";
            menuFoods.style.display="none";
            menuDesserts.style.display="flex";
            priceDrinks.style.display="none";
            priceFoods.style.display="none";
            priceDesserts.style.display="block";
        }
        
        btn1.onclick = function() {
            menuDrinks.style.display="flex";
            menuFoods.style.display="none";
            menuDesserts.style.display="none";
            priceDrinks.style.display="block";
            priceFoods.style.display="none";
            priceDesserts.style.display="none";
            btn1.style.background = "#fc3187";
            btn1.style.color = "#fff";
            btn1.style.border = "solid 1px #fc3187";
            btn2.style.background = "#fff";
            btn2.style.color = "#fc3187";
            btn2.style.border = "solid 1px #fc3187";
            btn3.style.background = "#fff";
            btn3.style.color = "#fc3187";
            btn3.style.border = "solid 1px #fc3187";
        }        
        btn2.onclick = function() {
            menuDrinks.style.display="none";
            menuFoods.style.display="flex";
            menuDesserts.style.display="none";
            priceDrinks.style.display="none";
            priceFoods.style.display="block";
            priceDesserts.style.display="none";
            btn1.style.background = "#fff";
            btn1.style.color = "#fc3187";
            btn1.style.border = "solid 1px #fc3187";
            btn2.style.background = "#fc3187";
            btn2.style.color = "#fff";
            btn2.style.border = "solid 1px #fc3187";
            btn3.style.background = "#fff";
            btn3.style.color = "#fc3187";
            btn3.style.border = "solid 1px #fc3187";
            
        }        
        btn3.onclick = function() {
            menuDrinks.style.display="none";
            menuFoods.style.display="none";
            menuDesserts.style.display="flex";
            priceDrinks.style.display="none";
            priceFoods.style.display="none";
            priceDesserts.style.display="block";
            btn1.style.background = "#fff";
            btn1.style.color = "#fc3187";
            btn1.style.border = "solid 1px #fc3187";
            btn2.style.background = "#fff";
            btn2.style.color = "#fc3187";
            btn2.style.border = "solid 1px #fc3187";
            btn3.style.background = "#fc3187";
            btn3.style.color = "#fff";
            btn3.style.border = "solid 1px #fc3187";
        }
        var drink1button = document.getElementById('drink-1');
        var drink2button = document.getElementById('drink-2');
        var drink3button = document.getElementById('drink-3');
        var drink4button = document.getElementById('drink-4');
        
        var drink1price = document.getElementById('drink-1-price');
        var drink2price = document.getElementById('drink-2-price');
        var drink3price = document.getElementById('drink-3-price');
        var drink4price = document.getElementById('drink-4-price');
        
        drink1button.onclick = function() {
            drink1price.style.display = "block";
            drink2price.style.display = "none";
            drink3price.style.display = "none";
            drink4price.style.display = "none";
        }
        drink2button.onclick = function() {
            drink1price.style.display = "none";
            drink2price.style.display = "block";
            drink3price.style.display = "none";
            drink4price.style.display = "";
        }
        drink3button.onclick = function() {
            drink1price.style.display = "none";
            drink2price.style.display = "none";
            drink3price.style.display = "block";
            drink4price.style.display = "none";
        }
        drink4button.onclick = function() {
            drink1price.style.display = "none";
            drink2price.style.display = "none";
            drink3price.style.display = "none";
            drink4price.style.display = "block";
        }
        
        var food1button = document.getElementById('food-1');
        var food2button = document.getElementById('food-2');
        var food3button = document.getElementById('food-3');
        var food4button = document.getElementById('food-4');
        
        var food1price = document.getElementById('food-1-price');
        var food2price = document.getElementById('food-2-price');
        var food3price = document.getElementById('food-3-price');
        var food4price = document.getElementById('food-4-price');
        
        food1button.onclick = function() {
            food1price.style.display = "block";
            food2price.style.display = "none";
            food3price.style.display = "none";
            food4price.style.display = "none";
        }
        food2button.onclick = function() {
            food1price.style.display = "none";
            food2price.style.display = "block";
            food3price.style.display = "none";
            food4price.style.display = "";
        }
        food3button.onclick = function() {
            food1price.style.display = "none";
            food2price.style.display = "none";
            food3price.style.display = "block";
            food4price.style.display = "none";
        }
        food4button.onclick = function() {
            food1price.style.display = "none";
            food2price.style.display = "none";
            food3price.style.display = "none";
            food4price.style.display = "block";
        }
        var dessert1button = document.getElementById('dessert-1');
        var dessert2button = document.getElementById('dessert-2');
        var dessert3button = document.getElementById('dessert-3');
        var dessert4button = document.getElementById('dessert-4');
        
        var dessert1price = document.getElementById('dessert-1-price');
        var dessert2price = document.getElementById('dessert-2-price');
        var dessert3price = document.getElementById('dessert-3-price');
        var dessert4price = document.getElementById('dessert-4-price');
        
        dessert1button.onclick = function() {
            dessert1price.style.display = "block";
            dessert2price.style.display = "none";
            dessert3price.style.display = "none";
            dessert4price.style.display = "none";
        }
        dessert2button.onclick = function() {
            dessert1price.style.display = "none";
            dessert2price.style.display = "block";
            dessert3price.style.display = "none";
            dessert4price.style.display = "";
        }
        dessert3button.onclick = function() {
            dessert1price.style.display = "none";
            dessert2price.style.display = "none";
            dessert3price.style.display = "block";
            dessert4price.style.display = "none";
        }
        dessert4button.onclick = function() {
            dessert1price.style.display = "none";
            dessert2price.style.display = "none";
            dessert3price.style.display = "none";
            dessert4price.style.display = "block";
        }
     