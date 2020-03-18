const contentTarget = document.querySelector(".journalEntry")
  
  const journalForm= () => {
   return `
    
    <form action="">
        <fieldset>
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
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="5"></textarea>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select name="mood" id="mood">
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Mad">Mad</option>
                <option value="Tired">Tired</option>
            </select>
        </fieldset>
    </form> `
}
export const journalFormComponent = () => {
  const journalFormHTML = journalForm()
    contentTarget.innerHTML = journalFormHTML
}
