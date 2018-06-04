$(document).ready(function(){

}

$( function() {
  $( "#sortable1" ).sortable({
    items: "li:not(.ui-state-disabled)"

  });

  $( "#sortable2" ).sortable({
    cancel: ".ui-state-disabled"

  });

  $( "#sortable1 li, #sortable2 li" ).disableSelection();

} );



$("#newTaskbtn").on('click', {
  let newTaskText = $('#newTask').val();
  //alert(newTodoText);
  $('#sortable1').append('<li>' + newTaskText + '</li>')
  $('new')
})
