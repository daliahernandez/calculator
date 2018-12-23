$(document).ready(function(){
  $('#userAnswerAdd form').submit(function(event){
    var numOne = parseInt($('input#numOne').val());
    var numTwo = parseInt($('input#numTwo').val());

    function add(){
      var answer = numOne + numTwo
      return answer
    }
    $('.add').text(add())
    event.preventDefault();
  })

  $('#userAnswersub form').submit(function(event){
    var num1 = $('input#num1').val();
    var num2 = $('input#num2').val();

    function sub(){
      var result = num1 - num2
      return result
    }
    $('.sub').text(sub());
    event.preventDefault();
});

$('#userAnswermult form').submit(function(event){
  var num1 = $('input#numberOne').val();
  var num2 = $('input#numberTwo').val();

  function mult(){
    var result = num1 * num2
    return result
  }
  $('.mult').text(mult());
  event.preventDefault();
});

$('#userAnswerdiv form').submit(function(event){
  var num1 = $('input#n1').val();
  var num2 = $('input#n2').val();

  function div(){
    var result = num1 / num2
    return result
  }
  $('.div').text(div());
  event.preventDefault();
});
});
