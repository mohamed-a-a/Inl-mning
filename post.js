const params = (window.location.search)
const id = new URLSearchParams(params).get('id')
const title = document.getElementById("post-title")
const text = document.getElementById("post-text")
const author = document.getElementById("author")
const tags = document.getElementById("tags")
const date = document.getElementById("date")
console.log(id);
fetch(`https://blog-api-assignment.up.railway.app/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        title.innerHTML = data.title
        text.innerHTML = data.content
        author.innerHTML = data.author
        tags.innerHTML = data.tags
        date.innerHTML = data.date
    })