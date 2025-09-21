const transientState = new Map()

// const transientState = {
//     ownsBlueJeans: false,
//     socioLocationId: 0,
//     brandName: "",
//     yearOfPurchase: 0
// }

export const setOwnBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
}

export const setBrandName = (brand) => {
    transientState.set("brandName", brand)
}

export const setYearOfPurchase = (year) => {
    transientState.set("yearOfPurchase", year)
}

export const saveSurveySubmission = async () => {

    if (transientState.get("socioLocationId") > 0 && typeof(transientState.get("ownsBlueJeans")) === 'boolean') {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)
    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(newSubmissionEvent);

} else {
        window.alert("Please complete the form")
    }

}