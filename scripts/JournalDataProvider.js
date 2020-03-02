/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {   
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/25/2025",
        concept: "terminal",
        entry: "learned how to navigate terminal",
        mood: "good"
    },
    {
        id: 3,
        date: "07/26/2025",
        concept: "github",
        entry: "learned git hub workflow",
        mood: "great"
    },{
        id: 4,
        date: "07/27/2025",
        concept: "team building",
        entry: "learned how to build a site with a team and use github together",
        mood: "good"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort( 
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}