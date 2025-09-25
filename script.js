// Funkcja do zmiany widoczno�ci dodatkowej tre�ci w sekcji Historia
function zmienTresc() {
    const dodatkowaTresc = document.getElementById("dodatkowaTresc");
    const przycisk = event.target;

    if (dodatkowaTresc.style.display === "none") {
        dodatkowaTresc.style.display = "block";
        przycisk.textContent = "Ukryj tre��";
    } else {
        dodatkowaTresc.style.display = "none";
        przycisk.textContent = "Zobacz wi�cej";
    }
}

// Funkcja do pokazania wynik�w
function pokazWynik() {
    const wynikElement = document.getElementById("wynik");
    wynikElement.textContent = "Max Verstappen wygra� ostatni wy�cig!";
}
