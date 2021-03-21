const container = document.querySelector('.profiles-container')
const searchForm = document.querySelector('.search-form')

const renderProfiles = async (text) => {
    let uri = 'http://localhost:3000/profile?_sort=id&_order=desc'

    if(text){
        uri += `&q=${text}`
    }

    const res = await fetch(uri);
    const profiles = await res.json();

    let template = ''
    profiles.forEach(item => {
        template += `
        <div class="card">
            <img src="${item.img}" alt="" class="card-img">
            <h1 class="card-name">${item.name}</h1>
            <h2 class="card-occupation">${item.occupation}</h2>
            <h2 class="card-email">${item.email}</h2>
            <a href="/details.html?id=${item.id}">read more</a>
        </div>
        `
    })

    container.innerHTML = template
}

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    renderProfiles(searchForm.text.value.trim())
})

// const search = document.querySelector('.search-label')
// search.addEventListener("keydown", async (e) => {
//     renderProfiles(searchForm.text.value.trim())
// })

window.addEventListener("DOMContentLoaded", () => renderProfiles())