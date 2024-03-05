
function getotp(){
    const form= document.getElementById("form");
    const input=document.querySelector("#input");
    const forgateotp=document.getElementById("forgateotp");
    if(input.value==""){
        alert("Please enter your email or phone");
        
    }else{
        form.innerHTML=`<input type="text" placeholder="Enter otp"  name="otp">
        <button  type="submit" >submit</button>
        `
        document.getElementById("input").disabled = true;
        document.getElementById("forgateotp").disabled = true;
        forgateotp.style.cursor= "not-allowed";


   }

}