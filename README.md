# Tugas 5 — Aplikasi CRUD Sederhana (ISB-310 SIWEB)

Deskripsi singkat:

Proyek ini adalah implementasi aplikasi CRUD (Create, Read, Update, Delete) sederhana menggunakan PHP dan MySQL. Aplikasi mengelola data pengguna dengan dua kolom utama: `username` dan `email`.

Fitur utama:
- Menambah pengguna (username, email)
- Menampilkan daftar pengguna
- Mengubah data pengguna
- Menghapus pengguna
- Validasi sederhana untuk email dan pengecekan duplikasi

Struktur berkas penting:
- `index.php` — Form pembuatan pengguna (Create)
- `read.php` — Menampilkan daftar pengguna (Read)
- `update.php` — Form dan proses update pengguna (Update)
- `delete.php` — Proses penghapusan pengguna (Delete)
- `config.php` — Koneksi database
- `style.css` — Styling sederhana
- `database.sql` — (opsional) skrip SQL untuk membuat/menyiapkan tabel

Catatan kolom database:
Kode pada proyek ini menggunakan kolom `username` (bukan `name`). Pastikan tabel `users` di database memiliki kolom `username`. Jika masih memakai `name`, silakan ubah skema atau jalankan migrasi berikut setelah melakukan backup:

```sql
-- mengganti nama kolom (backup dulu sebelum menjalankan)
ALTER TABLE users CHANGE name username VARCHAR(255);

-- contoh pembuatan tabel minimal jika belum ada
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

Cara menjalankan (lokal):
1. Pastikan Anda memiliki PHP dan MySQL (atau XAMPP/WAMP) terpasang.
2. Siapkan database (mis. `siweb`) dan import `database.sql` jika tersedia, atau buat tabel seperti contoh di atas.
3. Sesuaikan kredensial database di `config.php` jika diperlukan.
4. Jalankan server PHP built-in (opsional) dari folder proyek:

```powershell
php -S localhost:8000 -t .
```

5. Buka browser dan akses `http://localhost:8000/index.php` atau sesuaikan sesuai konfigurasi server lokal Anda.

Verifikasi singkat setelah perubahan field:
- Pastikan form pada `index.php` mengirim `username` dan bukan `name`.
- Pastikan `read.php` menampilkan `username`.
- Jika data lama menggunakan kolom `name`, pindahkan datanya ke `username` atau gunakan query ALTER TABLE yang saya sertakan.

Kesimpulan:
Proyek ini memperlihatkan implementasi CRUD dasar dengan PHP dan MySQL, fokus pada pengelolaan `username` dan `email`. Setelah perubahan di kode, pastikan struktur database cocok (kolom `username` ada) agar aplikasi berjalan seperti yang diharapkan. Selalu lakukan backup database sebelum memodifikasi skema.
