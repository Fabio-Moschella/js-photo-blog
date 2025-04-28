const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
const polaroidPhotos = document.getElementById("polaroid");
const overlayEl = document.getElementById("overlay");

axios.get(apiUrl).then((res) => {
  const photos = res.data;
  let photoCardHtml = "";
  photos.forEach((photo) => {
    console.log(photo);
    photoCardHtml += generatePhotoHtml(photo);
    const overlayCard = document.querySelectorAll(".card");
    overlayCard.forEach((card) => {
      card.addEventListener("click", () => {});
    });
  });
  polaroidPhotos.innerHTML += photoCardHtml;
});

const generatePhotoHtml = (photo) => {
  const photosCard = `    <div
            class="col-sm-12 col-md-5 col-lg-4 my-5 d-flex justify-content-center"
            --
          ><div
              class="card justify-content-center align-items-center py-2"
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
