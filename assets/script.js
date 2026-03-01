// Memastikan script berjalan setelah seluruh elemen DOM dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Memberikan pesan sapaan di console browser
    console.log("Selamat datang di website Pesona Pematangsiantar, karya Rizky Ardiansyah!");

    // Menambahkan fitur Smooth Scrolling pada link navigasi
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Mencegah perilaku default loncat langsung ke bagian tujuan
            e.preventDefault();

            // Mengambil elemen tujuan berdasarkan atribut href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Jika elemen ditemukan, lakukan gulir halus
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});