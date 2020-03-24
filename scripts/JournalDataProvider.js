const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangeEvent)
}

let entries = []

export const useEntries = () => entries.slice()

export const getEntries = () => {
    return fetch(' http://localhost:3000/entries') // Fetch from the API
.then(response => response.json())  // Parse as JSON
.then(parsedEntries => {
    entries = parsedEntries
    // What should happen when we finally have the array?
})
}
//deleting notes
export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

export const saveEntries = entry => {
    return fetch('http://localhost:3000/entries', {
       method: "Post",
       headers: {
           "content-Type": "application/json"
       },
       body: JSON.stringify(entry) 
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}
   
// export const useEntries = () => {
//     const sortedByDate = entries.sort( 
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }