export function diashow(){
    let dia = document.getElementById("add");
    dia.show();
}

export function dianoshow(){
    let dia = document.getElementById("add");
    dia.close();
}

export function addtolist(){
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    let list = document.getElementsById("list");
    let post = document.createElement('li');
    post.appendChild(document.createTextNode(title));
    list.appendChild(post);
    
}