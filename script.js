// Your JS goes here
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

'use strict'
var imgRay = [];

for(var i = 0; i <= 30; i++) {
  $('body').append('<div class="black"></div>');
  $('body').append('<div class="red"></div>');
}
$('body').append('<div class="black"></div>');

var $firstBox = $('div').first();
var imgWidth = $firstBox.css('width');
var imgHeight = $firstBox.css('height');
//console.log($firstBox);

$('div').css('width','11.1%');
var height = $('div').css('width');
$('div').css('height', height).css('float', 'left').css('max-height', height/2).css('overflow', 'hidden');

$('.red').css('background-color', 'red');
$('.black').css('background-color', 'black');
$('body').css('padding', '0 5.55%').css('box-sizing', 'content-box');

$('body').append('<div class="modal"></div>');

$('.modal').css('width', '35%').css('height', '35vh').css('background-color', 'rgba(254, 254, 254, .7)').css('position', 'fixed').css('top', '30%').css('left', '30%').css('border-radius', '20px').append('<form><label for="search">Search OMDB</label><input type="text" name="search" value=""><button type="button" name="searchButton">Search</button></form>');

$('form').css('margin', '15% 5% 0 5%');
$('input').css('margin-left', '1%');
var $input;
$('input').css('font-size', '2.2rem');

$('button').click(function() {
  $('.modal').css('display', 'none');
  $input = $('input').val();
  $('div').empty();
  $('main').append('<div></div>');
  if($input === '') {
    console.log('Its Blank');
  } else {
    $('input').val('');
    var str = 'http://www.omdbapi.com/?s=' + $input;
    $.get(str, function(data) {
      for(var i = 0; i < data.Search.length; i++) {
        var imgStr = '<div class="div-pic"><img src="' +  data.Search[i].Poster + '"><div>' ;
        imgRay.push(imgStr);
      }

      if(imgRay.length > 1 && imgRay.length < 32){
        var imgRayCounter = 0;
        while(imgRay.length < 33) {
          imgRay.push(imgRay[imgRayCounter]);
          imgRayCounter++;
        }
      }
      console.log(imgRay);
      //$firstBox.append(imgRay[0]);
      $('img').css('max-width', '100%').css('max-height', '100%');
      var myElement = $firstBox;
      for(var k = 0; k <= 31; k++) {
        myElement.append(imgRay[k]);
        myElement = myElement.next().next();
      }
      $('img').css('max-width', '100%').css('max-height', '100%');
    });
  }
});
