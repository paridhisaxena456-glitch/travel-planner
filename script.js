function send() {
    let input = document.getElementById("input");
    let message = input.value;

    if (message == "") return;

    document.getElementById("messages").innerHTML +=
        `<p>You: ${message}</p>`;

    let reply = "Nice choice! I can help you plan your trip.please tell me the place you want to visit."; 

    if (message.toLowerCase().includes("goa"))
        reply = "Goa: beaches, seafood and Portuguese architecture! ";

    else if (message.toLowerCase().includes("manali"))
        reply = "Manali: snow-capped mountains, adventure sports and local handicrafts!";

    else if (message.toLowerCase().includes("nainital"))
        reply = "Nainital: lakes, forests and hill stations!";

    document.getElementById("messages").innerHTML +=
        `<p class="bot">Bot: ${reply}</p>`;

    input.value = "";
}