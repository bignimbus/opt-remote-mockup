(function () {
  'use strict';

  function init () {
    var $restart = document.querySelector('#restart');
    var $overlay = document.querySelector('#overlay');
    var $cancel = document.querySelector('#cancel');
    var $confirm = document.querySelector('#confirm');

    function restart () {
      $overlay.style.display = 'block';
    }

    function cancel () {
      $overlay.style.display = 'none';
    }

    function confirmRestart () {
      window.location.href = window.location.href.replace(/\/\d(\.html)?/, '');
    }

    $restart.addEventListener('click', restart);

    $cancel.addEventListener('click', cancel);

    $confirm.addEventListener('click', confirmRestart);
  }

  document.addEventListener('DOMContentLoaded', init);
})();

