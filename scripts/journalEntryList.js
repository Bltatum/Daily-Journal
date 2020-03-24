

// DOM reference to where all entries will be rendered
import { useEntries, getEntries, deleteEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".entryLog")
const eventHub =document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", e =>{
    render()
})
//deleting note E.V.
contentTarget.addEventListener("click", e =>{
    if(e.target.id.startsWith("deleteEntry--")){
        const [pefix, entryId] = e.target.id.split("--")
        deleteEntry(entryId)
    }
  })



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

