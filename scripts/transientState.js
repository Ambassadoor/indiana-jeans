const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

export const setOwnBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const savesurveySubmission = async () => {

    if (transientState.socioLocationId > 0 && typeof(transientState.ownsBlueJeans) === 'boolean') {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)} else {
        window.alert("Please complete the form")
    }
}