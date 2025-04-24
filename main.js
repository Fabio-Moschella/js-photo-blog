const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailList = document.getElementById("emailList");
const fetchEmail = document.getElementById("fetchEmailList");

const numberEmail = 10;
console.log("PRIMA DI GET");

function generateEmail(numberEmail) {
  const arreyEmail = [];
  // emailList.innerHTML = "";
  let emailListHtml = "";
  for (let i = 0; i < numberEmail; i++) {
    axios.get(apiUrl).then((res) => {
      arreyEmail.push(res.data.response);
      console.log(arreyEmail);
      if (arreyEmail.length === 10) {
        console.log(arreyEmail);
        for (let i = 0; i < arreyEmail.length; i++) {
          const currentEmail = arreyEmail[i];

          emailListHtml += `<li>${currentEmail}</li>`;
        }
        emailList.innerHTML = emailListHtml;
      }
    });
  }
}
console.log("DOPO DEL GET");

fetchEmail.addEventListener("click", () => {
  generateEmail(numberEmail);
});
