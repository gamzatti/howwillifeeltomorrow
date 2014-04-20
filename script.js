$(document).ready(function(){
  $('.quantity1').val(''); 
  $('.quantity2').val(''); 
  $('.percent1').val(''); 
  $('.percent2').val(''); 
  $('.water').val(''); 
  $('.food').val(''); 
  $('.sleep').val(''); 
  $('#answer').css('display', 'none');
  $('#more-drinks').css('display', 'none');
  $('#reset').css('display', 'none');
  
})


$(document).on('click','#more', function(){
  $('#more-drinks').slideToggle();
});

$(document).on('click','#go', function(){
  var units1 = ($('.quantity1').val() * $('.percent1').val() / 1000);
  var units2 = ($('.quantity2').val() * $('.percent2').val() / 1000);
  var units = units1 + units2;
  var water = $('.water').val();
  var food = $('.food').val();
  var water = ($('.water').val() - (units/2.5));
  var food = ($('.food').val() - (units/4));
  var sleep = (($('.sleep').val() - 7) - (units/4));
  $('#answer').css('display', 'block');
  $('#reset').css('display', 'block');

  var result = (units - water - food - sleep)

  if (result < 3) {
    var feeling = 'perfectly fine';
  }
  else if (result > 3 && result < 6 ) {
    var feeling = 'dehydrated on waking, but fine after some water and breakfast';
  }
  else if (result > 6 && result < 9 ) {
    var feeling = 'physically fine, but unmotivated and unable to concentrate all day';
  }
  else if (result > 9 && result < 12 ) {
    var feeling = 'slightly ill and dehydrated for most of the day, as well as unmotivated and unfocused';
  }
  else if (result > 12 && result < 15 ) {
    var feeling = 'hungover';
  }
  else if (result > 15 ) {
    var feeling = 'horrible';
  }
  
  $('#feeling').html(feeling);
//  $('#result').html('Adjusted score:' + result); 
})

$(document).on('click','#reset', function(){
  location.reload();
});

