const form = document.querySelector('.addForm')

const addMember = async (e) => {
    e.preventDefault()

    const data = {
        name: form.name.value,
        age: form.age.value,
        occupation: form.occupation.value,
        gender: form.gender.value,
        email: form.email.value,
        phone: form.phone.value,
        description: form.description.value,
        img: form.image.value,
        flink: form.flink.value,
        ilink: form.ilink.value,
        tlink: form.tlink.value
    }

    await fetch('http://localhost:3000/profile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.replace("/")
}

form.addEventListener("submit", addMember)