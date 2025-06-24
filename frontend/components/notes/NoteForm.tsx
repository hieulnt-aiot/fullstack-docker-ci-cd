'use client';

import { useState, useEffect } from 'react';
import { createNote, updateNote } from '@/api/notes';
import { Note } from '@/api/notes/types';

interface NoteFormProps {
  onSaved: () => void;
  editingNote?: Note | null;
  cancelEdit: () => void;
}

export default function NoteForm({
  onSaved,
  editingNote,
  cancelEdit,
}: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNote) {
      await updateNote(editingNote.id, { title, content });
    } else {
      await createNote({ title, content });
    }
    setTitle('');
    setContent('');
    onSaved();
    cancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <input
        type="text"
        placeholder="Tiêu đề"
        className="w-full p-2 border rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Nội dung"
        className="w-full p-2 border rounded"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {editingNote ? 'Cập nhật' : 'Thêm mới'}
        </button>
        {editingNote && (
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={cancelEdit}
          >
            Huỷ
          </button>
        )}
      </div>
    </form>
  );
}
