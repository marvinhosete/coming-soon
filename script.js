const messages = {
    'pt-BR': {
        title: 'Em Breve',
        description: 'Estamos trabalhando duro para trazer algo incrível para você. Fique atento!'
    },
    'en-US': {
        title: 'Coming Soon',
        description: "We're working hard to bring you something amazing. Stay tuned!"
    }
}

const change = () => {
    const message = messages[navigator.language] ?? messages["pt-BR"]
    document.getElementById('title').innerText = message.title
    document.getElementById('description').innerText = message.description
}

window.addEventListener('load', change)
window.addEventListener('languagechange', change)