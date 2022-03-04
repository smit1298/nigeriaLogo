const selectElement = document.querySelector("select");
console.log(nigeriaLogo.length);


let sortedCategories = categories.sort()

for (let i = 0; i < sortedCategories.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.textContent = sortedCategories[i];
  optionElement.setAttribute("value", i);
  optionElement.setAttribute("id", i);
  selectElement.insertAdjacentElement("beforeend", optionElement);
}


for ( let i = 0; i < nigeriaLogo.length; i++){
const fileName = nigeriaLogo[i].fileName; 
console.clear()
console.log(nigeriaLogo[i]);
const fileImage = document.createElement("img")
fileImage.setAttribute("src", `./logos/${fileName}/${fileName}.png`)
}
