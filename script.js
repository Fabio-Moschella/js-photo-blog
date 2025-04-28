const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
const polaroidPhotos = document.getElementById("polaroids");
const overlayEl = document.getElementById("overlay");
const btnEl = document.querySelector(".btn");
axios.get(apiUrl).then((res) => {
  const photos = res.data;
  let photoCardHtml = "";

  // genero l'html per le foto
  photos.forEach((photo) => {
    //console.log(photo);
    photoCardHtml += generatePhotoHtml(photo);
  });
  polaroidPhotos.innerHTML += photoCardHtml;
  // Recupero le polaroid
  const overlayCard = document.querySelectorAll(".polaroid");
  console.log(overlayCard);
  overlayCard.forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log("click");

      overlayEl.classList.remove("d-none");
      overlayEl.classList.add("d-block");
      btnEl.addEventListener("click", (event) => {
        overlayEl.classList.remove("d-block");
        overlayEl.classList.add("d-none");
      });
    });
  });
});

const generatePhotoHtml = (photo) => {
  const photosCard = `    <div
            class="col-sm-12 col-md-5 col-lg-4 my-5 d-flex justify-content-center"
            --
          ><div
              class="polaroid card justify-content-center align-items-center py-2"
              style="width: 18rem"
            >
              <div>
                <img src="./img/pin.svg" class="pin-img" alt="" />
              </div>
              <img
                src="${photo.url}"
                class="card-img-top orso-img"
                alt="${photo.title}"
              />

              <div class="card-body">
                <p class="card-text">${photo.date}</p>
                <p class="card-text">${photo.title}</p>
              </div>
            </div></div>`;
  return photosCard;
};

// const generateOverlayPhoto = (photo) => {
//   const overlayPhoto = `  <div>
//         <button class="btn btn-danger mb-5">Chiudi</button>
//       </div>
//       <div>
//         <img src="${photo.url}" alt="" />
//       </div>`;
//   return overlayPhoto;
// };
