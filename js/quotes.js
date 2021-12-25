const quotes = [
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author: "Barbara Bush",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outsid",
        author: "Kamal Ravikant",
    },
    {
        quote: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Anonymous",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

if (savedUsername != null){
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}
