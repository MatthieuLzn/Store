




/* AFFICHE LE TOTAL EN LIVE LE SOUS TOTAL ET CHANGE LA COULEUR */
function getTotal(){  
    petiteRationPrice = document.getElementById('petiteRation_button').value * 2;
    grosseRationPrice = document.getElementById('grosseRation_button').value * 8;
    epeePrice = document.getElementById('epee_button').value * 20;
    shieldPrice = document.getElementById('shield_button').value * 15;
    flaskPrice = document.getElementById('flask_button').value * 5;
    bagPrice = document.getElementById('bag_button').value * 1;


 

    document.querySelector('#subTotal_petiteRation').textContent = petiteRationPrice + '$';
    document.querySelector('#subTotal_grosseRation').textContent = grosseRationPrice + '$';
    document.querySelector('#subTotal_epee').textContent = epeePrice + '$';
    document.querySelector('#subTotal_shield').textContent = shieldPrice + '$';
    document.querySelector('#subTotal_flask').textContent = flaskPrice + '$';
    document.querySelector('#subTotal_bag').textContent = bagPrice + '$';

    while (petiteRationPrice >= 10){
        inputGrosseRationValue = parseInt(document.getElementById('grosseRation_button').value);
        petiteRationPrice -= 10;
        grosseRationPrice += 8;
        document.getElementById('petiteRation_button').value -= 5;
        document.getElementById('grosseRation_button').value = inputGrosseRationValue + 1;
        document.querySelector('#subTotal_petiteRation').textContent = petiteRationPrice + '$';
        document.querySelector('#subTotal_grosseRation').textContent = grosseRationPrice + '$';
    }

    let totalPrice = (petiteRationPrice + grosseRationPrice + epeePrice + shieldPrice + flaskPrice + bagPrice);
    document.querySelector('#total_value').textContent = totalPrice + '$';
 
    

    colorTotal = document.getElementById('total_value')
    if (totalPrice <= 50){
        colorTotal.setAttribute("style", "color: green");
    }
    else if (totalPrice <= 75){
        colorTotal.setAttribute("style", "color: orange");
    }
    else {
        colorTotal.setAttribute("style", "color: red");
        
    }

}

/* RESET TOUT */
function getReset(){
    document.getElementById('petiteRation_button').value = "0";
    

    document.getElementById('grosseRation_button').value = "0";
 

    document.getElementById('epee_button').value = "0";


    document.getElementById('shield_button').value = "0";
 

    document.getElementById('flask_button').value = "0";


    document.getElementById('bag_button').value = "0";

    document.getElementById('stock').value = 0;
    document.querySelector('#stock_announce').textContent = '0 / 15';
    getTotal();

}

/* PETITE RATION SWITCH GROSSE RATION */


/* BLOQUER */ 

function warning(){
    petiteRationValue = parseInt(document.getElementById('petiteRation_button').value);
    grosseRationValue = parseInt(document.getElementById('grosseRation_button').value);
    epeeValue = parseInt(document.getElementById('epee_button').value);
    shieldValue = parseInt(document.getElementById('shield_button').value);
    flaskValue = parseInt(document.getElementById('flask_button').value);
    bagValue = parseInt(document.getElementById('bag_button').value);
    let totalValue = (petiteRationValue + grosseRationValue + epeeValue + shieldValue + flaskValue + bagValue);
    document.getElementById('stock').value = totalValue;
    document.querySelector('#stock_announce').textContent = totalValue + ' / 15';
    if (totalValue >= 15) {
        document.getElementById('petiteRation_button').setAttribute('max',petiteRationValue);
        document.getElementById('grosseRation_button').setAttribute('max',grosseRationValue);
        document.getElementById('epee_button').setAttribute('max',epeeValue);
        document.getElementById('shield_button').setAttribute('max',shieldValue);
        document.getElementById('flask_button').setAttribute('max',flaskValue);
        document.getElementById('bag_button').setAttribute('max',bagValue);
    }
    else {
        document.getElementById('petiteRation_button').setAttribute('max',15);
        document.getElementById('grosseRation_button').setAttribute('max',15);
        document.getElementById('epee_button').setAttribute('max',15);
        document.getElementById('shield_button').setAttribute('max',15);
        document.getElementById('flask_button').setAttribute('max',15);
        document.getElementById('bag_button').setAttribute('max',15);
    }
    /* PROJET ABANDONNÉ 
    if(grosseRationValue > 15){
        document.getElementById('grosseRation_button').value = 15 - (totalValue - grosseRationValue);
    }
    if(epeeValue > 15){
        document.getElementById('epee_button').value = 15 - (totalValue - epeeValue);
    }
    if(shieldValue > 15) {
        document.getElementById('shield_button').value = 15 - (totalValue - shieldValue);
    }
    if(flaskValue > 15) {
        document.getElementById('flask_button').value = 15 - (totalValue - flaskValue);
    }
    if(bagValue > 15) {
        document.getElementById('bag_button').value = 15 - (totalValue - bagValue);
    }

    getTotal();
    */

}
/* CHANGER LE MONTANT TOTAL 

document.querySelector('#total_value').textContent = '50$';
totalValue = (petiteRationValue + grosseRationValue + epeeValue + shieldValue + flaskValue + bagValue);
document.querySelector('#total_value').textContent = '0$';
*/


function stockRandom(){
    stock_barre = document.getElementById('stock').value;
    random_number = Math.floor(Math.random() * 4);
    if (random_number == 0) {
        document.querySelector('#subTotal_grosseRation').textContent = stock_barre + "$";
        document.getElementById('grosseRation_button').value = stock_barre;
        document.querySelector('#stock_announce').textContent = stock_barre +  '/ 15';
    }
    if (random_number == 1) {
        document.querySelector('#subTotal_epee').textContent = stock_barre + "$";
        document.getElementById('epee_button').value = stock_barre;
        document.querySelector('#stock_announce').textContent = stock_barre +  '/ 15';

    }
    if (random_number == 2) {
        document.querySelector('#subTotal_shield').textContent = stock_barre + "$";
        document.getElementById('shield_button').value = stock_barre;
        document.querySelector('#stock_announce').textContent = stock_barre +  '/ 15';
    }
    if (random_number == 3) {
        document.querySelector('#subTotal_flask').textContent = stock_barre + "$";
        document.getElementById('flask_button').value = stock_barre;
        document.querySelector('#stock_announce').textContent = stock_barre +  '/ 15';
    }
    if (random_number == 4) {
        document.querySelector('#subTotal_bag').textContent = stock_barre + "$";
        document.getElementById('bag_button').value = stock_barre;
        document.querySelector('#stock_announce').textContent = stock_barre +  '/ 15';
    }

    if (stock_barre == 0) {
        getReset();
    }



    getTotal();
} 