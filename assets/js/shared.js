// ================================================
// TARGETCDS - SHARED UTILITIES & CONFIGURATION
// ================================================

// Exam Information & Real CDS Data
const cdsConfig = {
    nextExam: {
        name: "CDS II 2026",
        date: new Date('September 6, 2026 09:00:00'),
        registrationStart: "July 15, 2026",
        lastDateToApply: "August 15, 2026",
        admitCardDate: "August 25, 2026"
    },
    academies: {
        ima: {
            name: "Indian Military Academy",
            location: "Dehradun",
            papers: "English, GK, Mathematics",
            totalMarks: 300,
            duration: "120 minutes per paper",
            estimatedCutoff: "135-142 out of 300",
            ageLimit: "19 to 24 years",
            eligibility: "Unmarried Male only",
            positionCount: 40
        },
        ina: {
            name: "Indian Naval Academy",
            location: "Ezhimala, Kerala",
            papers: "English, GK, Mathematics",
            totalMarks: 300,
            duration: "120 minutes per paper",
            estimatedCutoff: "128-134 out of 300",
            ageLimit: "19 to 24 years",
            eligibility: "Unmarried Male only",
            positionCount: 25
        },
        afa: {
            name: "Air Force Academy",
            location: "Hyderabad",
            papers: "English, GK, Mathematics",
            totalMarks: 300,
            duration: "120 minutes per paper",
            estimatedCutoff: "148-156 out of 300",
            ageLimit: "20 to 24 years",
            eligibility: "Male & Female (Unmarried)",
            positionCount: 32
        },
        ota: {
            name: "Officers Training Academy",
            location: "Chennai",
            papers: "English, General Knowledge",
            totalMarks: 200,
            duration: "120 minutes per paper",
            estimatedCutoff: "98-105 out of 200",
            ageLimit: "19 to 25 years",
            eligibility: "Male & Female (Married/Unmarried)",
            positionCount: 70
        }
    },
    markingScheme: {
        correct: 1,
        incorrect: -0.33,
        notAttempted: 0
    }
};

// ================================================
// DOM UTILITIES
// ================================================

function loadNavbar() {
    // Detect if we're in the pages/ subdirectory
    const isInPages = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
    const basePath = isInPages ? '../' : './';
    
    const navHTML = `
        <nav class="bg-defblue-900 text-white shadow-lg sticky top-0 z-50" style="background-color: var(--defblue-900);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <i class="fa-solid fa-shield-halved text-2xl text-yellow-400 mr-2"></i>
                        <a href="${basePath}index.html" class="font-bold text-xl tracking-wider hover:text-yellow-300 transition">TargetCDS</a>
                    </div>
                    
                    <!-- Desktop Nav -->
                    <div class="hidden md:flex items-center space-x-1" id="desktop-nav">
                        <a href="${basePath}index.html" class="nav-link px-4 py-2 rounded-md font-semibold text-blue-100 hover:bg-defblue-800 hover:text-white transition">Home</a>
                        <a href="${basePath}pages/syllabus.html" class="nav-link px-4 py-2 rounded-md font-semibold text-blue-100 hover:bg-defblue-800 hover:text-white transition">Syllabus</a>
                        <a href="${basePath}development.html" class="nav-link px-4 py-2 rounded-md font-semibold text-blue-100 hover:bg-defblue-800 hover:text-white transition">Mock Test</a>
                        <a href="${basePath}pages/eligibility.html" class="nav-link px-4 py-2 rounded-md font-semibold text-blue-100 hover:bg-defblue-800 hover:text-white transition">Eligibility</a>
                        <a href="${basePath}pages/resources.html" class="nav-link px-4 py-2 rounded-md font-semibold text-blue-100 hover:bg-defblue-800 hover:text-white transition">Resources</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="flex items-center md:hidden">
                        <button id="mobile-menu-btn" class="text-gray-200 hover:text-white focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Nav Dropdown -->
            <div id="mobile-menu" class="hidden md:hidden bg-defblue-800 pb-3 px-2" style="background-color: var(--defblue-800);">
                <a href="${basePath}index.html" class="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-defblue-700 mt-1" style="background-color: var(--defblue-900);">Home</a>
                <a href="${basePath}pages/syllabus.html" class="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-defblue-700 mt-1">Syllabus</a>
                <a href="${basePath}development.html" class="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-defblue-700 mt-1">Mock Test</a>
                <a href="${basePath}pages/eligibility.html" class="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-defblue-700 mt-1">Eligibility</a>
                <a href="${basePath}pages/resources.html" class="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-defblue-700 mt-1">Resources</a>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    setupMobileMenu();
    highlightCurrentPage();
}

function loadFooter() {
    // Prevent duplicate footers
    if (document.querySelector('footer')) {
        return;
    }
    
    const footerHTML = `
        <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto" style="background-color: var(--slate-900);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="mb-4">
                    <i class="fa-solid fa-shield-halved text-2xl text-slate-600 mb-2"></i>
                    <h3 class="text-lg font-bold text-slate-200 tracking-wider">TargetCDS</h3>
                </div>
                <p class="text-sm">An Interactive Platform for Defence Aspirants By Farmesh Thakur</p>
                <p class="text-xs mt-2 opacity-60">&copy; 2026 CDS Preparation. All rights reserved.</p>
                <div class="mt-4 flex justify-center space-x-4">
                    <a href="#" class="text-slate-400 hover:text-white transition"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-slate-400 hover:text-white transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-slate-400 hover:text-white transition"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    `;
    document.body.appendChild(document.createElement('footer'));
    document.body.lastChild.outerHTML = footerHTML;
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when link is clicked
        mobileMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

function highlightCurrentPage() {
    let currentPage = window.location.pathname.split('/').pop();
    
    // Fallback for file:// URLs or when pathname is empty
    if (!currentPage || currentPage === '') {
        currentPage = window.location.href.split('/').pop();
        if (!currentPage) {
            currentPage = 'index.html';
        }
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href ? href.split('/').pop() : '';
        
        // Match current page with link href
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.backgroundColor = 'var(--defblue-800)';
            link.style.color = 'white';
        }
    });
}

// ================================================
// STORAGE UTILITIES
// ================================================

const Storage = {
    // Syllabus progress
    getSyllabusProgress: () => JSON.parse(localStorage.getItem('cds_syllabus_state')) || {},
    setSyllabusProgress: (data) => localStorage.setItem('cds_syllabus_state', JSON.stringify(data)),
    
    // Quiz history
    getQuizHistory: () => JSON.parse(localStorage.getItem('cds_quiz_history')) || [],
    addQuizResult: (result) => {
        const history = Storage.getQuizHistory();
        history.push({ ...result, timestamp: new Date().toISOString() });
        localStorage.setItem('cds_quiz_history', JSON.stringify(history));
    },
    
    // Bookmarked topics
    getBookmarks: () => JSON.parse(localStorage.getItem('cds_bookmarks')) || [],
    toggleBookmark: (topic) => {
        const bookmarks = Storage.getBookmarks();
        const index = bookmarks.indexOf(topic);
        if (index > -1) bookmarks.splice(index, 1);
        else bookmarks.push(topic);
        localStorage.setItem('cds_bookmarks', JSON.stringify(bookmarks));
    }
};

// ================================================
// TIME UTILITIES
// ================================================

function startCountdown(targetDate, callbacks) {
    const { onTick, onComplete } = callbacks;
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(interval);
            if (onComplete) onComplete();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (onTick) onTick({ days, hours, minutes, seconds });
    }, 1000);
    
    return interval;
}

// ================================================
// VALIDATION UTILITIES
// ================================================

function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ================================================
// NOTIFICATION UTILITIES
// ================================================

function showNotification(message, type = 'info', duration = 3000) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInUp 0.3s ease;
    `;
    notif.innerText = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => notif.remove(), 300);
    }, duration);
}

// ================================================
// INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    
    // Wrap page content in page-wrapper for flex layout
    const main = document.querySelector('main');
    if (main) {
        const wrapper = document.createElement('div');
        wrapper.className = 'page-wrapper';
        main.parentNode.insertBefore(wrapper, main);
        wrapper.appendChild(main);
        wrapper.appendChild(document.querySelector('footer'));
    }
});
