# 🍼 Baby Reveal Escape Room — Deployment Guide

## What you get
A fully interactive escape room web app for Papi Ramon & Momma Alyn's gender reveal with:
- 🎵 Quest 1: The Lullaby (multiple choice riddle)
- 🍼 Quest 2: Baby Toolkit (order the items)
- 🎯 Quest 3: Bet on Your Baby (quiz game)
- 🌙 Quest 4: Baby Riddle (type-in answer)
- 🔓 Final Quest: Baby Code (enter all 4 words to trigger reveal)
- 💗 Spin-wheel countdown → "IT'S A GIRL!" reveal with confetti

---

## STEP 1 — Set up Google Sheets (the database)

1. Go to **https://sheets.google.com** and create a new blank spreadsheet
2. Name it: `Baby Reveal Escape Room`
3. Go to **Extensions → Apps Script**
4. Delete all existing code in the editor
5. Copy the entire content of `Code.gs` and paste it in
6. Click **Save** (💾)
7. Click **Deploy → New Deployment**
8. Click the gear icon ⚙️ next to "Type" → select **Web App**
9. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
10. Click **Deploy** → click **Authorize access** → follow the Google login prompts
11. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/XXXX/exec`)

---

## STEP 2 — Connect the App to Google Sheets

1. Open `index.html` in a text editor (Notepad, VS Code, etc.)
2. Find this line near the top of the `<script>` section:
   ```js
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied
4. Save the file

---

## STEP 3 — Deploy to Vercel (free hosting, no server needed)

### Option A: Drag & Drop (Easiest!)
1. Go to **https://vercel.com** and sign up for a free account
2. From your dashboard, click **Add New → Project**
3. Scroll down and click **"Deploy from your local files"** or drag the folder
4. Drag the entire `gender-reveal` folder into the upload area
5. Click **Deploy**
6. Done! You'll get a URL like: `https://baby-reveal-abc123.vercel.app`

### Option B: Via GitHub (recommended for updates)
1. Create a free account at **https://github.com**
2. Create a new repository called `baby-reveal`
3. Upload the 3 files: `index.html`, `vercel.json`, `Code.gs`
4. Go to **https://vercel.com → Add New → Import Git Repository**
5. Connect your GitHub and select `baby-reveal`
6. Click **Deploy**
7. Any future changes you push to GitHub auto-deploy!

---

## Quest Answers (for Ninong Pogi the Game Master)

| Quest | Challenge | Correct Answer | Secret Word |
|-------|-----------|----------------|-------------|
| Quest 1 | The Lullaby | "Tiny" | **TINY** |
| Quest 2 | Baby Toolkit | Diaper → Bottle → Blanket (in order) | **LOVE** |
| Quest 3 | Baby Quiz | Score 3/4 or more | **WELCOME** |
| Quest 4 | Baby Riddle | "BABY" (or "A BABY") | **BABY** |

**Final Code:** TINY · LOVE · WELCOME · BABY

---

## Party Roles
- 👑 **Ninong Pogi** — Game Master (knows the answers, guides the team)
- 🌸 **Ninang Wishelle** — Team Player (solves quests with parents)
- 🌙 **Ninang She** — Team Player (solves quests with parents)
- 💕 **Papi Ramon & Momma Alyn** — Team Players (play together with ninongs!)

---

## Customization Tips
- To change the gender: find `IT'S A GIRL!` in `index.html` and change to boy, then change the spin settle index
- To update attendee names: search for "Ninong Pogi", "Ninang Wishelle", "Ninang She" in the HTML
- The app saves progress in the browser (localStorage) AND to Google Sheets

---

## Need Help?
The app works 100% without the Google Sheet URL — the Google Sheets integration is optional bonus tracking. The game is fully playable with just the HTML file hosted on Vercel.
