import React, { useState } from 'react';

const NoteEditor = ({ editingNote, onSave, onClose }) => {
  const [title, setTitle] = useState(editingNote?.title || "");
  const [content, setContent] = useState(editingNote?.content || "");
  const [tagsInput, setTagsInput] = useState(
    editingNote?.tags?.join(", ") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
      
    onSave({ title, content, tags });
  };

  return (
    <div className="fixed inset-0 bg-[#fff0f5]/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1a1a2e] border-4 border-[#ffe4e1] dark:border-[#ff8fa3] rounded-[30px] p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300">
        <h2 className="text-2xl font-bold text-[#ff8fa3] mb-6 text-center">
          {editingNote ? "✏️ แก้ไขโน้ต" : "✨ สร้างโน้ตใหม่"}
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="หัวข้อโน้ต..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-[#ffe4e1] dark:border-gray-700 rounded-2xl px-4 py-3 outline-none focus:border-[#ffb6c1] bg-[#fffafb] dark:bg-gray-800 transition-colors font-bold"
            autoFocus
          />
          
          <textarea
            placeholder="เขียนอะไรสักหน่อยสิ..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border-2 border-[#ffe4e1] dark:border-gray-700 rounded-2xl px-4 py-3 outline-none focus:border-[#ffb6c1] bg-[#fffafb] dark:bg-gray-800 transition-colors min-h-[150px] resize-y"
          />
          
          <input
            type="text"
            placeholder="แท็ก (คั่นด้วยลูกน้ำ เช่น งาน, สำคัญ)"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full border-2 border-[#ffe4e1] dark:border-gray-700 rounded-2xl px-4 py-3 outline-none focus:border-[#ffb6c1] bg-[#fffafb] dark:bg-gray-800 transition-colors text-sm"
          />
          
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 py-3 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#ffb6c1] text-white py-3 rounded-2xl font-bold hover:bg-[#ff9aa2] shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              บันทึกเลย 💖
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteEditor;