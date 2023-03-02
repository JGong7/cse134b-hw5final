export function alertshow(){
    let dia = document.getElementById("alert-dialog");
    dia.showModal();
}

export function alertclose(){
    let dia = document.getElementById("alert-dialog");
    dia.close();
}

export function confirmshow(){
    let dia = document.getElementById("confirm-dialog");
    dia.showModal();
}

export function confirmcloseyes(){
    let dia = document.getElementById("confirm-dialog");
    dia.close();
    let out = document.getElementById("out");
    out.innerText=`The value returned by the confirm method is: true.`;
}

export function confirmcloseno(){
    let dia = document.getElementById("confirm-dialog");
    dia.close();
    let out = document.getElementById("out");
    out.innerText=`The value returned by the confirm method is: false.`;
}

export function promptshow(){
    let dia = document.getElementById("prompt-dialog");
    dia.showModal();
}

export function promptcancel(){
    let dia = document.getElementById("prompt-dialog");
    dia.close();
    let out = document.getElementById("out");
    out.innerText=`User didn't enter anything`;
}

export function promptinput(){
    let dia = document.getElementById("prompt-dialog");
    dia.close();
    let out = document.getElementById("out");
    let text = DOMPurify.sanitize(document.getElementById("name").value);
    if (text == ""){
        out.innerText=`User didn't enter anything`;
    }else{
        out.innerHTML=`Prompt Result: ${text}`;
    }
}