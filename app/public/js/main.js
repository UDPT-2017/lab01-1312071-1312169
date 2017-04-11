$(document).ready(function(){
  $('.album').click(function(){
    var id = $(this).data('id')
    $.ajax({
      url: '/albums/' + $(this).data('id'),
      type: 'get',
      success: function(result){
        window.location.href = '/albums/' + id
      }
    })
  });
});