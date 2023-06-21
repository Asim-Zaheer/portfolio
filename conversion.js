let input=document.getElementById("input")
let result=document.getElementById("result")
let inputType=document.getElementById("input-type")
let resultType=document.getElementById("result-type")
let inputTypevalue, resultTypevalue

input.addEventListener("keyup" , myResult);
inputType.addEventListener("change",myResult)
resultType.addEventListener("change" , myResult)

inputTypevalue = inputType.value;
resultTypevalue = resultType.value;




function myResult (){
inputTypevalue = inputType.value
resultTypevalue = resultType.value

// metre to 
if (inputTypevalue === "metre" && resultTypevalue ==="kilometer"){
  result.value = Number(input.value)*0.001
}
else if(inputTypevalue === "metre" && resultTypevalue ==="inches" ){
 result.value = Number(input.value)*39.3701
}
else if (inputTypevalue === "metre" && resultTypevalue ==="feet"){
    result.value = Number(input.value)*3.28084

}
else if (inputTypevalue === "metre" && resultTypevalue ==="centimeters"){
    result.value = Number(input.value)*100
}
else if (inputTypevalue === "metre" && resultTypevalue ==="milimetre"){
    result.value = Number(input.value)*1000
}
else if (inputTypevalue === "metre" && resultTypevalue ==="metre"){
    result.value = Number(input.value)
}

// Kilometer to 
if (inputTypevalue === "kilometer" && resultTypevalue ==="metre"){
    result.value = Number(input.value)*1000
  }
  else if(inputTypevalue === "kilometer" && resultTypevalue ==="inches" ){
    result.value = Number(input.value)*39370.1
   }
   else if(inputTypevalue === "kilometer" && resultTypevalue ==="feet" ){
    result.value = Number(input.value)*3280.84
   }
   else if(inputTypevalue === "kilometer" && resultTypevalue ==="centimeters" ){
    result.value = Number(input.value)*100000
   }
   else if(inputTypevalue === "kilometer" && resultTypevalue ==="milimetre" ){
    result.value = Number(input.value)*1000000
   }
   else if(inputTypevalue === "kilometer" && resultTypevalue ==="kilometer" ){
    result.value = Number(input.value)
   }

//    feet to 
if (inputTypevalue === "feet" && resultTypevalue ==="metre"){
    result.value = Number(input.value)/3.281
  }
  else if(inputTypevalue === "feet" && resultTypevalue ==="inches" ){
    result.value = Number(input.value)*12
   }
   else if(inputTypevalue === "feet" && resultTypevalue ==="kilometer" ){
    result.value = Number(input.value)/3281
   }
   else if(inputTypevalue === "feet" && resultTypevalue ==="centimeters" ){
    result.value = Number(input.value)*30.48
   }
   else if(inputTypevalue === "feet" && resultTypevalue ==="milimetre" ){
    result.value = Number(input.value)*304.8
   }
   else if(inputTypevalue === "feet" && resultTypevalue ==="feet" ){
    result.value = Number(input.value)
   }
   

// inches to 
if (inputTypevalue === "inches" && resultTypevalue ==="metre"){
    result.value = Number(input.value)/39.37
  }
  else if(inputTypevalue === "inches" && resultTypevalue ==="feet" ){
    result.value = Number(input.value)/12
   }
   else if(inputTypevalue === "inches" && resultTypevalue ==="kilometer" ){
    result.value = Number(input.value)/39370
   }
   else if(inputTypevalue === "inches" && resultTypevalue ==="centimeters" ){
    result.value = Number(input.value)* 2.54
   }
   else if(inputTypevalue === "inches" && resultTypevalue ==="milimetre" ){
    result.value = Number(input.value)*25.4
   }
   else if(inputTypevalue === "inches" && resultTypevalue ==="inches" ){
    result.value = Number(input.value)
   }
   
// centimeter to 
if (inputTypevalue === "centimeters" && resultTypevalue ==="metre"){
    result.value = Number(input.value)/100
  }
  else if(inputTypevalue === "centimeters" && resultTypevalue ==="feet" ){
    result.value = Number(input.value)/30.48
   }
   else if(inputTypevalue === "centimeters" && resultTypevalue ==="kilometer" ){
    result.value = Number(input.value)/100000
   }
   else if(inputTypevalue === "centimeters" && resultTypevalue ==="inches" ){
    result.value = Number(input.value)/2.54
   }
   else if(inputTypevalue === "centimeters" && resultTypevalue ==="milimetre" ){
    result.value = Number(input.value)*10
   }
   else if(inputTypevalue === "centimeters" && resultTypevalue ==="centimeters" ){
    result.value = Number(input.value)
   }
   

//    milimeeter to 
if (inputTypevalue === "milimetre" && resultTypevalue ==="metre"){
    result.value = Number(input.value)/1000
  }
  else if(inputTypevalue === "milimetre" && resultTypevalue ==="feet" ){
    result.value = Number(input.value)/304.8
   }
   else if(inputTypevalue === "milimetre" && resultTypevalue ==="kilometer" ){
    result.value = Number(input.value)/100000
   }
   else if(inputTypevalue === "milimetre" && resultTypevalue ==="inches" ){
    result.value = Number(input.value)/1e+6
   }
   else if(inputTypevalue === "milimetre" && resultTypevalue ==="centimeters" ){
    result.value = Number(input.value)/10
   }
   else if(inputTypevalue === "milimetre" && resultTypevalue ==="milimetre" ){
    result.value = Number(input.value)
   }
   
   

}


var body1 = document.getElementsByTagName('body')[0]
 var darkMood = document.getElementById('dark-mood')


 darkMood.addEventListener('click' , ()=>{
    darkMood.classList.toggle( 'active')
    body1.classList.toggle('night')

 } )
