function click(){
    const likes=document.getElementById("likes");
    // if(likes.style.color=="red"){
        
    //             likes.style.color="#c0c0c0";
        
    //         } else {
    //             likes.style.color="red";
    //         }
            likes.style.color = likes.style.color === "red" ? "#c0c0c0" : "red";
}

let a =document.getElementsByTagName('div')[0];
let div=document.createElement('div');
div.classList.add("full-post")
div.innerHTML=`
<div class="post-header container">

                <div class="profile-icon">
                    <!-- profileImg -->
                </div>
                <p class="username">sadasiba nayak</p>
                <div id="post-view-delete">
                    <p><i class="fa-regular fa-address-card" style="color: #013a63;"></i>View Profile
                        <br/>
                        <p class="red"><i class="fa-regular fa-trash-can" style="color: #013a63;"></i>Delete Post</p>
                    </p>
                </div>
                <p class="dots">
                <i class="fa-solid fa-ellipsis-vertical"onclick="viewDelete(this)" ></i>
                </p>
                
            </div>
            <div class="post"> 
                <!-- img -->
            </div>

              <div class="post-fotter">
                <span class="likes"><i class="fa-solid fa-heart" id="likes" onclick="click(this)"></i></span>
                <span class="likes"><i class="fa-solid fa-comment"></i></span>

            </div>
<br>`
a.appendChild(div)
console.log(a);

let footer=document.createElement('div')
footer.classList.add('fixed-footer');
footer.innerHTML=`<i class="fa-solid fa-house footer-element"onclick="downup()"></i>
<i class="fa-solid fa-square-plus footer-element" onclick="updown(),removeAddsection()"></i>
<i class="fa-solid fa-circle-user footer-element" onclick="removeAddimage()"></i>`
div.appendChild(footer)


function viewDelete() {
    const dotsResult = document.getElementById("post-view-delete");
    dotsResult.style.display = dotsResult.style.display === "none" ? "block" : "none";
    console.log("sac")
  }

  function updown(){
    const addimg = document.querySelector(".addsection");
    addimg.style.display = addimg.style.display === "block" ? "none" : "block";
    

    }
    function downup(){
        const addimg = document.querySelector(".addsection");
        addimg.style.display="none";
        const addsectionuser=document.querySelector(".addsectionuser");
        addsectionuser.style.display="none";
        }

        // document.querySelector(".fa-square-plus").

        const profileImg=document.querySelector(".images img");
        const userfile=document.querySelector(".postimage");
        // const fileLabel=document.querySelector(".custom-file-label");
        userfile.addEventListener("change", (e)=>{
            profileImg.src=URL.createObjectURL(userfile.files[0]);                   //important
        })


        
        const circleuser=document.querySelector(".fa-circle-user");
        circleuser.addEventListener("click", (e)=>{
        const addsectionuser=document.querySelector(".addsectionuser");
        addsectionuser.style.display = addsectionuser.style.display === "flex" ? "none" : "flex";
        });

            function removeAddimage(){
                const addimg = document.querySelector(".addsection");
                 addimg.style.display="none";
            }

            function removeAddsection(){
                const addsectionuser=document.querySelector(".addsectionuser");
                 addsectionuser.style.display="none";
            }

            const userimg=document.querySelector(".userimage img");
            const userinput=document.querySelector(".postimg");
            // const fileLabel=document.querySelector(".custom-file-label");
            userinput.addEventListener("change", (e)=>{
                userimg.src=URL.createObjectURL(userinput.files[0]);                   //important
            })

            const bars=document.querySelector("fa-bars-staggered");
           function openMenu(){ 
                const setting=document.querySelector(".settings");
                if(setting.style.display=="none"){
                    setting.style.display="block";
                }
                else{
                    setting.style.display="none";
                }
            };
            
           
            
