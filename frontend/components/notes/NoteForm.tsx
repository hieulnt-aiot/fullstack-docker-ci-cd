'use client';

import { useState } from 'react';
import { createNote } from '@/api/notes';

interface NoteFormProps {
  onCreated: () => void;
}

export default function NoteForm({ onCreated }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNote({ title, content });
    setTitle('');
    setContent('');
    onCreated();
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Thêm ghi chú
      </button>
    </form>
  );
}
