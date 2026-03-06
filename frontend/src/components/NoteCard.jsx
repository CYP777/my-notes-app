import React from 'react';

const NoteCard = ({ note, onDelete, onEdit }) => (
  <div className="bg-[#fff5f8] dark:bg-[#2a1b2e] border-2 border-dashed border-[#ffb6c1] rounded-[24px] p-6 shadow-[0_4px_12px_rgba(255,182,193,0.2)] hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_8px_16px_rgba(255,182,193,0.4)] transition-all duration-300 flex flex-col h-full">
    <h3 className="text-xl font-bold text-[#ff8fa3] dark:text-[#ffb6c1] mb-2 truncate">
      {note.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 flex-grow whitespace-pre-wrap line-clamp-4">
      {note.content}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-4 mb-4">
      {note.tags?.map((tag) => (
        <span key={tag} className="bg-[#e0f7fa] text-[#00838f] dark:bg-cyan-900 dark:text-cyan-100 px-3 py-1 rounded-full text-xs font-semibold">
          #{tag}
        </span>
      ))}
    </div>
    
    <div className="flex justify-end gap-2 mt-auto pt-2">
      <button
        onClick={() => onEdit(note)}
        className="bg-[#ffe4e1] text-[#ff8fa3] hover:bg-[#ffb6c1] hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors"
      >
        แก้ไข
      </button>
      <button
        onClick={() => onDelete(note.id)}
        className="bg-gray-100 text-gray-500 hover:bg-red-200 hover:text-red-600 dark:bg-gray-800 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
      >
        ลบ
      </button>
    </div>
  </div>
);

export default NoteCard;