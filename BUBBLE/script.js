const createBubble = () =>{
    const bubble =document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random () + 20 + 30 + 'px';
    bubble.style.width=size;
    bubble.style.height=size;
    bubble.style.left=Math.random() * 100 + 'vw';

    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.body.appendChild(bubble);
    setTimeout(() =>{
        bubble.remove();

    }, 6000);

};
setInterval(createBubble, 150);