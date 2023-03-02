let length = 0;
let but = document.getElementById('but');
but.addEventListener("click", diashow);
let cancel = document.getElementById('prompt-no');
cancel.addEventListener("click", dianoshow);
let newcancel = document.getElementById('new-no');
newcancel.addEventListener("click", updatenoshow);

function updatenoshow(){
    let dia = document.getElementById("update");
    dia.close();
}
function diashow(){
    let dia = document.getElementById("add");
    dia.showModal();
    let ok = document.getElementById('prompt-yes');
    ok.addEventListener("click", addtolist);
}

function dianoshow(){
    let dia = document.getElementById("add");
    dia.close();
}

function deleteitem(del){
    if (confirm("Do you confirm you want to delete?")){
        let item = del.parentElement;
        let list = del.parentElement.parentElement;
        list.removeChild(item);
    }
}

function edititem(length){
    let button = document.getElementById(length);
    let dia = document.getElementById("update");
    dia.showModal();
    let item = button.parentElement;
    let ititle = item.firstChild.innerText;
    let idate = item.firstChild.nextSibling.nextSibling.innerText;
    let isummary = item.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText;
    let title = document.getElementById("newtitle");
    let date = document.getElementById("newdate");
    let summary = document.getElementById("newsummary");
    title.value = ititle;
    date.value = idate;
    summary.value = isummary;
    let newyes = document.getElementById('new-yes');
    newyes.addEventListener("click", ()=>newinput(button, length));
}

function newinput(button, length){
    let title = document.getElementById("newtitle").value;
    let date = document.getElementById("newdate").value;
    let summary = document.getElementById("newsummary").value;
    button.parentElement.innerHTML = `<div>${title}</div> <div>${date}</div> Summary: <access-need>${summary}</access-need> <b id='edit${length}' onClick="edititem('edit${length}')">Edit</b> <b id='delete' onClick ='deleteitem(this)'>Delete</b>`;
    let dia = document.getElementById('update');
    dia.close();
}


function addtolist(){
    let dia = document.getElementById("add");
    dia.close();
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    let list = document.getElementById("list");
    let post = document.createElement('li');
    post.innerHTML = `<div>${title}</div> <div>${date}</div> Summary: <access-need>${summary}</access-need> <b id='edit${length}' onClick="edititem('edit${length}')">Edit</b> <b id='delete' onClick ='deleteitem(this)'>Delete</b>`;
    length ++;
    list.appendChild(post);
}

