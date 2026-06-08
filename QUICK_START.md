# TargetCDS Project Structure & Quick Start

## 📁 Folder Organization

```
CDSPREP/
│
├── 📄 index.html                 # 🏠 Home Page
│   ├── Countdown Timer (Next CDS exam)
│   ├── Academy Selector (IMA, INA, AFA, OTA)
│   ├── Feature Overview
│   └── Call-to-Action
│
├── 📁 pages/                     # Multi-page site
│   ├── syllabus.html            # 📋 Syllabus Tracker
│   ├── quiz.html                 # 📝 Mock Tests
│   ├── eligibility.html          # ✅ Eligibility Calculator
│   └── resources.html            # 📚 PYQs & Materials
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── styles.css            # 🎨 Shared Styles
│   │
│   └── 📁 js/
│       ├── shared.js             # 🔧 Utilities
│       └── questions.js          # 📊 Data & Quiz DB
│
├── 📄 README.md                  # 📖 Full Documentation
└── 📄 QUICK_START.md            # ⚡ Quick Guide (this file)
```

## 🚀 Quick Start (2 Minutes)

### Method 1: Direct Browser (Easiest)
1. Extract the CDSPREP folder
2. Double-click `index.html`
3. Start studying! 🎓

### Method 2: Local Server (Recommended)

**Using Python:**
```bash
cd /path/to/CDSPREP
python -m http.server 8000
# Visit http://localhost:8000 in browser
```

**Using Node.js:**
```bash
cd /path/to/CDSPREP
npx http-server
# Visit http://localhost:8080 in browser
```

**Using VS Code Live Server:**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## 📖 Page Guide

| Page | URL | Purpose |
|------|-----|---------|
| Home | `index.html` | Dashboard, countdown, academy info |
| Syllabus | `pages/syllabus.html` | Track & organize study progress |
| Mock Tests | `pages/quiz.html` | Practice & exam mode tests |
| Eligibility | `pages/eligibility.html` | Check academy eligibility |
| Resources | `pages/resources.html` | Download PYQs & cheat sheets |

---

## 🎯 How to Use

### 1. **First Time Setup**
- Go to **Eligibility Calculator** → Check which academies you're eligible for
- Go to **Syllabus** → Start checking off topics as you study

### 2. **Study Progress**
- Regularly use **Syllabus Tracker** to mark completed topics
- Your progress is **automatically saved** (no login needed)
- Progress persists across browser sessions

### 3. **Practice Testing**
- Go to **Mock Tests**
- Choose subject and mode:
  - **Practice Mode:** Get answers after each question
  - **Exam Mode:** 120-minute timed real exam experience
- Review results and explanations

### 4. **Study Materials**
- Visit **Resources** page
- Filter by subject and year
- Download past year question papers & cheat sheets

---

## 💾 Data Storage

All your data is stored **locally in your browser**:

```
✅ No account needed
✅ No data sent to servers
✅ Privacy guaranteed
✅ Works offline
✅ Persists across sessions
```

**Clearing browser data will erase all progress!**

---

## 🔧 Customization Guide

### Change Next Exam Date
Edit in `index.html`:
```javascript
const targetDate = new Date('September 6, 2026 09:00:00');
```

### Add More Quiz Questions
Edit in `assets/js/questions.js`:
```javascript
{
    q: "Your question?",
    options: ["A", "B", "C", "D"],
    correct: 0,
    exp: "Explanation..."
}
```

### Change Color Scheme
Edit in `assets/css/styles.css`:
```css
:root {
    --defblue-900: #1e3a8a;  /* Change colors */
    --defolive-600: #65a30d;
}
```

---

## 📊 Real CDS Data Included

✅ **45 Quiz Questions** - Exam-level content  
✅ **5 Syllabus Sections** - 145+ topics covered  
✅ **Cutting-edge Cutoffs** - 2023-2025 trends  
✅ **15 Study Resources** - PYQs and cheat sheets  
✅ **UPSC Marking** - Accurate scoring system  

---

## 🎓 Study Tips

### Effective Preparation Strategy

**Week 1-2:** Organize & Understand
- [ ] Complete Syllabus setup
- [ ] Read topics in order
- [ ] Check conceptual understanding

**Week 3-4:** Practice
- [ ] Solve 5-10 quizzes
- [ ] Review explanations
- [ ] Note weak areas

**Week 5-6:** Revise & Excel
- [ ] Use Cheat Sheets
- [ ] Retake quizzes on weak areas
- [ ] Full-length mock tests (Exam Mode)

**Week 7+:** Final Preparation
- [ ] Daily mock tests
- [ ] Review PYQs
- [ ] Refine strategy

---

## ⚠️ Important Notes

### Browser Compatibility
| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

### Storage Limits
- Typical device: 5-10 MB available
- This platform uses: ~0.1 MB (very lightweight)
- ✅ Plenty of space for progress data

### Tips for Best Experience
- Use desktop/tablet for studying, mobile for quick review
- Bookmark the site in your browser
- Keep browser cache enabled (for faster loading)
- Clear browsing data only when necessary

---

## 🛠️ Troubleshooting

### Q: Progress not saving?
**A:** Check browser settings → Allow localStorage access

### Q: Page not loading properly?
**A:** Try clearing browser cache or using Incognito mode

### Q: Confused about eligibility?
**A:** Double-check on official UPSC website (www.upsc.gov.in)

### Q: Questions too easy/hard?
**A:** Adjust difficulty by trying different subjects

---

## 📞 FAQ

**Q: Do I need internet?**  
A: Only to download the site first time. Works offline after.

**Q: Is my data safe?**  
A: Yes! Data stays on your device, never goes to any server.

**Q: Can I access on mobile?**  
A: Yes! Fully responsive design for all devices.

**Q: How many questions are there?**  
A: Currently 45 questions (15 per subject). More can be added.

**Q: Can I export my progress?**  
A: Yes! Use the "Export" button in Syllabus Tracker.

---

## 🎯 Next Steps

1. ✅ Open `index.html` in browser
2. ✅ Check your eligibility
3. ✅ Set up syllabus tracker
4. ✅ Take first mock test
5. ✅ Download study materials
6. ✅ Start consistent practice!

---

## 📚 External Resources

- **Official UPSC Website:** www.upsc.gov.in
- **CDS Notification:** upsc.gov.in/examinations/combined-defence-services-exam
- **Previous Year Papers:** upsc.gov.in/examinations/previous-question-papers
- **Admit Card:** upsconline.nic.in

---

## 💡 Pro Tips

1. **Daily 30-minute sessions** are better than weekly marathons
2. **Mark weak topics** and revisit them frequently
3. **Study with mock tests** - Practice Mode teaches, Exam Mode assesses
4. **Review explanations** - Don't just check answers
5. **Track progress** - Celebrate milestones to stay motivated
6. **Use cheat sheets** - Perfect for last-minute revision

---

## ✨ Features Highlight

- 🎯 **Smart Progress Tracking** - Know exactly what's left
- ⏱️ **Realistic Mock Tests** - Exact UPSC marking scheme
- 🏆 **Performance Analytics** - Detailed score breakdowns
- 📲 **Mobile Optimized** - Study anywhere, anytime
- 🔒 **Privacy First** - All data stored locally
- 📊 **Real CDS Data** - Based on 2023-2025 exams
- 🎨 **Beautiful UI** - Military-themed professional design

---

## 🎖️ Good Luck!

Remember: **Consistent effort + Smart strategy = Success**

Every question solved, every topic marked, every mock test taken brings you closer to your dream academy.

**Stay disciplined. Stay focused. Achieve excellence. 🚀**

---

**Last Updated:** June 2026  
**For Latest Updates:** Check www.upsc.gov.in

---

**Jai Hind! 🇮🇳**
