const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");
boton.addEventListener("click", () => {
    mensaje.innerHTML = `
        <h2>❤️ Te deseo el mejor cumpleaños de todos lleno de alegrria ❤️</h2>
        <h3>🎂 Que Dios te bendiga siempre y te proteja 🎂</h3>
        <h2>🎉 Eres la mujer que amo y siempre te deseo lo mejor del mundo ❤️</h2>
        <h1>❤️ ¡Feliz Cumpleaños! Mi Amor ❤️</h1>
    `;
    
    document.body.style.background = "linear-gradient(135, #ff758c, #ff7eb3)";
    for(let i = 0; i < 50; i ++) {
        let corazon = document.createElement("div");
        corazon.innerHTML = "❤️";
        corazon.style.position = "absolute";
        corazon.style.left = Math.random() * 100 + "%";
        corazon.style.top = Math.random() * 100 + "%";
        corazon.style.fontSize = (20 + Math.random() * 30) + "px";
        document.body.appendChild(corazon);
    }
    alert("🎉 Feliz Cumpleaños Mi Amor ❤️ TE AMO ❤️");
});