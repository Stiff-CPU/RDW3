$(document).ready(function(){
	$('h2.accordion').click(function(){
        $( "div.accordion" ).each(function( index ) {
            $(this).slideUp("slow");
          });
          if ($(this).parent().find('div.accordion').is(':visible')) {
            $(this).parent().find('div.accordion').slideUp("slow");
          } else {
            $(this).parent().find('div.accordion').slideToggle("slow")
          }
		;
  });
  
  $('.articleUserVotes > .up').click(function(){
    let val = $(this).parent('.articleUserVotes').children('.voteValue').text();
    val =parseInt(val.replace('+', '')) 
    val = val +1;
    $(this).parent('.articleUserVotes').children('.voteValue').text('+'+val);
  });

  $('.articleUserVotes > .down').click(function(){
    let val = $(this).parent('.articleUserVotes').children('.voteValue').text();
    val =parseInt(val.replace('+', '')) 
    val = val - 1;
    $(this).parent('.articleUserVotes').children('.voteValue').text('+'+val);
  });


  $('.userVotes > .up').click(function(){
    let val = $(this).parent('.userVotes').children('.voteValue').text();
    val =parseInt(val.replace('+', '')) 
    val = val +1;
    $(this).parent('.userVotes').children('.voteValue').text('+'+val);
  });

  $('.userVotes > .down').click(function(){
    let val = $(this).parent('.userVotes').children('.voteValue').text();
    val =parseInt(val.replace('+', '')) 
    val = val - 1;
    $(this).parent('.userVotes').children('.voteValue').text('+'+val);
  });


});