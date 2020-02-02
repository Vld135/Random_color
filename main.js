let button = document.querySelector('.button');

let block = document.querySelectorAll('.block');


button.addEventListener('click', ()=>{

    block.forEach((elem)=>{

        let n1,n2,n3;
        n1 = Math.floor(Math.random()*254 + 1);
        n2 = Math.floor(Math.random()*254 + 1);
        n3 = Math.floor(Math.random()*254 + 1);
        
        n1 = n1.toString(16);
        n2 = n2.toString(16);
        n3 = n3.toString(16);
        let color = n1+n2+n3;
        console.log(color);
        elem.style.backgroundColor = '#'+color;
        elem.innerHTML = '#'+color;

    })
    
})

