const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details-container');
const deleteBtn = document.querySelector('.delete-btn');

const renderProfiles = async () => {
    const res = await fetch('http://localhost:3000/profile/' + id )
    if (!res.ok) {
        window.location.replace("/");
    }
    const profile = await res.json()

    const template = `
        <div class="details-head">
            <div class="head-child1">
                <img src="${profile.img}" alt="">
            </div>
            <div class="head-child2">
                <div class="row1">
                    <h1>Name : ${profile.name}</h1>
                    <h1>Age : ${profile.age}</h1>
                </div>
                <div class="row2">
                    <h1>${profile.occupation}</h1>
                    <h1>Gender : ${profile.gender}</h1>
                </div>
            </div>
        </div>
        <div class="details-body">
            <p>
                ${profile.description}
            </p>
            <h2>Phone : ${profile.phone}</h2>
            <h2>Email : ${profile.email}</h2>
        </div>
        <div class="details-foot">
            <a href="${profile.flink}"><img src="logo/facebook.svg" alt=""></a>
            <a href="${profile.ilink}"><img src="logo/instagram.svg" alt=""></a>
            <a href="${profile.tlink}"><img src="logo/twitter.svg" alt=""></a>
        </div>
    `
    container.innerHTML = template
}

deleteBtn.addEventListener("click", async () => {
    const res = await fetch('http://localhost:3000/profile/' + id, {
        method: 'DELETE'
    })
    window.location.replace("/")
})

window.addEventListener("DOMContentLoaded", renderProfiles)