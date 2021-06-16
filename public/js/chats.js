const d = document;
export default function Chats(){
    d.addEventListener("click" , e =>{
        if(e.target.matches(".ctn-chat *")){
            location.assign("mensaje.html")
        }
    })
}