const initialLikes = 3; // hopefully realistic 
const initialDislikes = 999; // am biased XD

let likesCount = initialLikes
let dislikesCount = initialDislikes;

const likesBtn = document.getElementById("likeBtn");
const dislikesBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList");

likesBtn.innerText = likesCount + " Like  👎";
dislikesBtn.innerText = dislikesCount + " Dislike  👍";

likesBtn.addEventListener("click", () => {
    if (document.cookie.indexOf("voted") === -1){
        likesCount++;
        likesBtn.innerText = likesCount + " Like  👎";
        setCookie();
        disableAllButtons();
    }
})

dislikesBtn.addEventListener("click", () => {
    if (document.cookie.indexOf("voted" === -1)) {
        dislikesCount++;
        dislikesBtn.innerText = dislikesCount + " Like  👍";
        setCookie();
        disableAllButtons();
    }
})

function setCookie() {
    const expireOn = new Date(Date.now() + (2 * 60 * 1000))
    document.cookie = "voted=true; path=/; expires=" + expireOn.toUTCString();

}

clearBtn.addEventListener("click", () => {
    commentBox.value = ""
    commentsList.innerHTML="";
    document.cookie = "voted=true; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    location.reload();
});

function disableAllButtons() {
    likesBtn.disabled = true;
    dislikesBtn.disabled = true;
    submitBtn.disabled = true;
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.cookie.indexOf("voted") > -1) {
        console.log("Found the cookie!");
        disableAllButtons();
    }
})