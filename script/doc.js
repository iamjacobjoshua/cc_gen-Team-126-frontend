
document.getElementById("cc-click").addEventListener("click", function()
{
  var cc_item = document.getElementById("cc-menu");
  var ci_mage = document.getElementById("cc-image");
  if(cc_item.style.display == "none" && ci_mage.getAttribute('src') == "img/arrow-right.svg"){
    cc_item.style.display = "block";
    ci_mage.src = "img/arrow-down.svg";
  } else {
    cc_item.style.display = "none";
    ci_mage.src = "img/arrow-right.svg";
  }
})


document.getElementById("ma-click").addEventListener("click", function()
{
  var ma_item = document.getElementById("ma-menu");
  var i_mage = document.getElementById("ma-image");
  if (ma_item.style.display == "none" && i_mage.getAttribute('src') == "img/arrow-right.svg") {
    ma_item.style.display = "block"
    i_mage.src = "img/arrow-down.svg";
  } else {
    ma_item.style.display = "none"
    i_mage.src = "img/arrow-right.svg";
  }
  
})
function openOverview() {
  document.getElementById("sec2-1").style.display = "none";
  document.getElementById("sec2-0").style.display = "block";
  document.getElementById("sec2-2").style.display = "none";
  document.getElementById("sec2-3").style.display = "none"
  document.getElementById("sec2-4").style.display = "none"
  document.getElementById("sec2-5").style.display = "none"
}

  
function openEditLib(){
  document.getElementById("sec2-1").style.display = "block";
  document.getElementById("sec2-0").style.display = "none";
  document.getElementById("sec2-2").style.display = "none";
  document.getElementById("sec2-3").style.display = "none";
  document.getElementById("sec2-4").style.display = "none";
  document.getElementById("sec2-5").style.display = "none"
}

function openCustomize() {
  document.getElementById("sec2-2").style.display = "block";
  document.getElementById("sec2-0").style.display = "none";
  document.getElementById("sec2-1").style.display = "none";
  document.getElementById("sec2-3").style.display = "none";
  document.getElementById("sec2-4").style.display = "none";
  document.getElementById("sec2-5").style.display = "none"
}

function openOverview2() {
  document.getElementById("sec2-3").style.display = "block";
  document.getElementById("sec2-0").style.display = "none"
  document.getElementById("sec2-1").style.display = "none"
  document.getElementById("sec2-2").style.display = "none"
  document.getElementById("sec2-4").style.display = "none"
  document.getElementById("sec2-5").style.display = "none"
}

function openCreateYA() {
  document.getElementById("sec2-4").style.display = "block";
  document.getElementById("sec2-0").style.display = "none"
  document.getElementById("sec2-1").style.display = "none"
  document.getElementById("sec2-2").style.display = "none"
  document.getElementById("sec2-3").style.display = "none"
  document.getElementById("sec2-5").style.display = "none"
}

function openShareCC() {
  document.getElementById("sec2-5").style.display = "block";
  document.getElementById("sec2-0").style.display = "none"
  document.getElementById("sec2-1").style.display = "none"
  document.getElementById("sec2-2").style.display = "none"
  document.getElementById("sec2-3").style.display = "none"
  document.getElementById("sec2-4").style.display = "none"
}

/*function openMaMenu() {
  document.getElementById("ma-menu").style.display = "block";
  document.getElementById("ma-image").src = "img/arrow-down.svg";
}*/
