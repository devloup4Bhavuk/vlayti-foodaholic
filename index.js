function alertmsg(){
    alert("Thankyou!! You will recieve your order.");
}
function sp1(){
    var x  = document.getElementById("name1").value;
    var y = /^[a-zA-Z\s]{2,15}$/;
    var z = y.test(x);
    if(z){
        document.getElementById("sp1").style.color="green";
        document.getElementById("sp1").innerHTML="Valid";
    }
    else{
        document.getElementById("sp1").style.color="Red";
        document.getElementById("sp1").innerHTML="Sorry Try a Different Name!!";
    }
}
function sp2(){
    var x  = document.getElementById("phone").value;
    var y = /^[0-9]{5}-[0-9]{5}$/;
    var z = y.test(x);
    if(z){
        document.getElementById("sp2").style.color="green";
        document.getElementById("sp2").innerHTML="Valid";
    }
    else{
        document.getElementById("sp2").style.color="Red";
        document.getElementById("sp2").innerHTML="Sorry Try a Different Name!!";
    }
}
