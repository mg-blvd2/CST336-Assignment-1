//This part will make a warning window appear.
$("#dontClick").click(function(){
    var goToWindow= false;
    goToWindow = confirm("Are you sure you want to enter this page?\nIt's cursed!");
    if(goToWindow){
        window.location.replace("php_page.html")
    }
})

//This will make the word Disclaimer flash oncscreen
var disclaimerTest = document.getElementById("disclaimer")
var isWhite = true;
var colorChanger = setInterval(changeDisclaimerColor, 1000);

function changeDisclaimerColor(){
    if(isWhite){
        disclaimerTest.style.color = "red";
        isWhite = false;
    }else{
        disclaimerTest.style.color = 'white';
        isWhite = true;
    }
}
