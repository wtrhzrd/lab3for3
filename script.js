function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function togglePanel() {
    const panel = document.getElementById('sidePanel');
    panel.classList.toggle('open');
}

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name.length < 2) {
        alert("Имя должно содержать минимум 2 символа.");
        return;
    }
    if(!email.includes('@')) {
        alert("Введите корректный email.");
        return;
    }
    alert("Спасибо, " + name + "! Ваше сообщение отправлено.");
    document.getElementById('contactForm').reset();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
