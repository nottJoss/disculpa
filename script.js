(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/jossnt/Me-Perdonas?-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.No-button');
                let btnB = document.querySelector('.Sii-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.No-button')?.textContent = "pq no?:c";
                document.querySelector('.Sii-button')?.textContent = "👀??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.Sii-button')?.removeEventListener("click", handleSii);
                document.querySelector('.No-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Estás Segura?",
    "Muy Segura??",
    "Muy Muy Segura???",
    "De Verdad?:c",
    "Piénsalo:c",
    "Si dices que no voy a llorar 😿",
    "Voy a estar muy triste ",
    "😭😭😭",
    "por favor 😿",
    "DII QUE SII ,😭"
];

let messageIndex = 0;

function handleNoClick() {
    const NoButton = document.querySelector('.No-button');
    const SiiButton = document.querySelector('.Sii-button');
    NoButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(SiiButton).fontSize);
    SiiButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleSiiClick() {
    window.location.href = "Sii_page.html";
}