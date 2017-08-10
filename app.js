$(document).ready(function() {
  $(".btn").click(function(e) {
    console.log('e: ', e);
    $(".output").text(e.currentTarget.innerHTML);
  })
});