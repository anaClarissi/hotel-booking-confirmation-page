const btnCopy = document.querySelector(".copy");

btnCopy.addEventListener("click", () => copy());

async function copy () {

    const password = document.querySelector("#password").textContent;

    try {

        await navigator.clipboard.writeText(password);

        console.log("Content copied to clipboard!");

    } catch (error) {

        console.error("Failed copy: ", error);

    }

}