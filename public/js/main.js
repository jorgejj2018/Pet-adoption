import btnDirecciones from "./btn_direcciones.js";
import Chats from "./chats.js";
import PrevInfo from "./siguiente.js";

const d = document;

d.addEventListener("DOMContentLoaded",e =>{
    PrevInfo(".ctn-info-prev",".title-prev",".p-title-prev","btn-prev")
    Chats()
    btnDirecciones()
})