import { setYearOfPurchase } from "./transientState.js";

export const handleYearChange = (changeEvent) => {
    if (changeEvent.target.name === "year") {
        setYearOfPurchase(changeEvent.target.value)
    }
}

export const YearInput = () => {
    document.addEventListener("change", handleYearChange)

    let html = `
        <div class="survey-input">
            <h2>What year did you purchase the jeans (if applicable)</h2>
            <input type="number" min="1900" max="2025" step="1" name="year"/>
        </div>
    `

    return html
}