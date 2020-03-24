/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section  class="entry">
        <article id="entry--${entry.id}">
          <p class="date__concept">${entry.date}</p>
          <p>Concepts: ${entry.concept}</p>
          <p>Notes: ${entry.entry}</p>
          <p>Mood: ${entry.mood}</p>
        <button class="deleteButton" id="deleteEntry--${entry.id}">Delete</button>
      </article>
    </section> `
}

