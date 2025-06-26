'use client';

import { Note } from '@/api/notes/types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <ul className="space-y-2">
      {notes.map(note => (
        <li
          key={note.id}
          className="border p-4 rounded shadow-sm flex justify-between items-start"
        >
          <div>
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-500 hover:underline"
          >
            Xoá
          </button>
        </li>
      ))}
    </ul>
  );
}
