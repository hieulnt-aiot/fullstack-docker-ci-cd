'use client';

import { useEffect, useState } from 'react';
import { getAllNotes, deleteNote } from '@/api/notes';
import { Note } from '@/api/notes/types';
import NoteForm from '@/components/notes/NoteForm';
import NoteList from '@/components/notes/NoteList';
import Link from 'next/link';

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const data = await getAllNotes();
    setNotes(data);
  };

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Quản lý Ghi chú</h1>
      <NoteForm onCreated={fetchNotes} />
      <NoteList notes={notes} onDelete={handleDelete} />

      <div className="mt-8">
        <Link href="/" className="text-blue-500 underline">
          ← Quay lại trang chính
        </Link>
      </div>
    </main>
  );
}
