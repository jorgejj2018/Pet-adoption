const d = document,
$main =  d.querySelector("main")        

export default function Categoria(){
    const $gato = d.getElementById('c-gato'),
    $perro = d.getElementById('c-perro');
    let cards = "";
    const animales  = [
        perro = {
        p1: './public/assets/img/animales/bulldog.jpeg',
        p2: './public/assets/img/animales/golden.jpeg',
        p3: './public/assets/img/animales/labrador.jpeg',
        p4: './public/assets/img/animales/shibalnu.jpeg',
        p5: './public/assets/img/animales/hukysiberiano.jpeg',
    },
    gato ={
        g1: './public/assets/img/animales/Gangora.jpeg',
        g2: './public/assets/img/animales/Gpersa.jpeg',
        g3: './public/assets/img/animales/Gburmes.jpeg',
        g4: './public/assets/img/animales/GmauEgipcio.jpeg',
        g5: './public/assets/img/animales/Gsiames.jpeg',
    }];
    d.addEventListener("click" , e=>{
        if(e.target.matches('#c-gato *')){
            $gato.classList.remove("ct-inactiva")
            $perro.classList.add("ct-inactiva")
        }
        if(e.target.matches('#c-perro *')){
            $perro.classList.remove("ct-inactiva")
            $gato.classList.add("ct-inactiva")
            animales.forEach(el => {
                cards += `
                <section class="ctn-tarjeta-animal">
                <div class="ctn-img-animal">
                <img src="${el.perro}" alt="">
                </div>
            <div class="ctn-info-animal">
                <h1>Tomas</h1>
                <h2>Golden</h1>
                </div> 
                </section>
                `
                ;
        });
            $main.innerHTML=cards
        }
    })
}

