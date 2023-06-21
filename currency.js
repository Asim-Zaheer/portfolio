const select = document.querySelectorAll(".currency")
const input_currency = document.getElementById("input_currency")
const result_currency = document.getElementById("result_currency")
const btn =document.getElementById("btn")   


// const host = 'api.frankfurter.app';
fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    // display(data)
    // function display(){
      const entries =Object.entries(data)
     console.log(data)
       for(i = 0;  i<entries.length ; i++){
        select[0].innerHTML +=    ` <option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += `    <option value="${entries[i][0]}">${entries[i][0]}</option>`
       }
    // }
  });



  btn.addEventListener("click" , ()=>{
    let c1 = select[0].value;
    let c2 = select[1].value
    let input_currency_val = input_currency.value
  
  if(c1 != c2){
    convert (c1,c2,input_currency_val)

  }
  else{
    alert("choose different currency")
  }
  
  })

  function convert(c1 , c2 , input_currency_val){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input_currency_val}&from=${c1}&to=${c2}`)
  .then((val) => val.json())
  .then((val) => {
    result_currency.value = Object.values(val.rates)[0]
    console.log(Object.values(val.rates)[0])
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });

  }





  var body1 = document.getElementsByTagName('body')[0]
  var darkMood = document.getElementById('dark-mood')
 
 
  darkMood.addEventListener('click' , ()=>{
     darkMood.classList.toggle( 'active')
     body1.classList.toggle('night')
 
  } )
  