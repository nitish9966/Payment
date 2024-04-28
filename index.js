const sub=document.getElementById("checkbtn");
const visa=document.getElementById("visabtn");
const master=document.getElementById("master");
const online=document.getElementById("online");
const submit=document.getElementById("btn");

const p1=document.getElementById("check");
const p2=document.getElementById("payment");

submit.onclick=function(){
    if(sub.checked){
        p1.textContent=`You are Subscribed`;
    }
    else{
        p1.textContent=`You are not Subscribed`;
    }
    if(visa.checked){
        p2.textContent=`and using Visa`;
    }
    else if(master.checked){
        p2.textContent=`and using Mastercard`;
    }
    else if(online.checked){
        p2.textContent=`and using Online Payment`;
    }
    else{
        p2.textContent=`and not choosen payment method`;
    }
}