/* ==========================================
   DOM
========================================== */

const hero = document.querySelector(".hero");

const homePage = document.getElementById("homePage");

const profilePage = document.getElementById("profilePage");

const profileContent = document.getElementById("profileContent");

const enterBtn = document.getElementById("enterBtn");

const popup = document.getElementById("passwordPopup");

const passwordInput = document.getElementById("passwordInput");

const confirmBtn = document.getElementById("confirmBtn");

const cancelBtn = document.getElementById("cancelBtn");

const cards = document.querySelectorAll(".profile-card");

const loader = document.getElementById("loader");

let selectedProfile = null;


/* ==========================================
   INITIAL
========================================== */

homePage.style.display = "none";

profilePage.style.display = "none";

popup.classList.add("hidden");


/* ==========================================
   LOADER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1500);

});


/* ==========================================
   ENTER WEBSITE
========================================== */

enterBtn.addEventListener("click", () => {

    hero.style.display = "none";

    homePage.style.display = "block";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   PROFILE CARD
========================================== */

cards.forEach(card => {

    card.addEventListener("click", () => {

        selectedProfile = Number(card.dataset.id);

        openPopup();

    });

});


/* ==========================================
   POPUP
========================================== */

function openPopup() {

    popup.classList.remove("hidden");

    passwordInput.value = "";

    passwordInput.focus();

}

function closePopup() {

    popup.classList.add("hidden");

}


/* ==========================================
   BUTTON
========================================== */

cancelBtn.addEventListener("click", closePopup);

confirmBtn.addEventListener("click", checkPassword);


/* ==========================================
   KEYBOARD
========================================== */

passwordInput.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        checkPassword();

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closePopup();

    }

});


/* ==========================================
   CLICK OUTSIDE
========================================== */

popup.addEventListener("click", e => {

    if (e.target === popup) {

        closePopup();

    }

});

/* ==========================================
   CHECK PASSWORD
========================================== */

function checkPassword() {

    const profile = profiles.find(

        p => p.id === selectedProfile

    );

    if (!profile) return;

    if (passwordInput.value === profile.password) {

        closePopup();

        showProfile(profile);

    } else {

        popup.classList.add("shake");

        passwordInput.value = "";

        passwordInput.focus();

        setTimeout(() => {

            popup.classList.remove("shake");

        }, 400);

    }

}


/* ==========================================
   SHOW PROFILE
========================================== */

function showProfile(profile) {

    homePage.style.display = "none";

    profilePage.style.display = "block";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    document.documentElement.style.setProperty(

        "--gold",

        profile.color

    );

    profileContent.innerHTML = `

<div class="profile-container">

<button class="back-btn">

← Back

</button>

<div class="profile-header">

<div class="profile-photo">

<img src="${profile.photo}" alt="${profile.name}">

</div>

<div class="profile-info">

<h1>${profile.name}</h1>

<p>${profile.about}</p>

</div>

</div>

<div class="profile-section">

<h2>❤️ Likes</h2>

<div class="tag-container">

${createTags(profile.likes)}

</div>

</div>

<div class="profile-section">

<h2>💀 Dislikes</h2>

<div class="tag-container">

${createTags(profile.dislikes)}

</div>

</div>

<div class="profile-section">

<h2>✉ Message From Admin</h2>

<div class="message-box">

${profile.message}

</div>

</div>

<div class="profile-section">

<h2>🎵 Favorite Music</h2>

<div class="music-card">

<img src="${profile.music.cover}" class="music-cover">

<div class="music-info">

<h3>${profile.music.title}</h3>

<p>${profile.music.artist}</p>

<audio controls>

<source src="${profile.music.file}">

</audio>

</div>

</div>

</div>

`;

const audio = profileContent.querySelector("audio");

if (audio) {

    audio.volume = 0;

    audio.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        audio.volume = Math.min(volume, 0.5);

        if (volume >= 0.5) {

            clearInterval(fade);

        }

    }, 80);

}

    profileContent
        .querySelector(".back-btn")
        .addEventListener("click", backHome);

}

/* ==========================================
   CREATE TAGS
========================================== */

function createTags(data) {

    return data.map(item => `

<span class="tag">

${item}

</span>

`).join("");

}


/* ==========================================
   CREATE GALLERY
========================================== */

function createGallery(images) {

    if (!images || images.length === 0) {

        return `<p>Tidak ada foto.</p>`;

    }

    return images.map(image => `

<img
    src="${image}"
    class="gallery-image"
    alt="Gallery"
>

`).join("");

}


/* ==========================================
   BACK HOME
========================================== */

function backHome() {

    const audio = profileContent.querySelector("audio");

    if (audio) {

        audio.pause();

        audio.currentTime = 0;

    }

    profilePage.style.display = "none";

    homePage.style.display = "block";

    profileContent.innerHTML = "";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==========================================
   GALLERY CLICK
========================================== */

profileContent.addEventListener("click", e => {

    if (!e.target.classList.contains("gallery-image")) return;

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("hidden");
    lightboxImage.src = e.target.src;

});


/* ==========================================
   CLOSE LIGHTBOX
========================================== */

const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.add("hidden");

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.add("hidden");

        }

    });

}

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    },2000);

});