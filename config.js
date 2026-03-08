// ⭐⭐⭐ GANTI URL DI BAWAH INI ⭐⭐⭐
// Dapatkan URL dari Google Apps Script → Deploy → Web App

const CONFIG = {
    // 🔧 EDIT INI: Ganti dengan URL Web App Anda
    GAS_URL: 'https://script.google.com/macros/s/AKfycbyYOUR_URL_HERE/exec',
    
    // Jangan edit di bawah ini
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000,
    SYNC_INTERVAL: 30000
};

// Validasi
if (CONFIG.GAS_URL.includes('YOUR_URL_HERE')) {
    console.error('⚠️ WARNING: GAS_URL belum di-setting!');
    console.log('Silakan edit file config.js dan ganti YOUR_URL_HERE dengan URL asli');
}
