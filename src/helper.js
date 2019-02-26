


const questions = ['Lorem ipsum, dolor sit amet consectetur?', 'Tadipisicing elit. Incidunt sed, fugiat magni necessitatibus?', 'erspiciatis! Est cumque ullam expedita consectetur tenetur saepe?', '  explicabo, accusantium iste ducimus aspernatur similique veniam maxime vel p?'];
const tagLines = ['This is the app header', 'This is the about header'];



export function getRandomHeaderLine(i) {
    return tagLines[i]
}

export function MakeRandomQuestions() {
    
        return `<div>${questions[Math.floor(Math.random() * questions.length)]}</div>`
    
}


/**if the page has no backend you can use netlify and gitHub pages
for bigger projects: heroku, Digital Ocean, aws
 * 
 */







