function distanceFromHqInBlocks(someValue) {
   someValue = someValue - 42;
   if(someValue < 0){
    someValue = someValue * -1;
   }
   return someValue
  }
  
  function distanceFromHqInFeet(someValue) {
    someValue =   (someValue - 42) * 264;
    if(someValue < 0){
     someValue = someValue * -1;
    }
    return someValue
   }
     
  function distanceTravelledInFeet(startingPoint,endingPoint){
    endingPoint = (startingPoint - endingPoint) * 264
    if(endingPoint < 0){
     endingPoint = endingPoint * -1;
    }
    return endingPoint
      }
      
      function calculatesFarePrice(start, destination){
        destination = (start - destination) * 264
if(destination < 0){
 destination = destination * -1;
}
if (destination < 400){
    destination = 0
}
else if(destination >= 400 && destination <= 2000){
    destination = (destination - 400) * 0.02
}
else if(destination > 2000 && destination <= 2500){
    destination = 25
}
else if (destination > 2500 ){
    destination = 'cannot travel that far'
}
return destination
  }
      

  

  