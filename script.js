const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
const polaroidPhotos = document.getElementById("polaroids");
const overlayEl = document.getElementById("overlay");

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
      const target = event.target;
      const polaroidEl = target.closest(".polaroid");
      const overlayImg = polaroidEl.querySelector("img.card-img-top").src;
      console.log(overlayImg);

      // const clickedImg = card.querySelector(".orso-img");
      // const overlayImg = overlayEl.querySelector("img");
      // // overlayImg.src = clickedImg.src;
      // overlayImg.alt = clickedImg.alt;
      overlayEl.innerHTML = `<div>
        <button class="btn btn-danger mb-5">Chiudi</button>
      </div>
     <div>
        <img class="overlay-img" src="${overlayImg}" alt="" />
      </div>`;
      overlayEl.classList.remove("d-none");
      overlayEl.classList.add("d-block");

      const btnEl = document.querySelector(".btn");

      btnEl.addEventListener("click", () => {
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
              data-test="${photo.url}"
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
