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
function post(){
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
function get(){
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
function put(){
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
function del(){
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