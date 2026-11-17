let primo_button=document.getElementById('primo_button');
let secondo_button=document.getElementById('secondo_button');
let terzo_button=document.getElementById('terzo_button');
let paragrafi=document.querySelectorAll('p');

primo_button.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo => {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        paragrafo.style.color=`rgb(${r},${g},${b})`
    });
})

secondo_button.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo => {
        paragrafo.style.fontWeight=`bold`;
    })
})

terzo_button.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo => {
        if(paragrafo.style.display==`block`){
            paragrafo.style.display=`none`;
        }else{
            paragrafo.style.display=`block`;
        }
    })
})