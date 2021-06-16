const d = document;
export default function btnDirecciones(){
    d.addEventListener("click" , e =>{
        if(e.target.matches("#atrasM *")){
            location.assign("chat.html")
        }
        if(e.target.matches("#atrasD *")){
            location.assign("home.html")
        }
        if(e.target.matches("#conectar *")){
            location.assign("chat.html")
        }
    })
}