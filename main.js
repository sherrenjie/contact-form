const form = document.getElementById('contact-form')
const successMessage = document.getElementById('success-message')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const firstName = document.getElementById('first-name').value.trim()
    const lastName = document.getElementById('last-name').value.trim()
    const email = document.getElementById('email').value.trim()
    const queryType = document.getElementById('input[name="query-type"]:checked')
    const message = document.getElementById('message').value.trim()
    const consent = document.getElementById('consent').checked

})