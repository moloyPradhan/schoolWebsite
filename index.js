burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
leftNav=document.querySelector('.leftNav');
rightNav=document.querySelector('.rightNav');

btnTog=document.querySelector('.btnTog');
paraTog=document.querySelector('.paraTog');

lineUp=document.getElementById('up');
lineDown=document.getElementById('down');

burger.addEventListener('click', ()=>{

    rightNav.classList.toggle('v-nav');
    leftNav.classList.toggle('v-nav');
    navbar.classList.toggle('nav-h');
  
});

btnTog.addEventListener('click', ()=>{
    paraTog.classList.toggle('paraTog');
    if(btnTog.innerHTML=='See More'){
        btnTog.innerHTML='See Less';
    }
    else{
        btnTog.innerHTML='See More';
    }   
});

var submit=document.getElementById('btnsub');
submit.addEventListener('click',()=>{
    alert("Yor response is taken!");
});








