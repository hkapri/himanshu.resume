const down = document.getElementById('arrow_down');
const up   = document.getElementById('arrow_up');
const bubble   = document.getElementById('bubble_view');
const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t1_title = document.getElementById('t1_title');
const t2_title = document.getElementById('t2_title');
const t3_title = document.getElementById('t3_title');
const t4_title = document.getElementById('t4_title');
const t5_title = document.getElementById('t5_title');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const sc1 = document.getElementById('sc1');
const sc2 = document.getElementById('sc2');
const sc3 = document.getElementById('sc3');
const sc4 = document.getElementById('sc4');
const sc5 = document.getElementById('sc5');
const sc6 = document.getElementById('sc6');
const sc7 = document.getElementById('sc7');
const sc8 = document.getElementById('sc8');
const click = document.getElementById('Click-here');
const custom_model = document.getElementById('custom-model-main');
const close = document.getElementById('close-btn');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

window.onscroll=function(){
    scroll_func();
};

async function scroll_func()
{
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
    {
        down.style.display='none';
        bubble.style.display='none';
    }
    else
    {
        down.style.display="block";
        bubble.style.display="block";
    }
    if ((document.body.scrollTop > 200 && document.body.scrollTop < 500) || (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 500))
    {
        t0.classList.add('hide');
        t1.classList.add('move_left');
        t1.classList.add('active');
        await sleep(2000);
        t0.style.display='none';
    }
    else {
        t1.classList.remove('active');
    }
    if ((document.body.scrollTop > 500 && document.body.scrollTop < 700) || (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 700))
    {
        t1.classList.remove('active');
        t2.classList.add('active');
        t1.classList.remove('move-left');
        t1.classList.add('move_right');
        t2.classList.add('move_left');
        sc1.style.visibility='visible';
        s1.classList.add('rotate');
    }
    else {
        t2.classList.remove('active');
    }
    if ((document.body.scrollTop > 700 && document.body.scrollTop < 1000) || (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1000))
    {
        t2.classList.remove('active');
        t3.classList.add('active');
        t2.classList.remove('move-left');
        t2.classList.add('move_right');
        t3.classList.add('move_left');
    }
    else {
        t3.classList.remove('active');
    }
    if ((document.body.scrollTop > 1000 && document.body.scrollTop < 1300) || (document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1300))
    {
        t3.classList.remove('active');
        t4.classList.add('active');
        t3.classList.remove('move-left');
        t3.classList.add('move_right');
        t4.classList.add('move_left');
        sc2.style.visibility='visible';
        s2.classList.add('rotate');
    }
    else {
        t4.classList.remove('active');
    }
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300)
    {
        t4.classList.remove('active');
        t5.classList.add('active');
        t4.classList.remove('move-left');
        t4.classList.add('move_right');
        t5.classList.add('move_left');
    }
    else {
        t5.classList.remove('active');
    }
}

up.addEventListener('click', ()=>{
    document.styleSheets = 0;
    document.documentElement.scrollTop=0;
})


click.addEventListener('click', ()=>{
    custom_model.classList.add('model-open');
})

close.addEventListener('click', ()=>{
    custom_model.classList.remove('model-open');
})

custom_model.addEventListener('click', ()=>{
    custom_model.classList.remove('model-open');
})

  
