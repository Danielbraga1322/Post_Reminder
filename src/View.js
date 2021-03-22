const View = {
    render({minutes, seconds}) {
        document.body.innerHTML = `
        <p>Já fez suas atividades no Duolingo hoje?</p>
        <span>${minutes}:${seconds}</span> 
        `;
    }
}

export { View };