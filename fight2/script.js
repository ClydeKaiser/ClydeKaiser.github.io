var amount = "";
document.getElementById("betBtn").addEventListener("click", function money(){
  amount = prompt("Enter the amount you would like to Bet", "$00.00")
  if (amount != null && amount != "$00.00"){
  alert("Your bet has been placed! Thank you for your buisnesss!")
  }
});
