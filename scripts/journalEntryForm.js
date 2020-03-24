import { saveEntries } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalEntry")

eventHub.addEventListener("click", e => {
    if(e.target.id ==="submit") {
        const entryDate = document.querySelector("#journalDate").value
        const entryConcepts = document.querySelector("#concepts").value
        const entryText = document.querySelector("#journalEntry").value
        const entryMood = document.querySelector("#mood").value

        const newEntry = {
            date: entryDate,
            concept: entryConcepts,
            entry: entryText,
            mood: entryMood
        }
        saveEntries(newEntry)
    }
})



  
  const journalForm= () => {
   return `
    
    <form action="">
        <fieldset class="entryDataForm">
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="concepts">Concepts covered</label>
            <input type="text" name="concepts" id="concepts">
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="50" rows="5"></textarea>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select name="mood" id="mood">
                <option value="Good">Good</option>
                <option value="Sad">Sad</option>
                <option value="Mad">Mad</option>
                <option value="Tired">Tired</option>
                <option value="Frustrated">Frustrated</option>
                <option value="Irritated">Irritated</option>
                <option value="Excited">Excited</option>
            </select>
        </fieldset>
    </form> 
    <section class="button">
       <button id="submit" type="submit">Record Journal Entry</button>    
    </section>
    `
}
export const journalFormComponent = () => {
  const journalFormHTML = journalForm()
    contentTarget.innerHTML = journalFormHTML
}
