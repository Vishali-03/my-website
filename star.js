const shootingStar = document.getElementById("shootingStar");
const wishPopup = document.getElementById("wishPopup");
const sendWish = document.getElementById("sendWish");
const wishInput = document.getElementById("wishInput");
const finalMessage = document.getElementById("finalMessage");
const messageText = document.getElementById("messageText");

/* Hide initially */
shootingStar.style.opacity = "0";

/* Show star after 2 sec */
setTimeout(showStar, 2000);

function showStar(){

    shootingStar.style.opacity = "1";

    shootingStar.style.left = "45%";
    shootingStar.style.top = "180px";

}

/* Click */

shootingStar.onclick = function(){

    wishPopup.style.display = "flex";

}

/* Send */

sendWish.onclick = function(){

    if(wishInput.value.trim()==""){

        alert("Please make a wish first ✨");

        return;

    }

    wishPopup.style.display="none";

    shootingStar.classList.add("flyAway");

    setTimeout(()=>{

        finalMessage.style.display="block";

        messageText.innerHTML=

        `🌠 Your wish has been sent to the stars.

        <br><br>

        `

    },1800);

}