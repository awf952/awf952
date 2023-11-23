function hitung() {
  // Mendapatkan nilai dari input
  var angka1 = parseFloat(document.getElementById('angka1').value);
  var angka2 = parseFloat(document.getElementById('angka2').value);

  // Mendapatkan operator yang dipilih
  var operator = document.getElementById('operator').value;

  // Melakukan perhitungan
  var hasil;

  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      hasil = angka1 / angka2;
      break;
    default:
      hasil = 'Operasi tidak valid';
      break;
  }

  // Menampilkan hasil
  document.getElementById('hasil').textContent = hasil;
}