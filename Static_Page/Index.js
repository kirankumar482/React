const header = document.createElement("div");
header.innerHTML = "<h2>KK</h2>"
header.id = "header"

const content = document.createElement("div");
content.innerText = "Hello Mike";
content.id = "content"

const footer = document.createElement("div");
footer.innerHTML = "<h4>Thank you</h4>"
footer.id = "footer"

document.body.append(header,content,footer);