import { setSocioLocationId } from "./transientState.js"

const handleSocioLocationChange = (changeEvent) => {
    if (changeEvent.target.name==="location") {
        const parsed = JSON.parse(changeEvent.target.value)
        setSocioLocationId(parsed)
    }
}

export const LocationChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleSocioLocationChange)

    let html = `
        <div class="survey-input">
            <h2>What type of area do you live in?</h2>
    `

    for (const location of locations) {
        html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    }

    html += `
        </div>
    `

    return html
}