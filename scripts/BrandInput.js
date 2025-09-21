import { setBrandName } from "./transientState.js";

const handleBrandInput = (changeEvent) => {
    if (changeEvent.target.name === "brand") {
    setBrandName(changeEvent.target.value)
    }
}


export const BrandInput = () => {
    document.addEventListener("keyup", handleBrandInput)

    let html = `
        <div class="survey-input" id="brand-choice">
            <h2>What brand of jeans do you own (if any)?</h2>
            <input type="text" name="brand"/>
        </div>

    `

    return html
}