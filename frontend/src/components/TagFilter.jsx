import React from 'react';

const TagFilter = ({ tags, selected, onSelect }) => {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect("")}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
          selected === ""
            ? "bg-[#ffb6c1] text-white shadow-md"
            : "bg-[#ffe4e1] text-[#ff8fa3] dark:bg-gray-800 dark:text-pink-300"
        }`}
      >
        ทั้งหมด
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
            selected === tag
              ? "bg-[#4dd0e1] text-white shadow-md"
              : "bg-[#e0f7fa] text-[#00838f] dark:bg-cyan-900 dark:text-cyan-100"
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;