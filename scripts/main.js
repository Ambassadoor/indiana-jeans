import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js";
import { SubmissionButton } from "./SubmissionButton.js";
import { SubmissionList } from "./SubmissionList.js";
import { BrandInput } from "./BrandInput.js";
import { YearInput } from "./YearInput.js";

const container = document.querySelector("#container") 

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const brandHTML = BrandInput()
    const buttonHTML = SubmissionButton()
    const submissionsHTML = await SubmissionList()
    const yearHTML = YearInput()

    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${brandHTML}
        ${yearHTML}
        ${buttonHTML}
        ${submissionsHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()