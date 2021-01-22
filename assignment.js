
// 1. convart kiloMeterToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var totalMeter = kilometerToMeter(100);


// 2. product totalPrice
function budgetCalculator(clock, mobile, laptop){
    var result = clock * 3 + mobile *5 + laptop *4;
    return result; 
}
var totalPrice = budgetCalculator(50 , 100 , 500);


// 3. hotelCost menu
function hotelCost (numberOfDays){

    if (numberOfDays>=0) {
        if (numberOfDays>20) {
            var lastFewDays = numberOfDays - 20;
            var firstTenDaysCost = 100*10;
            var secondTenDaysCost = 80*10;
            var lastFewDaysCost =  lastFewDays * 50;
            var result = firstTenDaysCost + secondTenDaysCost + lastFewDaysCost;
        } 
        else if (numberOfDays>10 && numberOfDays<=20) {
            var secondFewdays = numberOfDays - 10;
            var firstTenDaysCost = 100* 10;
            var secondFewdaysCost = 80 * secondFewdays;
            var result = firstTenDaysCost + secondFewdaysCost;
        }
        else{
            var result = 100 * numberOfDays;
        }
    } else {
        var result = "Please input valid informations";
    }
    return result;
}
var totalCost = hotelCost();


// 4.find an array longestName
function megaFriend(name) {
    var longestName = "";
  
    name.forEach(function(totalName) {
      if(totalName.length > longestName.length) {
        longestName = totalName;
      }
    });
  
    return longestName;
 }
  var totalName = megaFriend(["Mohammad","Abdullah","saifullah", "Khalid islam", "Mohammad Yeaisn Arafat", "Arafat", "Rabbi",]);
  