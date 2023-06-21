// alert(
//     "Hi!  My Portfolio is under working. I am sending you this on urgent bases. Click on 'OK' and do check my projects. Thankyou "
// )

// const body1 = document.querySelector("body")
// const toggle = document.getElementById("icon")

// toggle.addEventListener('click' , ()=>{
//     this.classlist.toggle("dark")
    
// })
 var body1 = document.getElementsByTagName('body')[0]
 var darkMood = document.getElementById('dark-mood')


 darkMood.addEventListener('click' , ()=>{
    darkMood.classList.toggle( 'active')
    body1.classList.toggle('night')

 } )

 var typed = new Typed(".auto-type" , {
   strings :[ "Eat." , "Sleep." , "Code." ,"Repeat."],
   typeSpeed : 150,
   backSpeed:150,
   loop:true
 }) 