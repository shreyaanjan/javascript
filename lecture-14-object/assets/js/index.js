let rowQuotes = document.getElementById("row-quotes")

let quotes = [
    {quote : "All that glitters is not gold.", author : "William Shakespeare"},
    {quote : "Life is like riding a bicycle. To keep your balance, you must keep moving.", author : "Albert Einstein"},
    {quote : "No one can make you feel inferior without your consent.", author : "Eleanor Roosevelt"},
    {quote : "Whatever you are, be a good one.", author : "Abraham Lincoln"},
    {quote : "Be yourself; everyone else is already taken.", author : "Oscar Wilde"},
    {quote : "Our greatest glory is not in never falling, but in rising every time we fall.", author : "Nelson Mandela"},
    {quote : "You don’t have to be great to start, but you have to start to be great.", author : "Zig Ziglar"},
    {quote : "It is during our darkest moments that we must focus to see the light.", author : "Aristotle"},
    {quote : "You are never too old to set another goal or to dream a new dream.", author : "C.S. Lewis"},
]

quotes.forEach((data) => {
    rowQuotes.innerHTML += `
    <div class="col-lg-4 col-md-6">
                    <div class="box bg-info bg-gradient h-100">
                        <figure class="text-center p-4">
                            <blockquote class="blockquote">
                                <p>${data.quote}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer pt-3">
                                <cite title="Source Title">${data.author}</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>`
})