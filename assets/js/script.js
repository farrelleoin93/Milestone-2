//------------------------------ Show cities information and display map
$(document).ready(function(){
  $("#hanoi-info").click(function(){
    $("#hanoi").show();
    $("#map-container").show();
    $("#hanoi-activities-info").show();
    $("#sapa").hide();
    $("#hoi-an").hide();
    $("#sapa-activities-info").hide();
    $("#hoi-an-activities-info").hide();
  });

  $("#sapa-info").click(function(){
    $("#sapa").show();
    $("#map-container").show();
    $("#sapa-activities-info").show();
    $("#hanoi").hide();
    $("#hoi-an").hide();
    $("#hanoi-activities-info").hide();
    $("#hoi-an-activities-info").hide();
  });

  $("#hoi-an-info").click(function(){
    $("#hoi-an").show();
    $("#map-container").show();
    $("#hoi-an-activities-info").show();
    $("#sapa").hide();
    $("#hanoi").hide();
    $("#hanoi-activities-info").hide();
    $("#sapa-activities-info").hide();
  });
});



