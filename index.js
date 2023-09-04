document.addEventListener("DOMContentLoaded",()=>{
    let icon = document.getElementById("icon");
    icon.addEventListener("click",(event)=>{
        event.preventDefault(); 
       let nav = document.getElementById("top-nav")
       if (nav.className === 'navbar') {
        nav.className += 'responsive'
       }else{
        nav.className = 'navbar'
       }
    })
})