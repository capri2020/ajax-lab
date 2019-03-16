"use strict";

function handleOrderSubmit() {
  $('#order-form').on('submit', (evt) => {
    evt.preventDefault();

    const formInputs = {
      'type': $('#type-field').val(),
      'amount': $('#amount-field').val()
    };

    $.post('/new-order', formInputs, (results) => {
      alert(results);
    });
  });
}

handleOrderSubmit();
