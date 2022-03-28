function modifyText() {
    const topContainerTitle = document.getElementsByClassName("top-container-title")[0];
    if (topContainerTitle.textContent == "Welcome Message") {
        topContainerTitle.textContent = "Have a Good Time!";
    } else {
        topContainerTitle.textContent = "Welcome Message";
    }
}

const topContainerClass = document.getElementsByClassName("top-container")[0];
topContainerClass.addEventListener("click", modifyText);

function showHiddenContainer() {
    const hiddenContainer = document.getElementsByClassName("hidden-container")[0];
    if (hiddenContainer.style.display == "none") {
        hiddenContainer.style.display = "block";
    } else {
        hiddenContainer.style.display = "none";
    }
}

const buttonClass = document.getElementsByClassName("btn")[0];
buttonClass.addEventListener("click", showHiddenContainer);