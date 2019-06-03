

var hour, minute, second, timeFunction;
hour = document.querySelector(".hours");
minute = document.querySelector(".minute");
second = document.querySelector(".second");

timeFunction = function(){
 var mySecond, myMinute, myHours, myDate;

   myDate = new Date()
  mySecond = myDate.getSeconds() / 60
  myMinute = (mySecond + myDate.getMinutes()) / 60;
  myHours = (myMinute + myDate.getHours()) / 12;

  setRotation(second, mySecond)
  setRotation(minute, myMinute)
  setRotation(hour, myHours)
  };

  function setRotation(element, rotationRatio) {
      element.style.setProperty('--rotation', rotationRatio * 360)
  };

timeFunction();
setInterval(timeFunction, 1000);