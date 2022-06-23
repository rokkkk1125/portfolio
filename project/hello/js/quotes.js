const quotes = [
    {
        quotes:"“Be yourself; everyone else is already taken.”",
        author:"-Oscar Wilde"
    },
    {
        quotes:"“So many books, so little time.”",
        author:"-Frank Zappa"
    },
    {
        quotes:"“A room without books is like a body without a soul.”",
        author:"-Marcus Tullius Cicero"
    },
    {
        quotes:"“You only live once, but if you do it right, once is enough.”",
        author:"-Mae West"
    },
    {
        quotes:"“Be the change that you wish to see in the world.”",
        author:"-Mahatma Gandhi"
    },
    {
        quotes:"“If you tell the truth, you don't have to remember anything.”",
        author:"-Mark Twain"
    },
    {
        quotes:"“We accept the love we think we deserve.”",
        author:"-Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quotes:"“Without music, life would be a mistake.”",
        author:"-Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        quotes:"“A friend is someone who knows all about you and still loves you.”",
        author:"-Elbert Hubbard"
    },
    {
        quotes:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"-Mahatma Gandhi"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quotes
author.innerText = todaysQuote.author

quote.setAttribute("id","quote")
author.setAttribute("id","author")