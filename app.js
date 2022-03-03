const selectElement = document.querySelector('select')
console.log(nigeriaLogo.length);

for ( let i = 0; i < nigeriaLogo.length; i++){
    const optionElement = document.createElement("option");
    optionElement.textcontent = nigeriaLogo[i].category;
    optionElement.setAttribute("value", i);
    optionElement.setAttribute("id", i);
    selectElement.insertAdjacentElement("beforeend", optionElement);
}







