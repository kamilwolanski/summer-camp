const bar = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const navList= document.querySelector('.nav-list');


bar.addEventListener('click', function(){
    navList.classList.add('active');
})

close.addEventListener('click',function(){
    navList.classList.remove('active')
})