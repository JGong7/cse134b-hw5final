document.onload = display();
function initialize(){
    let dia = document.getElementById("ini");
    dia.showModal();
}
function inicancel(){
    let dia = document.getElementById("ini");
    dia.close();
}
function addValidate(){
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let summary = document.getElementById('summary').value;
    if (title == ""){
        alert("Please enter a title");
        return false;
    }
    if (date == ""){
        alert("Please enter a date");
        return false;
    }
    if (summary == ""){
        alert("Please enter a summary");
        return false;
    }
    return true;
}
function editOn(index){
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blog = blogs[index];
    let title = document.getElementById('newtitle');
    let date = document.getElementById('newdate');
    let summary = document.getElementById('newsummary');
    title.value = blog.title;
    date.value = blog.date;
    summary.value = blog.summary;
    let dia = document.getElementById('update');
    dia.showModal();
    let no = document.getElementById("new-no");
    no.addEventListener("click", editOff);
    let yes = document.querySelector("dialog #new-yes");
    yes.onclick = ()=>editblog(index);
}
function editOff(){
    let dia = document.getElementById('update');
    dia.close();
}
function editValidate(){
    let title = document.getElementById('newtitle').value;
    let date = document.getElementById('newdate').value;
    let summary = document.getElementById('newsummary').value;
    if (title == ""){
        alert("Please enter a title");
        return false;
    }
    if (date == ""){
        alert("Please enter a date");
        return false;
    }
    if (summary == ""){
        alert("Please enter a summary");
        return false;
    }
    return true;
}
function addClear(){
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("summary").value = "";
}
function editClear(){
    document.getElementById("newtitle").value = "";
    document.getElementById("newdate").value = "";
    document.getElementById("newsummary").value = "";
}
function display(){
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let html = "";
    for (let i = 0; i < blogs.length; i++){
        let blog = blogs[i];
        html += `<tr>
        <td>${blog.title}</td>
        <td>${blog.date}</td>
        <td>${blog.summary}</td>
        <td><button id="${i}" onClick="deleteblog(${i})">Delete</button><button id="${i}" onClick="editOn(${i})">Edit</button></td>
    </tr>`
    }
    document.querySelector("table tbody").innerHTML = html;
}

function createblog(){
    if (addValidate()){
        let dia = document.getElementById("ini");
        dia.close();
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let summary = document.getElementById('summary').value;
        blogs.push({title : title, date : date, summary: summary});
        localStorage.setItem("blogs", JSON.stringify(blogs));
        display();
        addClear();
    }
}

function deleteblog(index){
    if (confirm("Do you confirm that you want to delete this?")){
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        display();
    }
}

function editblog(index){
    if (editValidate()){
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        let title = document.getElementById('newtitle').value;
        let date = document.getElementById('newdate').value;
        let summary = document.getElementById('newsummary').value;
        blogs[index].title = title;
        blogs[index].date = date;
        blogs[index].summary = summary;
        localStorage.setItem("blogs", JSON.stringify(blogs));
        display();
        editClear();
        let dia = document.getElementById('update');
        dia.close();
    }   
}