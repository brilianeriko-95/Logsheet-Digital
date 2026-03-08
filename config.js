// ============================================================================
// ⭐⭐⭐ KONFIGURASI WAJIB: GANTI URL DI BAWAH INI ⭐⭐⭐
// ============================================================================
// 
// CARA SETUP:
// 1. Deploy Google Apps Script (GAS_CODE.js) sebagai Web App
// 2. Copy URL Web App (contoh: https://script.google.com/macros/s/AKfycby.../exec)
// 3. Ganti YOUR_GAS_URL_HERE di bawah dengan URL tersebut
// 4. Simpan file (Commit changes)
//
// ============================================================================

const CONFIG = {
    // 🔧 EDIT INI: URL Web App Google Apps Script Anda
    // Contoh: 'https://script.google.com/macros/s/AKfycby1234567890abcdefghijklmnopqrstuvwxyz/exec'
    GAS_URL: 'https://script.google.com/macros/s/AKfycbyN6oHFIcrzoNAacKSp9eL-0clmZemmDACosnfqfzNVTblQE74MzXk49raMPPDj7ih3Kw/exec',
    
    // Konfigurasi sync (jangan edit)
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000,      // 2 detik
    SYNC_INTERVAL: 30000    // 30 detik
};

// ============================================================================
// VALIDASI OTOMATIS - Jangan edit di bawah ini
// ============================================================================

(function validateConfig() {
    const url = CONFIG.GAS_URL;
    
    // Cek apakah masih placeholder
    if (url.includes('YOUR_GAS_URL_HERE') || url.includes('PLACEHOLDER')) {
        console.error('❌ ERROR: GAS_URL belum di-setting!');
        console.log('📖 Lihat petunjuk di atas (baris 5-10)');
        
        // Tampilkan alert di UI jika ada
        if (typeof document !== 'undefined') {
            document.addEventListener('DOMContentLoaded', function() {
                const alertBox = document.getElementById('setupAlert');
                if (alertBox) {
                    alertBox.style.display = 'block';
                    alertBox.innerHTML = `
                        <h3>⚠️ Setup Required</h3>
                        <p>Edit file <code>config.js</code> dan ganti <code>YOUR_GAS_URL_HERE</code></p>
                        <p><a href="https://github.com/${location.hostname.split('.')[0]}/${location.pathname.split('/')[1]}/edit/main/config.js" 
                              style="color: #3b82f6; text-decoration: underline;">
                           Edit di GitHub →
                        </a></p>
                    `;
                }
            });
        }
        
        window.CONFIG_ERROR = 'GAS_URL_NOT_SET';
        return;
    }
    
    // Cek format URL
    if (!url.startsWith('https://script.google.com/macros/s/')) {
        console.error('❌ ERROR: Format GAS_URL tidak valid!');
        console.log('URL harus dimulai dengan: https://script.google.com/macros/s/');
        window.CONFIG_ERROR = 'INVALID_GAS_URL_FORMAT';
        return;
    }
    
    // Cek apakah berakhiran /exec
    if (!url.endsWith('/exec')) {
        console.warn('⚠️ WARNING: URL seharusnya berakhiran /exec');
    }
    
    // Sukses
    console.log('✅ Config loaded successfully');
    console.log('🌐 GAS_URL:', url.substring(0, 50) + '...');
    window.CONFIG_OK = true;
    
})();

// Export untuk module system (jika diperlukan)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
