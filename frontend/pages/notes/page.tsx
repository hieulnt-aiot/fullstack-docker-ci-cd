'use client';

import { createNote, deleteNote, getAllNotes } from '@/pages/api/notes';
import { useEffect, useState } from 'react';

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchNotes = async () => {
    const res = await getAllNotes();
    setNotes(res);
  };

  const handleAdd = async () => {
    await createNote({ title, content });
    setTitle('');
    setContent('');
    fetchNotes();
  };

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Ghi chú</h1>
      <div className="mb-4">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Tiêu đề"
          className="border p-2 mr-2"
        />
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Nội dung"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Thêm
        </button>
      </div>
      <ul>
        {notes.map(note => (
          <li key={note.id} className="mb-2 border p-2">
            <div className="font-bold">{note.title}</div>
            <div>{note.content}</div>
            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-500 mt-1"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
