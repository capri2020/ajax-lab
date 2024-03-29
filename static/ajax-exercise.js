"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (results) => {
      const fortune = results;

      $('#fortune-text').html(fortune);
    });
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};



    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get('/weather.json', formData, (results) => {
      const weather = results;
      $('#weather-info').html(weather.forecast);

    });

}

$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    let url = "/order-melons.json";
    let formInputs = {
      "qty": $("#qty-field").val(),
      "melon_type": $("#melon-type-field").val()
    };

    $.post('/order-melons.json', formInputs, (results) => {

      const order_melons = results;
      // $('#order-code').html(order_melons['code']);
      // $('#order-msg').html(order_melons['msg']);
      $('#order-status').html(order_melons['code'] + ', ' + order_melons['msg']);

    });

}

$("#order-form").on('submit', orderMelons);


