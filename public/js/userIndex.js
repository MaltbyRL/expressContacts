'use strict';

$(document).ready(init);

function init () {
  console.log('userIndex.js');
  $("#userList").on('click', 'tr', clickRow);
}

function clickRow() {
  var index = $(this).index();
  console.log('Index:', index)
  location.href = '/views/userinfo'
}
