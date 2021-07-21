console.log("hello-world");

function northRedToGreen() {
  $(".traffic-light-n .bulb:nth-child(1)").removeClass("red");
  $(".traffic-light-n .bulb:nth-child(3)").addClass("green");
}

function northGreenToYellow() {
  $(".traffic-light-n .bulb:nth-child(3)").removeClass("green");
  $(".traffic-light-n .bulb:nth-child(2)").addClass("yellow");
}

function northYellowToRed() {
  $(".traffic-light-n .bulb:nth-child(2)").removeClass("yellow");
  $(".traffic-light-n .bulb:nth-child(1)").addClass("red");
}

function southRedToGreen() {
  $(".traffic-light-s .bulb:nth-child(1)").removeClass("red");
  $(".traffic-light-s .bulb:nth-child(3)").addClass("green");
}

function southGreenToYellow() {
  $(".traffic-light-s .bulb:nth-child(3)").removeClass("green");
  $(".traffic-light-s .bulb:nth-child(2)").addClass("yellow");
}

function southYellowToRed() {
  $(".traffic-light-s .bulb:nth-child(2)").removeClass("yellow");
  $(".traffic-light-s .bulb:nth-child(1)").addClass("red");
}

function westRedToGreen() {
  $(".traffic-light-w .bulb:nth-child(1)").removeClass("red");
  $(".traffic-light-w .bulb:nth-child(3)").addClass("green");
}

function westGreenToYellow() {
  $(".traffic-light-w .bulb:nth-child(3)").removeClass("green");
  $(".traffic-light-w .bulb:nth-child(2)").addClass("yellow");
}

function westYellowToRed() {
  $(".traffic-light-w .bulb:nth-child(2)").removeClass("yellow");
  $(".traffic-light-w .bulb:nth-child(1)").addClass("red");
}

function eastRedToGreen() {
  $(".traffic-light-e .bulb:nth-child(1)").removeClass("red");
  $(".traffic-light-e .bulb:nth-child(3)").addClass("green");
}

function eastGreenToYellow() {
  $(".traffic-light-e .bulb:nth-child(3)").removeClass("green");
  $(".traffic-light-e .bulb:nth-child(2)").addClass("yellow");
}

function eastYellowToRed() {
  $(".traffic-light-e .bulb:nth-child(2)").removeClass("yellow");
  $(".traffic-light-e .bulb:nth-child(1)").addClass("red");
}

function traffic_light(direction, status) {
  this.direction = direction;
  this.status = status;

  let light_type = ["red", "yellow", "green"];

  this.RedToGreen = function () {
    if (this.status == "red") {
      this.status = light_type[2];
    } else {
      console.log("Error: the light status is not red");
    }
  };

  this.GreenToYellow = function () {
    if (this.status == "green") {
      this.status = light_type[1];
    } else {
      console.log("Error: the light status is not green");
    }
  };

  this.YellowToRed = function () {
    if (this.status == "yellow") {
      this.status = light_type[0];
    } else {
      console.log("Error: the light status is not yellow");
    }
  };
}
function trafficLightControl(
  northLight,
  southLight,
  westLight,
  eastLight,
  time_control,
  time_control_length,
  change_order_index
) {
  setTimeout(function () {
    if (northLight.status == "red" && westLight.status == "green") {
      westLight.GreenToYellow();
      eastLight.GreenToYellow();
      eastGreenToYellow();
      westGreenToYellow();
    } else if (northLight.status == "red" && westLight.status == "yellow") {
      northLight.RedToGreen();
      northRedToGreen();
      westLight.YellowToRed();
      westYellowToRed();
      southLight.RedToGreen();
      southRedToGreen();
      eastLight.YellowToRed();
      eastYellowToRed();
    } else if (northLight.status == "green" && westLight.status == "red") {
      northLight.GreenToYellow();
      northGreenToYellow();
      southLight.GreenToYellow();
      southGreenToYellow();
    } else if (northLight.status == "yellow" && westLight.status == "red") {
      northLight.YellowToRed();
      northYellowToRed();
      southLight.YellowToRed();
      southYellowToRed();
      westLight.RedToGreen();
      westRedToGreen();
      eastLight.RedToGreen();
      eastRedToGreen();
    }
    console.log(
      "N: " +
        northLight.status +
        " S: " +
        southLight.status +
        " W: " +
        westLight.status +
        " E: " +
        eastLight.status
    );
    console.log("Change_order_index: " + change_order_index);
    change_order_index++;
    // coutdown_time = time_control[change_order_index % time_control_length][1]
    // document.getElementById("countdown-element").innerHTML = coutdown_time;
    // coutdown_time--;
    trafficLightControl(
      northLight,
      southLight,
      westLight,
      eastLight,
      time_control,
      time_control_length,
      change_order_index
    );
  }, time_control[change_order_index % time_control_length][1]);
}

var northLight = new traffic_light("north", "red");
var southLight = new traffic_light("south", "red");
var westLight = new traffic_light("west", "green");
var eastLight = new traffic_light("east", "green");

var time_control = [
  ["RGLightInt", 4000],
  ["YLightInt", 1000],
];
var time_control_length = time_control.length;
var change_order_index = 0;

trafficLightControl(
  northLight,
  southLight,
  westLight,
  eastLight,
  time_control,
  time_control_length,
  change_order_index
);

