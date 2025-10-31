# Merchant Tracker Frontend (React + Vite)

Frontend web app ini menampilkan data transaksi dari sistem Payment Backend berbasis Golang.  
Aplikasi ini dibangun dengan **React + Vite + TailwindCSS + React Query** untuk performa cepat dan tampilan modern.

---

## Fitur

- Menampilkan semua transaksi merchant  
- Filter berdasarkan `referenceNo`  
- Tabel dinamis dengan styling profesional  
- Loading & error state yang informatif  
- Format nominal otomatis (`Rp 10.000,00`)  
- Kompatibel langsung dengan backend Golang  

---

## Prasyarat

- npm atau yarn
- Backend Go sudah berjalan di `http://localhost:8080`

## Cara Menjalankan

### Clone repo
```bash
git clone https://github.com/Try-Payment-Gateway/vite-website-frontend.git
cd merchant-tracker-frontend
```

### Install dependency
```bash
npm install
```

### Tambahkan file .env di folder root
```bash
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

### Jalankan server dev
```bash
npm run dev
```

Website dapat diakses melalui browser di http://localhost:5173