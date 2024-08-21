const button = document.querySelectorAll('.box');
const body = document.querySelector("body");

button.forEach(function(box){
    box.addEventListener('click', function(color){
        
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#75A47F';
        }
        else if(color.target.id === 'box2'){
            body.style.backgroundColor = '#ACE1AF';
        }
        else if(color.target.id === 'box3'){
            body.style.backgroundColor = '#B0EBB4';
        }
        else if(color.target.id === 'box4'){
            body.style.backgroundColor = '#BFF6C3';
        }
        else if(color.target.id === 'box5'){
            body.style.backgroundColor = '#E0FBE2';
        }
    })
})