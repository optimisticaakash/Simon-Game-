# 🎮 Simon Says Game

A classic **Simon Says memory game** built using **HTML, CSS, and JavaScript**.  
This browser-based game challenges the player’s memory by generating an increasing sequence of colors that must be repeated in the correct order.

---

## 📌 Project Overview

The **Simon Says Game** is an interactive mini project where:
- The game generates a random color pattern.
- The player must remember and repeat the pattern.
- Each correct round increases the level and difficulty.

This project demonstrates **DOM manipulation, event handling, arrays, and game logic** in JavaScript.

---

## 🕹️ Game Rules

1. Press **any key** to start the game.
2. A color button flashes — remember it.
3. Click the buttons in the **exact same order**.
4. If the sequence is correct:
   - You move to the next level
   - A new color is added to the sequence
5. If you click the wrong button:
   - ❌ Game Over
   - Your score (level) is displayed
   - Press any key to restart the game

---

## ✨ Features

- Four colored buttons: **Red, Yellow, Green, Purple**
- Random sequence generation
- Level-based difficulty increase
- Button flash animations
- User input highlighting
- Instant game-over feedback

---

## 🎨 CSS Styling

- Large square buttons with rounded edges
- Distinct colors for easy recognition
- Flash animation for game sequence
- Highlight animation for user clicks

---

## 🧠 JavaScript Logic Summary

- `gameSeq[]` → Stores the game-generated sequence
- `userSeq[]` → Stores user input sequence
- `level` → Tracks current game level
- `started` → Prevents restarting mid-game

User input is checked **step-by-step** against the game sequence.

---

## 🧑‍💻 Tech Stack Used

- **HTML** – Game structure  
- **CSS** – Styling & animations  
- **JavaScript** – Game logic & DOM manipulation  

---

## 🚀 How to Run the Project

1. Clone or download the repository
2. Make sure all files are in the same folder:
   - `index.html`
   - `style.css`
   - `app.js`
3. Open `index.html` in any modern browser
4. Press any key and start playing 🎉

---

## 📂 Project Structure

Simon-Says-Game/
├── index.html
├── style.css
└── app.js

---

## 🔮 Future Improvements

- Add sound effects for each color
- Store highest score using `localStorage`
- Make the game mobile responsive
- Add difficulty modes

---

## 👤 Author

**Aakash**  
Final Year Engineering Student  
Aspiring Software Engineer 🚀
