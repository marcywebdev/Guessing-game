const pics = ["alex.png", "anita.png", "peter.png", "eric.png", "charles.png", "sam.png", "joe.png", "maria.png", "philip.png", "richard.png", "susan.png", "max.png", "alfred.png", "robert.png", "frans.png", "claire.png", "paul.png", "bill.png", "david.png", "bernard.png", "george.png", "tom.png", "herman.png", "anne.png"];

$('.card').click(function () {
  if ($(this).hasClass('out'))
    $(this).removeClass('out').addClass('in');
  else
    $(this).addClass('out').removeClass('in');
});