const width = document.getElementById("width")
const height = document.getElementById("height")

window.addEventListener('resize',()=>{
    const windowWidth= window.innerWidth;
    const windowHeight=window.innerHeight;
    
    width.value=windowWidth;
    height.value=windowHeight;

})