$(document).ready(function() {

//TEST CASE #1
  function checkWin(a) {
    if ($("#1").hasClass(a) && $("#2").hasClass(a) && $("#3").hasClass(a) ||
      $("#4").hasClass(a) && $("#5").hasClass(a) && $("#6").hasClass(a) ||
      $("#7").hasClass(a) && $("#8").hasClass(a) && $("#9").hasClass(a) ||
      $("#1").hasClass(a) && $("#5").hasClass(a) && $("#9").hasClass(a) ||
      $("#3").hasClass(a) && $("#5").hasClass(a) && $("#7").hasClass(a) ||
      $("#1").hasClass(a) && $("#4").hasClass(a) && $("#7").hasClass(a) ||
      $("#2").hasClass(a) && $("#5").hasClass(a) && $("#8").hasClass(a) ||
      $("#3").hasClass(a) && $("#6").hasClass(a) && $("#9").hasClass(a)) {
      $(".col-xs-4").unbind();
      $(".col-xs-4").css("opacity", "0.6");
      $(".text h1").html(a + " Wins!");
      $(".text").show();
      return true;
    } else {
      return false;
    }
  }

  //$("#1").addClass("circle");
  //$("#2").addClass("circle");
  //$("#3").addClass("circle");
  console.log(checkWin("circle"));
  //TEST CASE #1 ENDS

  //TEST CASE #2
  var divArray = ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9"];
  function checkTie() {
    if (checkWin("cross") === false && checkWin("circle") === false) {
      var tie = 0;
      for (var i = 0; i < divArray.length; i++) {
        if ($(divArray[i]).hasClass("cross") || $(divArray[i]).hasClass("circle")) {
          tie += 1;
        }
      }
      if (tie === 9) {
        $(".col-xs-4").unbind();
        $(".col-xs-4").css("opacity", "0.6");
        $(".text h1").html("It's a Tie!");
        console.log('Tie True')
        $(".text").show();
      }
    } else {
      checkWin("cross");
      checkWin("circle");
    }
}
    //$("#1").addClass("cross");
    //$("#2").addClass("cross");
    //$("#3").addClass("circle");
    //$("#4").addClass("circle");
    //$("#5").addClass("circle");
    //$("#6").addClass("cross");
    //$("#7").addClass("cross");
    //$("#8").addClass("circle");
    //$("#9").addClass("cross");
    //checkTie();

  //TEST CASE #2 ENDS

  //TEST CASE #3
  function newGame() {
    $(".col-xs-4").empty();
    $(".col-xs-4").removeClass("cross circle");
    $(".col-xs-4").css("background", "#fff");
    $(".col-xs-4").css("opacity", "1");
    $(".text").hide();
    $(".col-xs-4").unbind();
  }
  $(".new").click(function(){
    newGame();
  });

  //TEST CASE #3 ENDS
  //TEST CASE #4
  var X = '<i class="fa fa-times fa-4x" aria-hidden="true"></i>';
  var O = '<i class="fa fa-circle-o fa-4x" aria-hidden="true"></i>';
  function easyMove() {
    if (checkWin("cross") === false) {
      if ($("#1").is(":empty") || $("#2").is(":empty") || $("#3").is(":empty") || $("#4").is(":empty") || $("#5").is(":empty") || $("#6").is(":empty") || $("#7").is(":empty") || $("#8").is(":empty") || $("#9").is(":empty")) {
        var random = Math.floor(Math.random() * 9);
        var randomdiv = $(".col-xs-4").eq(random);
        if ($(randomdiv).html().length == 0) {
          $(O).appendTo($(randomdiv));
          $(randomdiv).addClass("circle");
          checkWin("circle");
          checkTie();
          $(".col-xs-4").click(easyAi);
        } else {
          easyMove()
        }
      }
    } else {
      checkWin("cross");
      checkWin("circle");
      checkTie();
    }
  }
    //$("#1").removeClass("cross");
    //$("#2").removeClass("cross");
    //$("#3").removeClass("circle");
    //$("#4").removeClass("circle");
    //$("#5").removeClass("circle");
    //$("#6").removeClass("cross");
    //$("#7").removeClass("cross");
    //$("#8").removeClass("circle");
    //$("#9").removeClass("cross");
  $(".em").click(function(){
    easyMove();
  });
  //TEST CASE #4 ENDS

  //TEST CASE #5
  function hardAi() {
    if ($(".col-xs-4").html().length == 0) {
      $(X).appendTo($(".col-xs-4"));
      $(".col-xs-4").addClass("cross");
      checkWin("cross");
      checkTie();
      greatCounter();
    }
  }
  function youCantWin(side, a, b, c) { /* check if 2 consecutives X or O */
      if ($(a).hasClass(side) && $(b).hasClass(side) && $(c).is(":empty") ||
        $(c).hasClass(side) && $(a).hasClass(side) && $(b).is(":empty") ||
        $(b).hasClass(side) && $(c).hasClass(side) && $(a).is(":empty")) {
        if ($(a).is(":empty")) {
          $(O).appendTo($(a));
          $(a).addClass("circle");
          checkWin("circle");
          checkTie();
          hardAi();
        } else if ($(b).is(":empty")) {
          $(O).appendTo($(b));
          $(b).addClass("circle");
          checkWin("circle");
          checkTie();
          hardAi();
        } else {
          $(O).appendTo($(c));
          $(c).addClass("circle");
          checkWin("circle");
          checkTie();
          hardAi();
        }
      } else {
        return false;
      }
    }
    $("#1").addClass("circle");
    $("#2").addClass("circle");
    $("#3").addClass("circle");
    console.log(youCantWin("circle", "#1", "#2","#3")); 
  //TEST CASE #5 ENDS
  //TEST CASE #6
  //TEST CASE #6 ENDS
  //TEST CASE #7 
  //TEST CASE #7 ENDS

});