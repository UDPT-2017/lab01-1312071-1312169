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
  $('.image').click(function(){
    var id = $(this).data('id')
    $.ajax({
      url: '/images/' + $(this).data('id'),
      type: 'get',
      success: function(result){
        window.location.href = '/image/' + id;
      }
    });

  });
  $('.blog').click(function(){
    var id = $(this).data('id');
    $.ajax({
      url: '/blogs/' + $(this).data('id'),
      type: 'get',
      success: function(result){
        window.location.href = '/blog/' + id;
      }
    });

  });
});
