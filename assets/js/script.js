//------------------------------ Show cities information
$(document).ready(function(){
  $("#hanoi-info").click(function(){
    $("#hanoi").show();
    $("#sapa").hide();
    $("#hoi-an").hide();
  });

  $("#sapa-info").click(function(){
    $("#sapa").show();
    $("#hanoi").hide();
    $("#hoi-an").hide();
  });

  $("#hoi-an-info").click(function(){
    $("#hoi-an").show();
    $("#sapa").hide();
    $("#hanoi").hide();
  });

  
//------------------------------ Show hanoi options information


  $("#hanoi-activities").click(function(){
    $("#hanoi-activities-info").show();
    $("#hanoi-restaurants-info").hide();
    $("#hanoi-culture-info").hide();
  });

   $("#hanoi-restaurants").click(function(){
    $("#hanoi-restaurants-info").show();
    $("#hanoi-activities-info").hide();
    $("#hanoi-culture-info").hide();
  });

   $("#hanoi-culture").click(function(){
    $("#hanoi-culture-info").show();
    $("#hanoi-restaurants-info").hide();
    $("#hanoi-activities-info").hide();
  });
}); 



