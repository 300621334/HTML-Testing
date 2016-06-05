/* http://www.w3schools.com/jsref/dom_obj_table.asp */
/*following method works for creating <p> kind of tags BUT for Table this code keeps 
 *creating a closing tag for each tag & a set of <tr> for ea <td> & a set of <tbody> for ea <tr> e.g <tr></tr> ing <tbody> all 
 * over & doesn't work.! ------ so I used <ul><li> instead*/
//function eventListeners() {
//    reset NOT working!!!! on "change" of input foelds.


//    document.getElementById("rows").addEventListener("change", reset, false);
//    document.getElementById("cols").addEventListener("change", reset, false);
//    window.addEventListener("load", reset, false);
//    generateTable();
//}




function generateTable() {
    //var row = document.getElementById("rows").valueAsNumber;
    //var col = document.getElementById("cols").valueAsNumber;
    //.valueAsNumber ONLY works if input type is number. NOT e type-text. But annoying spinner shows up if type=number.
    var row = parseInt(document.getElementById("rows").value);
    var col = parseInt(document.getElementById("cols").value);
    var tab = document.getElementById("tableHolder");
    var rowNo = 0;
    var colNo = 0;
    var nextList = "";
    var r = 0;
    var boxIndex;
    document.getElementById("color").addEventListener("click", colorTheBox, false);
    //window.addEventListener("click", colorTheBox, false);
    /*http://www.w3schools.com/js/js_htmldom_eventlistener.asp*/
    
    
    tab.innerHTML = "";


if (col > 15) {
        window.alert('Columns cannot exceed 15')
    }
    else 
    {  
        setTimeout(fn1, 500); 
    }




function fn1()
{
    while(r < row)
    {
        tab.innerHTML += "<ul>";
        fn2(r);
        r++;
        setTimeout(fn1, 500);
        break;
    }
    //colorTheBox();
}

    
    
    
    
    
    function fn2(r) {
         
        {
            nextList = document.getElementsByTagName("ul");
            //tab.innerHTML += "<ul>"; 
            rowNo++;
            colNo = 0;
            for (var c = 0; c < col; c++) {
            colNo++;
            nextList[r].innerHTML += "<li>(" + rowNo + ", " + colNo + ")</li>";
            }
        }
    }
        
   
   //bgcolor randomly
   function colorTheBox() {
            var listBox = document.getElementsByTagName("li");
            for(var i=0;i<listBox.length;i++)
            listBox[i].style.backgroundColor = randomColor();
   }
            
            
   function randomColor() {
       //rgb value is 0-255 total 256... 
       //Math.floor(Math.random() * (max-min+1)) + min;
       var r = Math.floor(Math.random() * (255-0+1)) + 0;
       var g = Math.floor(Math.random() * (255-0+1)) + 0;
       var b = Math.floor(Math.random() * (255-0+1)) + 0;
       var rgb = "rgb(" + r + "," + g + "," + b + ")";
       return rgb;
   }
}
function resettable() {
      document.getElementById("rows").value = "";
    document.getElementById("cols").value = "";
    document.getElementById("tableHolder").innerHTML = "";
   }
/*http://www.w3schools.com/jsref/met_document_createattribute.asp
  www.w3schools.com/jsref/met_element_setattribute.asp*/






//Following Method closes </ul> auto, but still displays boxes on screen. Even though syntax is worng!

    /*if (col > 20) {
        window.alert('Columns cannot exceed 20')
    }
    else {

        for (var r = 0; r < row; r++) {
            tab.innerHTML += "<ul>";
            rowNo++;
            colNo = 0;
            for (var c = 0; c < col; c++) {
                colNo++;
                tab.innerHTML += "<li>(" + rowNo + ", " + colNo + ")</li>";
            }
            tab.innerHTML += " </ul>";
        }
    }*/
































///*events-ref = http://www.w3schools.com/jsref/dom_obj_event.asp
//radio Button events = http://www.w3schools.com/jsref/prop_radio_checked.asp
//*/

///*BMI is diff from BMR = http://www.thecalculatorsite.com/health/bmr-calculator.php
//my calculations are inLine with this = http://www.myfitnesspal.com/tools/bmr-calculator
//*/

///*http://stackoverflow.com/questions/27849944/input-value-is-a-string-instead-of-a-number*/
////use element.valueAsNumber to fetch value as a number
////or multiply element.value by say '1' to convert it to number BEFORE using + otherwise it will catenete (NO addition).


////variables that need to be used by >1 fn. Otherwise u get NaN at times.
//var result = 0;
//var age = 0;
//var feet = 0;
//var inches = 0;
//var pounds = 0;
//var cm = 0;
//var kg = 0;
//var ageMet = 0;
//var ht = 0;
//var wt = 0;
//var isItMetric = false;

////Event Listeners
//document.getElementById("unit1").addEventListener("click", reset, false);
//document.getElementById("unit1").addEventListener("click", showimperial, false);
//document.getElementById("unit2").addEventListener("click", reset, false);
//document.getElementById("unit2").addEventListener("click", showmetric, false);

//document.getElementById("genderMale").addEventListener("click", calcMen, false);
//document.getElementById("genderFemale").addEventListener("click", calcWomen, false);
//window.addEventListener("load", reset, false);
//for (var i = 0; i < 5; i++) {
//    document.getElementsByName("activity")[i].addEventListener("change", activityLevel, false);
//}





//        function showimperial()
//        {
//        document.getElementById("metricDiv").style.visibility = "hidden";
//        document.getElementById("metricDiv").style.opacity = "0";
//        document.getElementById("imperialDiv").style.visibility = "visible";
//        document.getElementById("imperialDiv").style.opacity = "1.0";
//        isItMetric = false;
//        }


//        function showmetric()
//        {
//        document.getElementById("metricDiv").style.visibility = "visible";
//        document.getElementById("metricDiv").style.opacity = "1.0";
//        document.getElementById("imperialDiv").style.visibility = "hidden";
//        document.getElementById("imperialDiv").style.opacity = "0";
//        isItMetric = true;
//        }





////Activity Level changes "result" - radio btn.
//function activityLevel() {
//    var x = [1.2, 1.375, 1.55, 1.725, 1.9];
//    for (var i = 0; i < 5; i++) {
//        var y = document.getElementsByName("activity")[i];
//        if (y.checked)
//        { document.getElementById("result").innerHTML = "Your Metabolic Rate is: "+ (result * x[i]).toFixed(0); }
//    }
//}




////Reset fields on page load: 
////get ele by tag dot att = http://www.w3schools.com/jsref/met_element_getattribute.asp
////setAttr = http://www.w3schools.com/jsref/met_element_setattribute.asp
////it's Element(s) pleural for TagName - for loop .Length property to change all = http://www.w3schools.com/jsref/met_document_getelementsbytagname.asp


//function reset() {
//    document.getElementById("result").innerHTML = "";

//    /*var x = document.getElementsByTagName("input");
//    for (var i = 0; i < x.length; i++) {
//        x[i].value = 0;
//        x[i].checked = false;

//    }*/

//    document.getElementById("myForm1").reset();
//    document.getElementById("myForm2").reset();

//    document.getElementById("divInConstant").style.visibility = "hidden";
//    document.getElementById("divInConstant").style.opacity = "0";
//}





////calculating functions
//function calcMen() {

//    document.getElementById("result").innerHTML = "";
//    age = document.getElementById("age").valueAsNumber;
//    ageMet = document.getElementById("ageMet").valueAsNumber;
//    feet = document.getElementById("feet").valueAsNumber;
//    inches = document.getElementById("inches");
//    pounds = document.getElementById("pounds").valueAsNumber;
//    ht = document.getElementById("ht").valueAsNumber;
//    wt = document.getElementById("wt").valueAsNumber;


//    if (isItMetric == false) {
//        cm = 2.54 * (feet * 12 + inches.value * 1);
//        kg = 0.453592 * pounds;
//    }
//    else {
//        cm = ht;
//        kg = wt;
//        age = ageMet;
//    }
//    result = (10 * kg) + (6.25 * cm) - (5 * age) + 5;



//    if (result <= 0 || isNaN(result) == true)
//    { window.alert("Please Enter Valid Values") }
//    else {
//        document.getElementById("result").innerHTML = "Your BMR is: "+ result.toFixed(0);
//        activityLevel();
//        document.getElementById("divInConstant").style.visibility = "visible";
//        document.getElementById("divInConstant").style.opacity = "1.0";
//    }
//}





//function calcWomen() {

//    document.getElementById("result").innerHTML = "";
//    age = document.getElementById("age").valueAsNumber;
//    ageMet = document.getElementById("ageMet").valueAsNumber;
//    feet = document.getElementById("feet").valueAsNumber;
//    inches = document.getElementById("inches");
//    pounds = document.getElementById("pounds").valueAsNumber;
//    ht = document.getElementById("ht").valueAsNumber;
//    wt = document.getElementById("wt").valueAsNumber;


//    if (isItMetric == false) {
//        cm = 2.54 * (feet * 12 + inches.value * 1);

//        kg = 0.453592 * pounds;
//    }
//    else {
//        cm = ht;
//        kg = wt;
//        age = ageMet;
//    }
//    result = (10 * kg) + (6.25 * cm) - (5 * age) - 161;


//    if (result <= 0 || isNaN(result) == true)
//    { window.alert("Please Enter Valid Values") }
//    else {

//        document.getElementById("result").innerHTML = "Your BMR is: "+ result.toFixed(0);
//        activityLevel();
//        document.getElementById("divInConstant").style.visibility = "visible";
//        document.getElementById("divInConstant").style.opacity = "1.0";
//    }

//}



