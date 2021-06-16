const d = document;
export default function PrevInfo(ctnInfoImg,titlePrev,pTitlePrev,btnHome){
    const $img = d.querySelector(`${ctnInfoImg} img`),
        $h2 = d.querySelector(titlePrev),
        $p = d.querySelector(pTitlePrev),
        $btn = d.getElementById(btnHome);
        d.addEventListener("click" , e =>{
            if(e.target.matches("#btn-prev")){
                $img.src = "public/assets/img/adoptado.png"
                $h2.innerText = "Crea una nueva historia";
                $p.innerHTML = "Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar."
                $btn.classList.add("btn-prev-home")    
                console.log("principal")
                $btn.remove()
            }
            if(e.target.matches(".btn-prev-home")){
                setTimeout(function(){
                location.assign("home.html")                    
                    }, 2000);

            }
        })
}