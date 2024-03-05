function click(){
    let likes=document.getElementById("likes");
    if(likes.style.color=="red"){
        
                likes.style.color="#c0c0c0";
        
            } else {
                likes.style.color="red";
            }
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
<i class="fa-solid fa-square-plus footer-element" onclick="updown()" ></i>
<i class="fa-solid fa-circle-user footer-element"onclick="downup()"></i>`
div.appendChild(footer)

// function viewDelete(){
//     let dotsresult=document.getElementById("post-view-delete");
//     if(this.dotsresult.style.display==="none"){
//         this.dotsresult.style.display="block";
//     }else{
//         this.dotsresult.style.display="none";
//     }
    
// }

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
    
        }

        const profileImg=document.querySelector(".images img");
        const userfile=document.querySelector(".postimage");
        // const fileLabel=document.querySelector(".custom-file-label");

        userfile.addEventListener("change", (e)=>{
            profileImg.src=URL.createObjectURL(userfile.files[0]);
        })
