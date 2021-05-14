const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector('form')

// Load URLs in document.
async function get_urls() {
    const getUrls = await fetch("http://localhost:3000").then((data) => data.json());
    
    getUrls.urls.map( ({name, url}) => writeUrl({name, url}) ); // Add all URLs.
}

get_urls()

// Delete URLs in document and in data file.
function delete_urls(name, url) {
    // const deleteUrls = fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`).then((data) => data.json());
    let i;
    const urlToDelete = {
        name: document.querySelectorAll('li a')[i].innerText,
        url: document.querySelectorAll('li a')[i].href
    }

    /* for (i in urlToDelete) {
        if (Object.hasOwnProperty.call(urlToDelete, index)) {
            const element = urlToDelete[index];
            
        }
    } */
    
    const query = `http://localhost:3000/?name=${name}&url=${url}&del=1`;
    
    return deleteUrls;
}


function writeUrl({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el) {
    if (confirm('Tem certeza que deseja deletar?'))
        delete_urls()
        el.parentNode.remove()
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo')

    const [name, url] = value.split(",")

    if (!url) 
        return alert('formate o texto da maneira correta')

    if (!/^http/.test(url)) 
        return alert("Digite a url da maneira correta")

    writeUrl({ name, url })

    input.value = ""
})