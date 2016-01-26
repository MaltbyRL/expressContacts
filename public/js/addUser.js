"use strict";

$(document).ready(init);

var $name, $email, $add, $info;

function init(){
  $name = $('#name');
  $email = $('#email');
  $info = $('#info');
  $add = $('#add');

  $add.click(addUser);
}

function addUser(){
  var name = $name.val();
  var email = $email.val();
  var info = $info.val();
  $.post('/users', {name: name, email: email, info: info})
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console. *_*');
    console.error('Error:', err);
  })
}
