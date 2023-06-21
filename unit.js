var body1 = document.getElementsByTagName('body')[0]
 var darkMood = document.getElementById('dark-mood')


 darkMood.addEventListener('click' , ()=>{
    darkMood.classList.toggle( 'active')
    body1.classList.toggle('night')

 } )