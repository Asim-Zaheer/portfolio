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

// C to 
if (inputTypevalue === "Celsius" && resultTypevalue ==="Fahrenheit"){
  result.value = Number((input.value * 9/5) + 32)

}
else if(inputTypevalue === "Celsius" && resultTypevalue ==="kelvin" ){
 result.value = Number(input.value + 273.15)
}
else if(inputTypevalue === "Celsius" && resultTypevalue ==="Celsius" ){
    result.value = Number(input.value)
   }


// F to 
if (inputTypevalue === "Fahrenheit" && resultTypevalue ==="Fahrenheit"){
    result.value = Number(input.value )
  
  }
  else if(inputTypevalue === "Fahrenheit" && resultTypevalue ==="kelvin" ){
   result.value = Number((input.value - 32) * 5/9 + 273.15)
  }
  else if(inputTypevalue === "Fahrenheit" && resultTypevalue ==="Celsius" ){
      result.value = Number((input.value - 32) * 5/9)
     }

//    K to
if (inputTypevalue === "kelvin" && resultTypevalue ==="Fahrenheit"){
    result.value = Number((input.value - 273.15) * 9/5 + 32)
  
  }
  else if(inputTypevalue === "kelvin" && resultTypevalue ==="kelvin" ){
   result.value = Number(input.value)
  }
  else if(inputTypevalue === "kelvin" && resultTypevalue ==="Celsius" ){
      result.value = Number(input.value - 273.15)
     }
   

   

}



var body1 = document.getElementsByTagName('body')[0]
 var darkMood = document.getElementById('dark-mood')


 darkMood.addEventListener('click' , ()=>{
    darkMood.classList.toggle( 'active')
    body1.classList.toggle('night')

 } )

