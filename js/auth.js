import {hex_sha256} from "../sha256-min.mjs"


    const batata= document.getElementById("login-form")
    batata.addEventListener("submit",(event)=>{
        event.preventDefault()
        const pass= document.getElementById("senha").value
        if(pass=="senha"){
            window.location.href= "detalhes.html"
        }else{
            alert("senha INCORRETA")
        }
    })
