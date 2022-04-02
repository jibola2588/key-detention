const pressed = [];
const secretCode = 'webos'

window.addEventListener('keyup',function(e){
    console.log(e.key)
    pressed.push(e.key)
   pressed.splice(-secretCode.length-1,pressed.length - secretCode.length)
    console.log(pressed)
    if(pressed.join('').includes(secretCode)){
        console.log('you are there')
        cornify_add();
    }
})