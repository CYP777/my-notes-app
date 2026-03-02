# my-notes-app

Basic Guildline : Claude ai

```bash
my-notes-app/
├── client/          ← React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteList.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteEditor.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── TagFilter.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx   ← Dark Mode
│   │   ├── hooks/
│   │   │   └── useNotes.js
│   │   └── App.jsx
│
└── server/          ← Node.js Backend
    ├── routes/
    │   └── notes.js
    ├── models/
    │   └── Note.js
    ├── db.js
    └── index.js
```