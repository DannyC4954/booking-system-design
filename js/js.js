$(document).ready(function(){

    // Top Nav - Today's date
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var today = ""+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+"";
    $('#current-date').html("<i class=\"far fa-calendar-alt mr-10\"></i>"+today+"");

    // Table - grab ID's and assign to hidden input
    var orderno = [];
    $('tbody tr').on('click', function(){
      var checkbox = $(this).find('.checkbox').attr('id');
      var id = '#'.concat(checkbox);
      if( $(id).css('color') == 'rgb(112, 86, 176)') {
          $(id).css('color', '#e8e8e8');
          $(this).removeClass('select-tr');
          orderno.pop(checkbox);
      } else {
          $(id).css('color', '#7056b0');
          $(this).addClass('select-tr');
          orderno.push(checkbox);
      }
      $('#delete-ids').val(orderno);
    });

    var select_count = 0;
    $('.select-btn').on('click', function(){
        orderno = [];
        select_count++;
        if (select_count%2 == 0){
            $(this).html('<i class=\"fas fa-mouse-pointer mr-10\"></i>Select All');
            $(this).removeClass('amber-background');
            $('.checkbox').each(function() {
                var id = $(this).attr('id');
                orderno.pop(id);
                $('.checkbox').css('color', '#e8e8e8');
                $('tbody tr').removeClass('select-tr');
            });
        } else {
            $(this).html('<i class=\"fas fa-redo mr-10\"></i>Refresh');
            $(this).addClass('amber-background');
            $('.checkbox').each(function() {
                var id = $(this).attr('id');
                orderno.push(id);
                $('.checkbox').css('color', '#7056b0');
                $('tbody tr').addClass('select-tr');
            });
        }
        $('#delete-ids').val(orderno);
    });

});
