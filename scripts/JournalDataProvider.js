


let entries = []

fetch(' http://localhost:3000/entries') // Fetch from the API
.then(response => response.json())  // Parse as JSON
.then(parsedEntries => {
    entries = parsedEntries
    // What should happen when we finally have the array?
})
   
export const useEntries = () => {
    const sortedByDate = entries.sort( 
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}