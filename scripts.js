/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

   1, 1, 1, 1
   2, 1, 1
   1, 2, 1
   1, 1, 2
   2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

const fib = (n) => {
  if (n===0) {return 0}
  if (n===1) {return 1}
  let first = 1;
  let second = 2;
  let total = 0;
  for (i=1; i<n; i++) {
    total = first + second;
    first = second;
    second = total;
  }
  return total;
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let number = $("#input1").val();
    let final = fib(number);
    $('#output-section-1').text(number);
    $('#output-section-2').text(final);
  });
});
