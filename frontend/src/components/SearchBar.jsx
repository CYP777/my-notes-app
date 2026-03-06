const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="🔍 ค้นหาโน้ตของคุณ..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full border-2 border-[#ffe4e1] dark:border-[#ff8fa3] rounded-2xl px-4 py-3 mb-4 outline-none focus:border-[#ffb6c1] bg-[#fffafb] dark:bg-[#1a1a2e] transition-colors"
  />
);

export default SearchBar;