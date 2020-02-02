let button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    let container = document.querySelector('.container');
    container.innerHTML=" ";
    for(let i =0; i<20;i++){
        let newBlock = document.createElement('div');
            newBlock.classList.add('block');
            
        let newP =  document.createElement('p'),
            newSpan =  document.createElement('span');
            newSpan.classList.add('span');
            newBlock.appendChild(newP);
            newBlock.appendChild(newSpan);
            container.appendChild(newBlock);
    }

    let block = document.querySelectorAll('.block');
    block.forEach((elem)=>{

        let n1,n2,n3;
        n1 = Math.floor(Math.random()*254 + 1);
        n2 = Math.floor(Math.random()*254 + 1);
        n3 = Math.floor(Math.random()*254 + 1);
        let color = `rgb(${n1},${n2},${n3})`;
        elem.style.backgroundColor = color;

        n1 = n1.toString(16);
        n2 = n2.toString(16);
        n3 = n3.toString(16);
        color = '#'+n1+n2+n3;
        console.log(color);
        let p = elem.getElementsByTagName('p')[0].innerHTML = color;
        elem.getElementsByTagName('p')[0].style.backgroundColor = 'rgb(0,0,0,0.4)'
    })



    let p = document.querySelectorAll('p'),
        span = document.querySelectorAll('span');

    p.forEach((elem,i)=>{
        span.forEach((e)=>{e.innerText = "Скопировать";})
        elem.addEventListener('click',()=>{
            console.log(elem.innerText);
            span.forEach((e)=>{e.innerText = "Скопировать";})
            let copytext = document.createElement('input');
            copytext.value = elem.innerText;
            document.body.appendChild(copytext);
            copytext.select();
            document.execCommand('copy');
            document.body.removeChild(copytext);
            span[i].innerText = "Скопировано!";
        })
    })




})






