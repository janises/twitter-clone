$(document).ready(function(){
  let charCount = $("#char-count");
  let tweetControls = $("#tweet-controls");
  let tweetCompose = $(".tweet-compose");

  tweetCompose.one("click", function(){ //only changes css once on click
    $(this).height($(this).height()*2);
      charCount.css("visibility", "visible");
      tweetControls.css("visibility", "visible");
  });

  tweetCompose.on("keyup", function(){
    let tweetLength = tweetCompose.val().length;
    charCount.text(140 - tweetLength);
    if(tweetLength === 140){
      $("#tweet-submit").prop("disabled", true);
    } else {
      $("#tweet-submit").prop("disabled", false);
      charCount.css("color", "gray");
      if(charCount.text() <= 10) {
        charCount.css("color", "red");
      }
    }
  });

}); //end of document ready
