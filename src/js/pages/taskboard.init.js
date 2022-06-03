
/*
Template Name: Highdmin - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Taskboard init js
*/

$(document).ready(function () {

  $("#upcoming, #inprogress, #completed").sortable({
      connectWith: ".tasklist",
      placeholder: 'task-placeholder',
      forcePlaceholderSize: true,
      update: function (event, ui) {

          var todo = $("#todo").sortable("toArray");
          var inprogress = $("#inprogress").sortable("toArray");
          var completed = $("#completed").sortable("toArray");
      }
  }).disableSelection();

});
