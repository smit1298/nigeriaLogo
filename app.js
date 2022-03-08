const selectElement = document.querySelector("select");
const imageForAll = document.getElementById("images");
const logoContainer = document.getElementById("image-container");
const allAlphabets = document.getElementById("alphabets");

let sortedCategories = categories.sort();

for (let i = 0; i < sortedCategories.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.textContent = sortedCategories[i];
  optionElement.setAttribute("value", i);
  optionElement.setAttribute("id", i);
  selectElement.insertAdjacentElement("beforeend", optionElement);
}

// for ( let i = 0; i < nigeriaLogo.length; i++){
// let fileName = nigeriaLogo[i].filename;
// const fileImage = document.createElement("img")
// fileImage.setAttribute("src", `./logos/${fileName}/${fileName}.png`);
// imageForAll.appendChild(fileImage);
// }    

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
console.log(alphabet);
for (let i = 0; i < alphabet.length; i++) {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = alphabet[i];
  allAlphabets.insertAdjacentElement("beforeend", paragraphElement);
}


function pickOutCompany(companyEntity) {
  const fileName = companyEntity.filename;
  const title = companyEntity.title;
  const category = companyEntity.category.filter((a) => a.length).join(" / ");
  const logoUrl = `./logos/${fileName}/${fileName}.png`;
  logoContainer.innerHTML += ` 
  <div class="card-box"> <div class="card"> 
  <img src="${logoUrl}" alt="${fileName}" class="card-image"> 
  </div> 
  <p class="title">
   <a href="" >${title}</a> 
   </p> 
   <h3> 
   <span class="category">${category}</span>
   </h3>
    </div>`;
}

for (let i = 0; i < nigeriaLogo.length; i++) {
  pickOutCompany(nigeriaLogo[i]);
}
