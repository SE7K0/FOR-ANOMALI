/* ==========================================
   GALLERY DATA
========================================== */

const galleryData = [

    {
        image: "assets/gallery/Kenangan_1.jpg",
        title: "First time mantai",
        desc: "Member pada bolong bolong waktu ini"
    },

    {
        image: "assets/gallery/Kenangan_2.jpg",
        title: "Perayaan Ultah Caya",
        desc: "yaa walau hera telat tapi tetep aja seru, thanks for all of u, the surprise is so great"
    },

    {
        image: "assets/gallery/Kenangan_3.jpg",
        title: "Foto Shoot Pertama dan terakhir (hopefully not)",
        desc: "pose tidur ini ada filosofinya nggak ya?"
    },

    {
        image: "assets/gallery/Kenangan_4.jpg",
        title: "Foto Shoot Pertama dan terakhir (hopefully not)",
        desc: "pose ini punya filosofinya sih, nggak bisa gua jelasin sih, karena bukan gua yang ngonsep"
    },

    {
        image: "assets/gallery/Kenangan_5.jpg",
        title: "mantai di DW",
        desc: "nyari LC edition, oh ya sekalian surpres hera juga"
    },

    {
        image: "assets/gallery/Kenangan_6.jpg",
        title: "Mantai di DW",
        desc: "sama aja cuma beda waktu nya, yang ini agak sorean"
    },

    {
        image: "assets/gallery/Kenangan_7.jpg",
        title: "Ultah di rumah michael",
        desc: "jujur gua masih terngiang ngiang sama kuenya, setuju nggak ges?"
    }


];


/* ==========================================
   RENDER GALLERY
========================================== */

function renderGallery() {

    const galleryGrid = document.querySelector(".gallery-grid");

    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryData.map(photo => `

        <div class="gallery-item">

            <img src="${photo.image}" alt="${photo.title}">

            <div class="gallery-overlay">

                <h3>${photo.title}</h3>

                <p>${photo.desc}</p>

            </div>

        </div>

    `).join("");

}


/* ==========================================
   AUTO LOAD
========================================== */

document.addEventListener("DOMContentLoaded", renderGallery);

/* ==========================================
   LIGHTBOX
========================================== */

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

document.addEventListener("click", e => {

    if (e.target.matches(".gallery-item img")) {

        lightbox.classList.remove("hidden");

        lightboxImage.src = e.target.src;

    }

});
