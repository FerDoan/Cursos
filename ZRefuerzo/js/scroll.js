const d = document;

export default function scroll(elemento){
    const $btnScrollUp = d.querySelector(elemento);

    

    d.addEventListener("scroll", (e)=>{
        if(window.scrollY >= 370){
            $btnScrollUp.style.display = "inline-block";
        }else{
            $btnScrollUp.style.display = "none";
        }
    })

    d.addEventListener("click",(e)=>{
        if(e.target.matches(elemento)){
            window.scrollTo(0,0);
        }
    });
}