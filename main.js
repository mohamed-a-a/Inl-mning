
fetch('https://blog-api-assignment.up.railway.app/posts')
    .then(res => res.json())
    .then(data => {
        for (i = 0; i < data.length; i++) {

            const blogDiv = document.createElement("div");
            const blogTitle = document.createElement("H1");
            const blogContent = document.createElement("p");
            const blogAuthor = document.createElement("p");
            const blogTags = document.createElement("p");
            const blogDate = document.createElement("i");
            const blogLink = document.createElement("a");
            const parag = document.createElement("p")




            const title = document.createTextNode(data[i].title);
            const content = document.createTextNode(`${data[i].content.slice(0, 100)}`);
            const author = document.createTextNode(`Author: ${data[i].author}`);
            const tags = document.createTextNode(`Tags: ${data[i].tags}`);
            const date = document.createTextNode(`Date: ${data[i].date.slice(0, 10)}`);
            const readmoreText = document.createTextNode('Read more')

            blogLink.setAttribute("href", `post.html?id=${data[i]._id}`);







            blogTitle.appendChild(title);
            blogContent.appendChild(content);
            blogAuthor.appendChild(author);
            blogTags.appendChild(tags);
            blogDate.appendChild(date);

            blogLink.appendChild(readmoreText)

            blogDiv.appendChild(blogTitle)
            blogDiv.appendChild(blogContent)
            blogDiv.appendChild(blogAuthor)
            blogDiv.appendChild(blogTags)
            blogDiv.appendChild(blogDate)
            blogDiv.appendChild(parag)
            blogDiv.appendChild(blogLink)


            const element = document.getElementById("div1");
            element.appendChild(blogDiv);

        }
    })

/*fetch('https://blog-api-assignment.up.railway.app/posts', {
method: 'POST',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    "tags": [
        "economics, travel, food, favorit, entertainment, games, not sports"
        ],
    "_id": "63945656564a1de81f3d0021035a5a",
    "title": "ljsladf - update",
    "content": "dsfsadfsdf - update",
    "author": "jkldfsafsd- update",
    "date": "2022-12-10T08:58:05.360Z",
    "__v": 0
})
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data)))*/