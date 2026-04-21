const beverages = document.querySelectorAll(".beverage")
beverages.forEach(beverage => {beverage.addEventListener("click", (e) => {fieldSetOnclick(e)})})

function fieldSetOnclick(event){
    if (event.target.className !== "close-button")
        return;
    event.currentTarget.remove()
}