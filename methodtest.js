let field = document.getElementById("date");
field.value = new Date();

function clear(){
    document.getElementById("id").value = '';
    document.getElementById("article_name").value = '';
    document.getElementById("article_body").value = '';
    document.getElementById("date").value = '';
    let field = document.getElementById("date");
    field.value = new Date();
}
function postCheck(){
    let xml = document.getElementById('xml');
    let fetch = document.getElementById('fetch');
    if (xml.checked){
        XMLpost();
    }else if(fetch.checked){
        fetchpost();
    }
}
function XMLpost(){
    let request = new XMLHttpRequest();
    request.open("POST", "https://httpbin.org/post");
    let iid = document.getElementById("id").value;
    let name = document.getElementById("article_name").value;
    let body = document.getElementById("article_body").value;
    let writtendate = document.getElementById("date").value;
    let toSend = {
        id : iid,
        article_name : name,
        article_body : body,
        date : writtendate
    };
    request.responseType = "json";
    request.send(JSON.stringify(toSend));
    request.addEventListener("load", function(){
        clear();
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(request.response, null, 2);
    })
}
function fetchpost(){
    let request = new FormData();
    let iid = document.getElementById("id").value;
    let name = document.getElementById("article_name").value;
    let body = document.getElementById("article_body").value;
    let writtendate = document.getElementById("date").value;
    request.set("id", iid);
    request.set("article_name", name);
    request.set("article_body", body);
    request.set("date", writtendate);

    fetch("https://httpbin.org/post", {method: "POST", body: request})
    .then(response => response.json())
    .then(data =>{
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(data, null, 2);
        clear();
    })
}
function getCheck(){
    let xml = document.getElementById('xml');
    let fetch = document.getElementById('fetch');
    if (xml.checked){
        XMLget();
    }else if(fetch.checked){
        fetchget();
    }
}
function XMLget(){
    let request = new XMLHttpRequest();
    let iid = document.getElementById("id").value;
    let url;
    if (iid == ''){
        url = `https://httpbin.org/get`;
    }else{
        url = `https://httpbin.org/get?id=${iid}`;
    }
    request.open("GET", url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", function(){
        clear();
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(request.response, null, 2);
    })
}
function fetchget(){
    let iid = document.getElementById("id").value;
    let url = `https://httpbin.org/get?id=${iid}`;

    fetch(url, {method: "GET"})
    .then(response => response.json())
    .then(data =>{
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(data, null, 2);
        clear();
    })
}
function putCheck(){
    let xml = document.getElementById('xml');
    let fetch = document.getElementById('fetch');
    if (xml.checked){
        XMLput();
    }else if(fetch.checked){
        fetchput();
    }
}
function XMLput(){
    let request = new XMLHttpRequest();
    request.open("PUT", "https://httpbin.org/put");
    let iid = document.getElementById("id").value;
    let name = document.getElementById("article_name").value;
    let body = document.getElementById("article_body").value;
    let writtendate = document.getElementById("date").value;
    let toSend = {
        id : iid,
        article_name : name,
        article_body : body,
        date : writtendate
    };
    request.responseType = "json";
    request.send(JSON.stringify(toSend));
    request.addEventListener("load", function(){
        clear();
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(request.response, null, 2);
    })
}
function fetchput(){
    let request = new FormData();
    let iid = document.getElementById("id").value;
    let name = document.getElementById("article_name").value;
    let body = document.getElementById("article_body").value;
    let writtendate = document.getElementById("date").value;
    request.set("id", iid);
    request.set("article_name", name);
    request.set("article_body", body);
    request.set("date", writtendate);

    fetch("https://httpbin.org/put", {method: "PUT", body: request})
    .then(response => response.json())
    .then(data =>{
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(data, null, 2);
        clear();
    })
}
function delCheck(){
    let xml = document.getElementById('xml');
    let fetch = document.getElementById('fetch');
    if (xml.checked){
        XMLdel();
    }else if(fetch.checked){
        fetchdel();
    }
}
function XMLdel(){
    let request = new XMLHttpRequest();
    let iid = document.getElementById("id").value;
    let url;
    if (iid == ''){
        url = `https://httpbin.org/delete`;
    }else{
        url = `https://httpbin.org/delete?id=${iid}`;
    }
    request.open("DELETE", url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", function(){
        clear();
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(request.response, null, 2);
    })
}

function fetchdel(){
    let iid = document.getElementById("id").value;
    let url = `https://httpbin.org/delete?id=${iid}`;

    fetch(url, {method: "DELETE"})
    .then(response => response.json())
    .then(data =>{
        let res = document.getElementById("response");
        res.innerText = JSON.stringify(data, null, 2);
        clear();
    })
}