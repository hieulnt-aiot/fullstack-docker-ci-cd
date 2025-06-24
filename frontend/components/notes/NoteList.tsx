'use client';

import { Note } from '@/api/notes/types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

export default function NoteList({ notes, onDelete, onEdit }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="text-gray-600">Chưa có ghi chú nào.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 bg-white rounded shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
              #
            </th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
              Tiêu đề
            </th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
              Nội dung
            </th>
            <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-700">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 border-b text-sm text-gray-800">
                {index + 1}
              </td>
              <td className="px-4 py-2 border-b text-sm text-gray-800 font-semibold">
                {note.title}
              </td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">
                {note.content}
              </td>
              <td className="px-4 py-2 border-b text-center space-x-2">
                <button
                  onClick={() => onEdit(note)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm transition"
                >
                  📝 Sửa
                </button>
                <button
                  onClick={() => onDelete(note.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                >
                  ❌ Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
