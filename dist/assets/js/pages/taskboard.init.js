$(document).ready(function(){$("#upcoming, #inprogress, #completed").sortable({connectWith:".tasklist",placeholder:"task-placeholder",forcePlaceholderSize:!0,update:function(e,o){$("#todo").sortable("toArray"),$("#inprogress").sortable("toArray"),$("#completed").sortable("toArray")}}).disableSelection()});