//HMLHttpRequest method
var emailContainer = document.getElementById("email-info");
var btn1 =document.getElementById("btn1");
btn1.addEventListener("click",function(){
var request = new XMLHttpRequest();
request.open('Get',"https://jsonplaceholder.typicode.com/users" , true);
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        var email=JSON.parse(request.responseText);
        render(email)
    }
};
request.send(null);
});

//rendering and sorting data
function render(data){
    var string =  new Array();

    for (var i=0; i<data.length; i++){
        string.push("<br>" + data[i].email)
    }
    string.sort();
    emailContainer.insertAdjacentHTML("beforeend",string);
}

//fetch
var nameContainer = document.getElementById("usernames");
var btn2 =document.getElementById("btn2");
btn2.addEventListener("click",function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        let output = [];
        data.forEach(function(user){
            output.push("<br>"+ user.username)
            output.sort(function(a,b){
                return a.length - b.length;
        });
        document.getElementById('usernames').innerHTML=output;
        });
    });
});