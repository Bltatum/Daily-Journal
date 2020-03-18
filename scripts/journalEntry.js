/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <div id="entry--${entry.id}">
         <ul>
          <li> ${entry.concept}</li>
           <li> ${entry.entry}</li>
         </ul>
        </div>
    `
}

