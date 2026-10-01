// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Filter Courses
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-indigo-600', 'text-white');
            b.classList.add('bg-slate-800', 'text-slate-300');
        });

        btn.classList.remove('bg-slate-800', 'text-slate-300');
        btn.classList.add('bg-indigo-600', 'text-white');

        const category = btn.getAttribute('data-category');

        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// FAQ Accordion Toggle
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('i');

        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

// Modal Logic
function openModal(courseTitle) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modal && modalTitle) {
        modalTitle.innerText = courseTitle;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Form Submit Handling
const enrollForm = document.getElementById('enrollForm');
if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const course = document.getElementById('courseSelect').value;

        alert(`Thank you, ${name}! Your inquiry for ${course} has been submitted successfully.`);
        enrollForm.reset();
    });
}