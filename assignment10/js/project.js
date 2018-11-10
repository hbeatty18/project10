$(document).ready(() => {

$('.recentpic').hide();

$('.babypic').on('click', () => {
  $('.recentpic').show ();

  $('.babypic').hide();
});

$('.futurepic').hide();

$('.collegelogo').on('click', () => {
$('.futurepic').show();

$('.collegelogo').hide();
});

});
