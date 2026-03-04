function shout() {
    alert("Hai, Selamat datang di Sistem sederhana");
}

function showHome() {
    document.getElementById('menu-makanan').style.display = 'none';
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('shout-section').style.display = 'flex';
}

function showMenuMakanan() {
    alert("Input jumlah pesanan agar di hitung otomatis oleh sistem");
    document.getElementById('menu-makanan').style.display = 'block';
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('shout-section').style.display = 'none';
}

function showCalculator() {
    document.getElementById('menu-makanan').style.display = 'none';
    document.getElementById('calculator-section').style.display = 'block';
    document.getElementById('shout-section').style.display = 'none';
}

function hitungCalc() {
    const input1 = document.getElementById('calcInput1').value;
    const input2 = document.getElementById('calcInput2').value;
    const operator = document.getElementById('calcOperator').value;

    // Validasi: jika input kosong atau 0
    if (input1 === '' || input2 === '' || input1 == 0 || input2 == 0) {
        alert("inputan pertama dan kedua harus lebih dari 0");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result = 0;

    switch (operator) {
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
    }

    document.getElementById('calcResult').value = result;
}

function resetCalc() {
    document.getElementById('calcInput1').value = '';
    document.getElementById('calcInput2').value = '';
    document.getElementById('calcResult').value = '';
}

function hitungTotal() {
    const harga1 = 12000;
    const harga2 = 10000;
    const harga3 = 15000;

    const pesan1 = parseInt(document.getElementById('pesan1').value) || 0;
    const pesan2 = parseInt(document.getElementById('pesan2').value) || 0;
    const pesan3 = parseInt(document.getElementById('pesan3').value) || 0;

    const jumlahTotal = (pesan1 * harga1) + (pesan2 * harga2) + (pesan3 * harga3);
    
    // Diskon 10% jika pembelian lebih dari 50.000
    let diskon = 0;
    if (jumlahTotal > 50000) {
        diskon = jumlahTotal * 0.1;
    }

    const jumlahBayar = jumlahTotal - diskon;

    document.getElementById('jumlahTotal').value = jumlahTotal;
    document.getElementById('diskon').value = diskon;
    document.getElementById('jumlahBayar').value = jumlahBayar;
}

function resetPesanan() {
    document.getElementById('pesan1').value = 0;
    document.getElementById('pesan2').value = 0;
    document.getElementById('pesan3').value = 0;
    document.getElementById('jumlahTotal').value = 0;
    document.getElementById('diskon').value = 0;
    document.getElementById('jumlahBayar').value = 0;
}
