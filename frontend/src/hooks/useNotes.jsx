import { useState, useEffect } from 'react';

export const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("cute-notes");
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, title: "ซื้อของเข้าบ้าน 🛒", content: "- นมสด\n- สตรอว์เบอร์รี\n- ขนมปังปิ้ง", tags: ["shopping", "food"] },
      { id: 2, title: "ไอเดียของขวัญวันเกิด 🎁", content: "ตุ๊กตาหมีตัวใหญ่ๆ หรือไม่ก็สมุดบันทึกน่ารักๆ สักเล่ม", tags: ["ideas"] }
    ];
  });

  useEffect(() => {
    localStorage.setItem("cute-notes", JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (editingNote, data) => {
    if (editingNote) {
      setNotes(notes.map(n => n.id === editingNote.id ? { ...n, ...data } : n));
    } else {
      setNotes([{ id: Date.now(), ...data }, ...notes]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return { notes, handleSaveNote, deleteNote };
};