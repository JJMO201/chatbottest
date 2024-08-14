// script.js
const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('user-input');

const responses = {
    'peso': 'Las raquetas de tenis varían en peso, desde ligeras (entre 260-290 gramos) hasta más pesadas (hasta 320 gramos o más). Las raquetas más ligeras son más fáciles de manejar, mientras que las más pesadas pueden proporcionar más potencia y estabilidad.',
    'marcas': 'Algunas de las marcas de raquetas de tenis más famosas son Wilson, Babolat, Head, Prince y Yonex.',
    'recomendación': 'Para jugadores principiantes, una raqueta ligera y con un marco más amplio puede ser ideal para mayor perdón. Jugadores intermedios y avanzados pueden preferir raquetas más pesadas y con menor tamaño de cabeza para mayor control.',
    'presupuesto': 'Para presupuestos bajos, las marcas como Wilson y Prince suelen ofrecer opciones económicas y de buena calidad. Para presupuestos más altos, Babolat y Head tienen modelos de gama alta con características avanzadas.',
    'diseño': 'Las raquetas están disponibles en una variedad de diseños, desde colores llamativos hasta opciones más sobrias. La elección del diseño depende de tu estilo personal.'
};

function sendMessage() {
    const userText = userInput.value;
    if (userText.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.textContent = 'Tú: ' + userText;
    chatlog.appendChild(userMessage);

    const botResponse = getBotResponse(userText.toLowerCase());
    const botMessage = document.createElement('div');
    botMessage.textContent = 'Bot: ' + botResponse;
    chatlog.appendChild(botMessage);

    userInput.value = '';
    chatlog.scrollTop = chatlog.scrollHeight; // Scroll to bottom
}

function getBotResponse(userText) {
    for (const key in responses) {
        if (userText.includes(key)) {
            return responses[key];
        }
    }
    return 'Lo siento, no entiendo tu pregunta. Por favor, pregunta sobre el peso de las raquetas, marcas famosas, recomendaciones para jugadores, presupuesto o diseño.';
}
