function modifyText() {
    const topContainerTitle = document.getElementsByClassName("top-container-title")[0];
    if (topContainerTitle.textContent == "Welcome Message") {
        topContainerTitle.textContent = "Have a Good Time!";
    } else {
        topContainerTitle.textContent = "Welcome Message";
    }
}

const el = document.getElementsByClassName("top-container")[0];
el.addEventListener("click", modifyText);

function showHiddenContainer() {
    const hiddenContainer = document.getElementsByClassName("hidden-container")[0];
    if (hiddenContainer.style.display == "none") {
        hiddenContainer.style.display = "block";
    } else {
        hiddenContainer.style.display = "none";
    }
}

const el2 = document.getElementsByClassName("btn")[0];
el2.addEventListener("click", showHiddenContainer);