import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNotes } from '../hooks/useNotes';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import NoteList from '../components/NoteList';
import NoteEditor from '../components/NoteEditor';

const Home = () => {
  const { isDark, toggleTheme } = useTheme();
  const { notes, handleSaveNote, deleteNote } = useNotes();
  
  // ... (State และ Logic ต่างๆ ยังคงเหมือนเดิม) ...
  const [showEditor, setShowEditor] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = [...new Set(notes.flatMap((n) => n.tags || []))];

  const filtered = notes.filter((note) => {
    const matchSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());
    const matchTag = selectedTag ? note.tags?.includes(selectedTag) : true;
    return matchSearch && matchTag;
  });

  const onSave = (data) => {
    handleSaveNote(editingNote, data);
    setShowEditor(false);
    setEditingNote(null);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setShowEditor(true);
  };

  return (
    // ลบ <style dangerouslySetInnerHTML=...> ออกไปแล้ว โค้ดจะสั้นลง
    <div className={`min-h-screen ${isDark ? 'bg-[#121212] text-white' : 'bg-[#fffafb] text-gray-800'} transition-colors duration-300 font-mali relative pb-20`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ... (เนื้อหาด้านในยังเหมือนเดิมทุกประการ) ... */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ff8fa3] tracking-wide flex items-center gap-2">
              My Notes 🌸
            </h1>
            <p className="text-[#ffb6c1] mt-2 font-medium">พื้นที่จดบันทึกสุดน่ารักของคุณ</p>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-2xl hover:scale-110 transition-transform"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </header>

        <SearchBar value={search} onChange={setSearch} />
        <TagFilter tags={allTags} selected={selectedTag} onSelect={setSelectedTag} />

        <NoteList notes={filtered} onDelete={deleteNote} onEdit={handleEdit} />

        <button
          onClick={() => {
            setEditingNote(null);
            setShowEditor(true);
          }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#ff8fa3] hover:bg-[#ff7b93] text-white rounded-full shadow-[0_4px_20px_rgba(255,143,163,0.5)] flex items-center justify-center text-3xl transition-all hover:scale-110 hover:rotate-90 z-40"
          title="สร้างโน้ตใหม่"
        >
          +
        </button>

        {showEditor && (
          <NoteEditor
            editingNote={editingNote}
            onSave={onSave}
            onClose={() => {
              setShowEditor(false);
              setEditingNote(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;