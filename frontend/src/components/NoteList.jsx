import NoteCard from './NoteCard';

const NoteList = ({ notes, onDelete, onEdit }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-[#ff8fa3] italic">ยังไม่มีโน้ตตรงนี้เลย มาเริ่มเขียนกันเถอะ ✨</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;