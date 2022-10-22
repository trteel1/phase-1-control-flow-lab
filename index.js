function scuberGreetingForFeet(free){
  
  if (free <= 400) {
   return "This one is on me!";
    }
 else if (free >400 && free<2000){
  return "That will be twenty bucks.";
 }
 else if (free >2000 && free<=2500 ){
   return "I will gladly take your thirty bucks.";
 }
  else if  (free>2500 ){
   return "No can do.";
  }
}
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
  
  return (city=== "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  
  if (tip==='generous'){
    return 'Thank you so much.';
  }
   else if  (tip==='not as generous'){
    return 'Thank you.';
  }
   else { return 'Bye.';
   }

}