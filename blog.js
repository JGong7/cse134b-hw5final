let but = document.getElementById('but');
but.addEventListener("click", diashow);
let cancel = document.getElementById('prompt-no');
cancel.addEventListener("click", dianoshow);
let ok = document.getElementById('prompt-yes');
ok.addEventListener("click", addtolist);
function diashow(){
    let dia = document.getElementById("add");
    dia.show();
}

function dianoshow(){
    let dia = document.getElementById("add");
    dia.close();
}

function deleteitem(del){
    let item = del.parentElement;
    let list = del.parentElement.parentElement;
    list.removeChild(item);
}


function addtolist(){
    let dia = document.getElementById("add");
    dia.close();
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    let list = document.getElementById("list");
    let post = document.createElement('li');
    post.innerHTML = title + " (" + date + ") " + "Summary: " + summary + "  <b id='edit' onClick='deleteitem(this)'>Edit<b>  <b id='edit'>Delete<b>";
    list.appendChild(post);
}

