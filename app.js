const selectElement = document.querySelector("select");
const imageForAll = document.getElementById("images");
const logoContainer = document.getElementById("image-container");
const allAlphabets = document.getElementById("alphabets");
const anchor = document.getElementsByTagName("p");

let sortedCategories = categories.sort();

for (let i = 0; i < sortedCategories.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.textContent = sortedCategories[i];
  optionElement.setAttribute("value", sortedCategories[i]);
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


const alphabet = "#abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");



for (let i = 0; i < alphabet.length; i++) {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = alphabet[i];
  allAlphabets.insertAdjacentElement("beforeend", paragraphElement);
}


function pickCompany(companyEntity) {
  const fileName = companyEntity.filename;
  const title = companyEntity.title;
  const category = companyEntity.category.filter((a) => a.length).join(" / ");
  const logoUrl = `./logos/${fileName}/${fileName}.png`;
  logoContainer.innerHTML += ` 
  <div class="card-box"> <div class="card"> 
  <img src="${logoUrl}" alt="${fileName}" class="card-image"> 
  </div> 
  <div class="title">
   <a href="" >${title}</a> 
   </div> 
   <h3> 
   <span class="category">${category}</span>
   </h3>
    </div>`;
}

for (let i = 0; i < nigeriaLogo.length; i++) {
  pickCompany(nigeriaLogo[i]);
}



document.getElementById("categories").addEventListener("change", function(e){
  let categoryValue = this.value;
  logoContainer.innerHTML = '';

  for (let i = 0; i < nigeriaLogo.length; i++){
    if (nigeriaLogo[i].category.includes(categoryValue)){
      pickCompany(nigeriaLogo[i]);
    }
  }
})

// making all alphabets clickable


for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", function (e) { 
    const presentLetter = e.currentTarget.textContent;
    logoContainer.innerHTML = "";

    for (let i = 0; i < nigeriaLogo.length; i++) 
    {
      if (nigeriaLogo[i].title.startsWith(presentLetter)) 
  
      {
        pickCompany(nigeriaLogo[i]);
      }
    }
  }
  );

}
