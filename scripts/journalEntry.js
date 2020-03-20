/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <div id="entry--${entry.id}">
          <p class="date__concept">${entry.date} - ${entry.concept}</p>
          <ul>  
           <li> ${entry.entry}</li>
         </ul>
        </div>
    `
}

