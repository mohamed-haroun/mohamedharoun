"use strict";

import { quotes } from "./qoutes.js";

let shower = document.querySelector('#shower');
let show = document.querySelector('#show');

shower.addEventListener('click', function() {
  show.innerHTML = quotes[Math.trunc(Math.random() * 10)]
});

let form = document.forms[0];

form.addEventListener('submit', function() {
  alert('Thanks For the message ' + form.fname.value);
});