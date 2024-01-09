const accessKey = "d4qh8DqSeKA5tICWWFyomM0E2A4LC0ap_ePH_6bScko";


const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more")
const searchButton = document.getElementById("search-button")
const darkbtn = document.querySelector(".dark")
const anchorTag = document.querySelectorAll('.search-result');


let inputData = ""
let page = 1;

async function searchImage(){
    inputData = inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json();

    const results = data.results;

    if(page == 1){
        searchResults.innerHTML = ""
    }

    results.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
    })

    page++;

    if(page > 1){
        showMore.style.display = "block"
    }

}

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImage()
})

showMore.addEventListener("click", () => {
    searchImage()
})

darkbtn.addEventListener("click",()=>{

    if(darkbtn.innerText === "dark_mode"){
        darkbtn.innerText = "light_mode"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        anchorTag.style.backgroundColor = "red"
      
    }
    else{
        darkbtn.innerText = "dark_mode"
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        anchorTag.style.backgroundColor = "black"
        
    }
   
})





