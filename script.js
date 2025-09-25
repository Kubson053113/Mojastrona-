// Funkcja do zmiany widocznoœci dodatkowej treœci w sekcji Historia
function zmienTresc() {
    const dodatkowaTresc = document.getElementById("dodatkowaTresc");
    const przycisk = event.target;

    if (dodatkowaTresc.style.display === "none") {
        dodatkowaTresc.style.display = "block";
        przycisk.textContent = "Ukryj treœæ";
    } else {
        dodatkowaTresc.style.display = "none";
        przycisk.textContent = "Zobacz wiêcej";
    }
}

// Funkcja do pokazania wyników
function pokazWynik() {
    const wynikElement = document.getElementById("wynik");
    wynikElement.textContent = "Max Verstappen wygra³ ostatni wyœcig!";
}
