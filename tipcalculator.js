//Calculate Tip

function calculateTip() {
  var maxapical = document.getElementById("maxapical").value;
  var maxbasal = document.getElementById("maxbasal").value;
  var bsa = document.getElementById("bsa").value;
  var segment = document.getElementById("segment").value;
  
  var hv_mean = 3.65639
  var hv_std = 0.647852
  //validate input
  if (maxapical === "" || maxbasal === "" || bsa === "" ) {
    alert("Please enter values");
    return;
  }


  //Calculate tip
  var zscore = ((maxapical/bsa) - hv_mean) / hv_std;
  //round to two decimal places
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = zscore;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
alert("Hello, World!");
//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
