// Fungsi untuk menampilkan kalkulator
function showCalculator() {
  var num1 = parseFloat(prompt("Masukkan angka pertama:"));
  var num2 = parseFloat(prompt("Masukkan angka kedua:"));
  var operator = prompt("Masukkan operator (+, -, *, /):");
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Operator tidak valid";
  }

  document.getElementById("content").innerHTML = "Hasil: " + result;
}

// Fungsi untuk menampilkan luas trapesium
function showTrapesiumArea() {
  var base1 = parseFloat(prompt("Masukkan panjang sisi alas 1:"));
  var base2 = parseFloat(prompt("Masukkan panjang sisi alas 2:"));
  var height = parseFloat(prompt("Masukkan tinggi trapesium:"));
  var area = (base1 + base2) * height / 2;

  document.getElementById("content").innerHTML = "Luas Trapesium: " + area;
}

// Fungsi untuk menampilkan deret bilangan
function showNumberSeries() {
  var choice = prompt("Pilih jenis deret (genap, ganjil, kelipatan 3):");
  var series = "";

  switch (choice) {
    case "genap":
      for (var i = 2; i <= 20; i += 2) {
        series += i + " ";
      }
      break;
    case "ganjil":
      for (var i = 1; i <= 20; i += 2) {
        series += i + " ";
      }
      break;
    case "kelipatan 3":
      for (var i = 3; i <= 30; i += 3) {
        series += i + " ";
      }
      break;
    default:
      series = "Pilihan tidak valid";
  }

  document.getElementById("content").innerHTML = "Deret: " + series;
}

// Menambahkan event listener untuk setiap pilihan menu
document.addEventListener("DOMContentLoaded", function() {
  var calculatorBtn = document.getElementById("calculatorBtn");
  var trapesiumBtn = document.getElementById("trapesiumBtn");
  var seriesBtn = document.getElementById("seriesBtn");

  calculatorBtn.addEventListener("click", showCalculator);
  trapesiumBtn.addEventListener("click", showTrapesiumArea);
  seriesBtn.addEventListener("click", showNumberSeries);
});