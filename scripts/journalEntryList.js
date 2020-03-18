/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useEntries()
     for (const entry of entries) {
       /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const entryHTMLRep = JournalEntryComponent(entry)
        contentTarget.innerHTML += entryHTMLRep
    }
}

