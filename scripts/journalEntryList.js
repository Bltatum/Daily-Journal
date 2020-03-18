
const eventHub =document.querySelector(".container")

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

eventHub.addEventListener("entryStateChanged", e =>{
    render()
})

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")

const render = () =>{
    getEntries().then(()=>{
        const allTheEntries = useEntries()
            contentTarget.innerHTML = allTheEntries.map(
                currentEntryObject => {
                    return JournalEntryComponent(currentEntryObject)
                }
            ).join(" ")
    })
}

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
   render()
    }

