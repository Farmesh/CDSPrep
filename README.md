# TargetCDS - Interactive CDS Preparation Platform

A fully-featured, multi-page website for Combined Defence Services (CDS) exam preparation using vanilla HTML, CSS (Tailwind), and JavaScript.

## Project Overview

TargetCDS is a comprehensive platform designed to help defence aspirants prepare systematically for the UPSC Combined Defence Services (CDS) examination. The platform covers three pillars of CDS preparation:

- **IMA/AFA/INA Exam**: English, General Knowledge, Elementary Mathematics (300 marks)
- **OTA Exam**: English, General Knowledge (200 marks)

### Key Features

✅ **Interactive Syllabus Tracker** - Track your progress across all subjects with localStorage persistence  
✅ **Smart Mock Test Engine** - Practice Mode with instant feedback + Exam Mode with 120-minute timer  
✅ **UPSC Marking Scheme** - Exact marking: +1 correct, -0.33 incorrect  
✅ **Eligibility Calculator** - Check academy eligibility based on age & marital status  
✅ **Past Year Questions Archive** - Filterable database of CDS PYQs (2024-2026)  
✅ **Quick Cheat Sheets** - Formula cards for Math, Polity, Geography, English  
✅ **Real CDS Data** - 15 questions per subject, authentic exam-level content  
✅ **Countdown Timer** - Next CDS exam date tracker  
✅ **Responsive Design** - Fully optimized for mobile, tablet, and desktop  
✅ **Local Storage** - No backend needed - all progress saved locally  

---

## Project Structure

```
CDSPREP/
├── index.html                    # Home Page with Countdown & Academy Selector
├── pages/
│   ├── syllabus.html            # Interactive Syllabus Tracker
│   ├── quiz.html                 # Mock Test Engine (Practice & Exam modes)
│   ├── eligibility.html          # Age & Eligibility Calculator
│   └── resources.html            # PYQs & Study Materials
├── assets/
│   ├── css/
│   │   └── styles.css            # Shared Stylesheet
│   └── js/
│       ├── shared.js             # Utility functions & shared logic
│       └── questions.js          # Quiz database & syllabus data
├── README.md                     # This file
└── .gitignore
```

---

## Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server needed
- No installation required

### Running Locally

1. **Extract the files** to a folder on your computer
2. **Open `index.html`** in your web browser
3. Navigate through the platform using the navigation bar

**Note:** If opening via `file://` protocol, some browsers may have CORS restrictions. For best experience:
- Use a local web server: `python -m http.server 8000` (Python 3)
- Or use VS Code's Live Server extension

---

## Page Breakdown

### 1. **Home Page** (`index.html`)

**Features:**
- Countdown timer to next CDS exam (Sept 6, 2026)
- Rotating motivational quotes from military leaders
- Academy selector (IMA, INA, AFA, OTA) with cutoff trends
- Platform features overview
- Call-to-action buttons

**Real Data Included:**
- 2023-2025 estimated cutoff scores
- Academy locations and eligibility criteria
- Exam pattern details for each wing

---

### 2. **Syllabus Tracker** (`pages/syllabus.html`)

**Features:**
- Comprehensive CDS syllabus organized by subject (GK, English, Math)
- Interactive accordion accordions for each topic section
- Checkbox-based topic completion tracking
- Real-time progress calculation (both section-wise and overall)
- Auto-save to localStorage (progress persists across sessions)
- Statistics dashboard (Total, Completed, Remaining topics)
- Export progress as JSON
- Reset progress option

**Syllabus Coverage:**
- **GK:** Polity (14 topics), Geography (11), History (12), Science (14), Economy (15)
- **English:** Grammar (12 topics), Vocabulary (10), Comprehension (10)
- **Math:** Arithmetic (11 topics), Algebra (10), Trigonometry (8), Geometry (9), Statistics (8)

---

### 3. **Mock Test Engine** (`pages/quiz.html`)

**Features:**
- **Subject Selection:** GK, English, or Math (15 questions each)
- **Two Modes:**
  - **Practice Mode:** Get instant feedback and explanations after each question
  - **Exam Mode:** 120-minute timed test with running timer, strict marking
- **UPSC Marking Scheme:** Exactly implements +1/-0.33 marks
- **Question Navigation:** Next, Skip buttons with answer persistence
- **Results Dashboard:**
  - Animated score circle with performance indicator
  - Detailed statistics (Correct, Wrong, Skipped)
  - Performance analysis (Accuracy %, Score, Percentile, Status)
  - Save results to quiz history

**Question Quality:**
- 45+ authentic CDS-level questions
- Real past-year style content
- Detailed explanations for all answers
- Covers all major exam topics

---

### 4. **Eligibility Calculator** (`pages/eligibility.html`)

**Features:**
- Date of birth input with validation
- Gender and marital status selection
- Real UPSC age limit criteria for CDS II 2026
- Visual eligibility cards for all 4 academies
- Color-coded status (Green = Eligible, Red = Not Eligible)
- Detailed reasons for eligibility/ineligibility
- Important eligibility rules reference box

**Eligibility Logic:**
- **IMA/INA:** Male, Unmarried, DOB: 2 Jul 2003 - 1 Jul 2008 (19-24 years)
- **AFA:** Male/Female, Unmarried, DOB: 2 Jul 2003 - 1 Jul 2007 (20-24 years)
- **OTA:** Male/Female, Married/Unmarried, DOB: 2 Jul 2002 - 1 Jul 2008 (19-25 years)

---

### 5. **Resources/PYQ Hub** (`pages/resources.html`)

**Features:**
- Filterable database of past year question papers
- Filter by subject (GK, English, Math) and year (2024, 2025, 2026)
- Resource metadata (Title, Type, Year, Size)
- 4 Quick Reference Cheat Sheets:
  - Math: Trigonometry & Mensuration formulas
  - GK: Indian Polity & Constitutional Articles
  - English: Idioms, Phrasal Verbs, Confusing Words
  - Geography: World & Indian Geography Quick Reference
- Latest updates section with exam news

**Resources Database:**
- 15 premium study materials
- CDS I & II 2024-2025 question papers
- Solutions and explanations
- Cheat sheets for last-minute revision

---

## Technical Details

### Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS (CDN) + Custom CSS
- **Icons:** Font Awesome 6.4.0
- **Data Storage:** Browser localStorage API
- **Responsive Design:** Mobile-first approach

### Key Libraries

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

### JavaScript Modules

#### `assets/js/shared.js`
Utility functions available across all pages:
- `loadNavbar()` - Dynamically inject navigation
- `loadFooter()` - Dynamically inject footer
- `startCountdown(targetDate, callbacks)` - Countdown timer
- `Storage` object - localStorage wrapper methods
- `showNotification(msg, type, duration)` - Toast notifications
- `calculateAge(dob)` - Age calculation

#### `assets/js/questions.js`
Data configurations:
- `cdsConfig` - Exam dates, academy info, marking scheme
- `quizDatabase` - 45+ CDS-level questions with explanations
- `syllabusData` - Comprehensive CDS syllabus structure
- `resourcesDatabase` - 15 study materials with metadata

---

## Features Breakdown

### localStorage Implementation

All user data is stored locally in browser:

```javascript
// Syllabus progress
localStorage.getItem('cds_syllabus_state')

// Quiz history
localStorage.getItem('cds_quiz_history')

// Bookmarked topics
localStorage.getItem('cds_bookmarks')
```

**Advantages:**
- No backend server needed
- Privacy (data never leaves user's device)
- Offline functionality
- Persistent across sessions

### Responsive Breakpoints

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

All pages are fully optimized for touch on mobile devices.

---

## Color Scheme

Military-themed professional palette:

```css
--defblue-900: #1e3a8a      /* Deep Navy - Primary */
--defblue-600: #2563eb      /* Medium Blue */
--defolive-600: #65a30d     /* Army Olive - Accent */
--slate-800: #1e293b        /* Dark Slate - Text */
```

---

## Features Implementation Guide

### How to Add New Questions

Edit `assets/js/questions.js`:

```javascript
{
    id: 16,
    q: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0,  // Index of correct option
    exp: "Explanation of the answer and why others are wrong..."
}
```

### How to Add New Resources

Edit `assets/js/questions.js`:

```javascript
{
    id: 16,
    title: "Resource Title",
    type: "pdf",  // or "cheatsheet"
    year: "2026",
    subject: "gk",  // or "eng", "math", "all"
    size: "2.5 MB",
    downloadLink: "#"
}
```

### How to Customize Eligibility Criteria

Edit the `calculateEligibility()` function in `pages/eligibility.html`:

```javascript
const ima_ina_upper = new Date('July 1, 2008');
const ima_ina_lower = new Date('July 2, 2003');
// Update these dates based on latest UPSC notification
```

---

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Limitations & Future Enhancements

### Current Limitations
- No video tutorials
- No backend analytics
- Question bank limited to 45 questions
- No user authentication
- No social features

### Planned Enhancements
- [ ] Backend integration for cloud sync
- [ ] AI-powered weak area analysis
- [ ] Video explanations for complex topics
- [ ] Live doubt-clearing sessions
- [ ] Discussion forum for aspirants
- [ ] Mobile app version
- [ ] Spaced repetition algorithm
- [ ] Integration with study resources from UPSC
- [ ] Mock test leaderboard
- [ ] Push notifications for exam updates

---

## Tips for Maximum Benefit

1. **Start with Syllabus:** Use the Syllabus Tracker to organize your study plan
2. **Check Eligibility Early:** Know which academies you're eligible for
3. **Practice Regularly:** Take mock tests in both modes for realistic practice
4. **Analyze Performance:** Review quiz results to identify weak areas
5. **Use Cheat Sheets:** Quick reference before exams
6. **Download PYQs:** Practice previous year questions for pattern recognition
7. **Track Progress:** Monitor syllabus completion to stay motivated
8. **Review Explanations:** Read answer explanations to understand concepts deeply

---

## Support & Updates

This platform is maintained as a free resource for CDS aspirants. For updates, bug reports, or feature requests, please refer to the latest UPSC CDS notifications for accurate dates and eligibility criteria.

**Last Updated:** June 2026  
**Version:** 1.0

---

## License

This project is open-source and available for educational purposes. Feel free to modify and redistribute for non-commercial use.

---

## Disclaimer

This platform is an educational tool created based on publicly available UPSC CDS information. Always verify eligibility criteria, exam dates, and syllabus from the official UPSC website (www.upsc.gov.in).

---

**All the best for your CDS journey! 🎖️**

---

## Quick Reference

### Keyboard Shortcuts (Coming Soon)
- `Ctrl/Cmd + S` - Save progress
- `Ctrl/Cmd + Q` - Start quiz
- `Ctrl/Cmd + P` - Print syllabus

### Exam Dates
- **CDS I 2026:** September 6, 2026
- **Application Opens:** July 15, 2026
- **Last Date to Apply:** August 15, 2026

### Contact Information
For feedback or issues, visit www.upsc.gov.in for official CDS updates.

---

**Happy Studying! 📚 Jai Hind! 🇮🇳**
