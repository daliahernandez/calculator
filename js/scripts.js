$(document).ready(function(){
  $('#userAnswer form').submit(function(event){
    var numOne = parseInt($('input#numOne').val());
    var numTwo = parseInt($('input#numTwo').val());

    function add(){
      var answer = numOne + numTwo
      return answer
    }

    $('.add').text(add())

    event.preventDefault();

  })
})
