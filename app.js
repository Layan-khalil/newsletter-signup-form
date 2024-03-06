const subbtn=document.getElementsByClassName("subscribe");
const dismissbtn=document.getElementsByClassName("dismiss");
const content=document.getElementsByTagName("main");
const successmsg=document.getElementsByClassName("desk-success");
const input=document.getElementById("v1");

subbtn.addEventListener("click",()=>{
    if(input.value=="")
    { 
      document.getElementsByClassName("error").innerHTML="Valid Email Required";
      input.classList.add("active");
     
    }else{
  content.classList.add("hide");
    successmsg.classList.remove("hide");
    }
});
dismissbtn.addEventListener("click",()=>{
    content.classList.remove("hide");
    successmsg.classList.add("hide");
    input.value="";
});