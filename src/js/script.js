const btnCopy = document.querySelector(".copy");

btnCopy.addEventListener("click", () => copy());

async function copy () {

    const password = document.querySelector("#password").textContent;

    try {

        await navigator.clipboard.writeText(password);

        showAlert();

    } catch (error) {

        console.error("Failed copy: ", error);

    }

}

function showAlert() {

    const alert = document.querySelector("#copy-alert");

    alert.hidden = false;

    alert.classList.add("show");

    setTimeout(() => {

        alert.hidden = true;

        alert.classList.remove("show");

    }, 2000);

}