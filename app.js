const $=(selector)=>document.querySelector(selector);
const baseURL='https://rickandmortyapi.com/api';
const btn=$('#consumir')
const contenedor=$('.container');

btn.addEventListener('click',async()=>{
    const resp=await fetch(`${baseURL}/character`)
    const {results}=await resp.json();
    console.log(results);
    let html='';
    results.forEach(personaje => {
        html+=`
        <div class="item">   
            <img src="${personaje.image}" alt="">
            <span>${personaje.name}</span>
            <span>${personaje.status}</span>
            <span>${personaje.species}</span>
        </div> 
        `
    });
    contenedor.innerHTML=html;
})