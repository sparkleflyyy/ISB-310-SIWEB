function shout() {
    alert("Hai, Selamat datang di Sistem sederhana");
}

function showHome() {
    document.getElementById('menu-makanan').style.display = 'none';
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('garis-hidup-section').style.display = 'none';
    document.getElementById('shout-section').style.display = 'flex';
}

function showMenuMakanan() {
    alert("Input jumlah pesanan agar di hitung otomatis oleh sistem");
    document.getElementById('menu-makanan').style.display = 'block';
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('garis-hidup-section').style.display = 'none';
    document.getElementById('shout-section').style.display = 'none';
}

function showCalculator() {
    document.getElementById('menu-makanan').style.display = 'none';
    document.getElementById('calculator-section').style.display = 'block';
    document.getElementById('garis-hidup-section').style.display = 'none';
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

// === GARIS HIDUP FUNCTIONS ===

function showGarisHidup() {
    document.getElementById('menu-makanan').style.display = 'none';
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('shout-section').style.display = 'none';
    document.getElementById('garis-hidup-section').style.display = 'block';
}

// Fungsi untuk menjumlahkan digit sampai menjadi satu angka
function jumlahkanDigit(num) {
    let result = num;
    while (result > 9) {
        let sum = 0;
        let temp = result;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        result = sum;
    }
    return result;
}

// Fungsi untuk mendapatkan deskripsi berdasarkan garis hidup
function getDeskripsiGarisHidup(angka) {
    const deskripsi = {
        1: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 1",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 1, ekspresi, sosialitas, dan kreativitas selalu pedoman yang harus ditempuh dalam hidupnya. Entertainer sejati dulu, orang-orang yang terbuka dan optimistis termasuk di dalamnya. Orang-orang dengan garis hidup 1 yang telah menguasai buatannya adalah kredit yang lah istimewa, biasanya dalam verbal, tulisan, sifar, atau semacamnya. Misi yang harus dicapainya dalam hidup adalah keselarasan dalam berkreativitas. Sisi cerdik bagi orang-orang ini berjuang harmonis, kemolekan dan kesesuaian, setia mending kemampuan kreatif Anda dengan guna. Mengenal kemampuan Anda dalam ekspresi kreatif adalah tugas bagi setiap garis hidup ini. Karakternya menebar harapan pada yang bersahabbat, pembicaraan yang baik, sosial dan terbruka.`
        },
        2: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 2",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 2, kerjasama dan keseimbangan adalah kunci kehidupan. Anda adalah mediator alami yang mampu melihat semua sisi dari suatu situasi. Sensitivitas dan intuisi adalah kekuatan utama Anda. Orang dengan garis hidup 2 cenderung menjadi pendengar yang baik dan memiliki kemampuan untuk memahami perasaan orang lain. Misi hidup Anda adalah membawa harmoni dan kedamaian dalam hubungan. Karakteristik utama meliputi kesabaran, diplomasi, dan kemampuan bekerja sama dengan baik.`
        },
        3: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 3",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialitas, dan kreativitas selalu pedoman yang harus ditempuh dalam hidupnya. Entertainer sejati dulu, orang-orang yang terbuka dan optimistis termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah menguasai buatannya adalah kredit yang lah istimewa, biasanya dalam verbal, tulisan, sifar, atau semacamnya. Misi yang harus dicapainya dalam hidup adalah keselarasan dalam berkreativitas. Sisi cerdik bagi orang-orang ini berjuang harmonis, kemolekan dan kesesuaian, setia mendefung kemampuan kreatif Anda dengan guna. Mengenal kemampuan Anda dalam ekspresi kreatif adalah tugas bagi setiap garis hidup ini. Karakternya menebar harapan pada yang bersahabat, pembicaraan yang baik, sosial dan terbuka.

Pemahaman yang penting disadari oleh bukan hasrat seseorang yang menyembuhkan untuk dipahami, tapi kedekatan yang penting bagi, kepercayaan yang mampu untuk menghimpunanya. Mereka adalah individu-individu yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mempunyai bagaimana membuat orang lain merasa diterima. Pasanan langkah seorang akan ada, karena mereka bisa tetap terapa merujuk permasalahan yang memenangkan apakah, hal sekedunga. Kebiasaan atau pandangan satu sudut pandai penuhnya tetap sehingga hampir tak ada orang atau pemananya yang terhindar dileh birokras. Anda bisa menggabungkan banyak kategori dalam hidup dengan cukup efektif dan tanpa kemauan komdunikan apapun serta yang tampaknya cukup pelita akan perasaan dan emosi orang lain. Hidup dijagalah sepertinya, sehingga tanpa kesewenangan atau atau hal rusak.`
        },
        4: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 4",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 4, keteraturan, stabilitas, dan kerja keras adalah fondasi kehidupan. Anda adalah pembangun yang handal, mampu mengubah ide menjadi kenyataan melalui usaha yang konsisten. Orang dengan garis hidup 4 memiliki dedikasi tinggi terhadap pekerjaan dan tanggung jawab. Misi hidup Anda adalah membangun fondasi yang kokoh untuk diri sendiri dan orang lain. Karakteristik utama meliputi praktis, dapat diandalkan, dan memiliki integritas tinggi.`
        },
        5: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 5",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 5, kebebasan dan petualangan adalah nafas kehidupan. Anda adalah jiwa yang dinamis, selalu mencari pengalaman baru dan perubahan. Orang dengan garis hidup 5 memiliki rasa ingin tahu yang tinggi dan kemampuan adaptasi yang luar biasa. Misi hidup Anda adalah mengeksplorasi dunia dan berbagi pengalaman dengan orang lain. Karakteristik utama meliputi fleksibel, berani, dan penuh semangat.`
        },
        6: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 6",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 6, tanggung jawab, cinta, dan keluarga adalah pusat kehidupan. Anda adalah pengasuh alami yang selalu siap membantu dan melindungi orang-orang terdekat. Orang dengan garis hidup 6 memiliki rasa keadilan yang kuat dan dedikasi terhadap komunitas. Misi hidup Anda adalah membawa keharmonisan dan keindahan dalam lingkungan sekitar. Karakteristik utama meliputi penuh kasih, bertanggung jawab, dan artistik.`
        },
        7: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 7",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 7, pengetahuan, spiritualitas, dan introspeksi adalah jalan kehidupan. Anda adalah pemikir mendalam yang selalu mencari kebenaran dan makna. Orang dengan garis hidup 7 memiliki intuisi tajam dan kemampuan analitis yang kuat. Misi hidup Anda adalah mencari kebijaksanaan dan berbagi pencerahan. Karakteristik utama meliputi analitis, spiritual, dan mandiri.`
        },
        8: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 8",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 8, kekuasaan, kesuksesan, dan kelimpahan material adalah fokus kehidupan. Anda adalah pemimpin alami dengan kemampuan manajemen yang luar biasa. Orang dengan garis hidup 8 memiliki visi besar dan determinasi untuk mencapainya. Misi hidup Anda adalah mencapai kesuksesan material sambil tetap menjaga keseimbangan spiritual. Karakteristik utama meliputi ambisius, praktis, dan memiliki kemampuan eksekutif.`
        },
        9: {
            judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 9",
            isi: `Bagi mereka yang jumlah angka hari lahirnya 9, kemanusiaan, kebijaksanaan, dan pengabdian adalah tujuan kehidupan. Anda adalah jiwa tua yang memiliki pemahaman mendalam tentang sifat manusia. Orang dengan garis hidup 9 memiliki kasih sayang universal dan keinginan untuk membuat dunia menjadi tempat yang lebih baik. Misi hidup Anda adalah melayani kemanusiaan dengan kebijaksanaan dan cinta tanpa syarat. Karakteristik utama meliputi altruistis, kreatif, dan memiliki visi global.`
        }
    };
    
    return deskripsi[angka] || { judul: "", isi: "" };
}

function hitungGarisHidup() {
    const tanggal = parseInt(document.getElementById('ghTanggal').value);
    const bulan = parseInt(document.getElementById('ghBulan').value);
    const tahun = parseInt(document.getElementById('ghTahun').value);
    
    // Tampilkan tanggal, bulan, tahun di output
    document.getElementById('ghOutTanggal').value = tanggal;
    document.getElementById('ghOutBulan').value = bulan;
    document.getElementById('ghOutTahun').value = tahun;
    
    // Hitung Hasil 1: jumlah semua digit tanggal + bulan + tahun
    const gabungan = tanggal.toString() + bulan.toString() + tahun.toString();
    let hasil1 = 0;
    for (let i = 0; i < gabungan.length; i++) {
        hasil1 += parseInt(gabungan[i]);
    }
    document.getElementById('ghOutHasil1').value = hasil1;
    
    // Hitung Hasil 2: jika hasil1 > 9, jumlahkan lagi digitnya
    let hasil2 = hasil1;
    if (hasil1 > 9) {
        hasil2 = 0;
        let temp = hasil1.toString();
        for (let i = 0; i < temp.length; i++) {
            hasil2 += parseInt(temp[i]);
        }
    }
    document.getElementById('ghOutHasil2').value = hasil2;
    
    // Hitung Hasil Akhir: pastikan menjadi satu digit (1-9)
    const hasilAkhir = jumlahkanDigit(hasil2);
    document.getElementById('ghOutHasilAkhir').value = hasilAkhir;
    
    // Tampilkan deskripsi
    const deskripsi = getDeskripsiGarisHidup(hasilAkhir);
    const deskripsiHTML = `
        <h3>${deskripsi.judul}</h3>
        <p>${deskripsi.isi}</p>
    `;
    document.getElementById('ghHasilDeskripsi').innerHTML = deskripsiHTML;
}

function resetGarisHidup() {
    document.getElementById('ghTanggal').selectedIndex = 0;
    document.getElementById('ghBulan').selectedIndex = 0;
    document.getElementById('ghTahun').selectedIndex = 0;
    document.getElementById('ghOutTanggal').value = '';
    document.getElementById('ghOutBulan').value = '';
    document.getElementById('ghOutTahun').value = '';
    document.getElementById('ghOutHasil1').value = '';
    document.getElementById('ghOutHasil2').value = '';
    document.getElementById('ghOutHasilAkhir').value = '';
    document.getElementById('ghHasilDeskripsi').innerHTML = '';
}
