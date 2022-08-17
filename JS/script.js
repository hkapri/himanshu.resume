const down =document.getElementById('arrow_down');
const up   =document.getElementById('arrow_up');

window.onscroll=function(){
    drophide();
};

function drophide()
{
if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
{
    down.style.display='none';
}
else
{
    down.style.display="block";
}
}

up.addEventListener('click', ()=>{
    document.styleSheets = 0;
    document.documentElement.scrollTop=0;
})