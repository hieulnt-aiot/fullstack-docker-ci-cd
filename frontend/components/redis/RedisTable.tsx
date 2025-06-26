'use client';

import { RedisEntry } from '@/api/redis/types';

interface Props {
  data: RedisEntry[];
  onDelete: (key: string) => void;
}

export default function RedisTable({ data, onDelete }: Props) {
  return (
    <table className="table-auto w-full bg-white border border-gray-300 rounded shadow">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2 text-left">🔑 Key</th>
          <th className="border px-4 py-2 text-left">📦 Value</th>
          <th className="border px-4 py-2 text-center">🗑️ Hành động</th>
        </tr>
      </thead>
      <tbody>
        {data.map(entry => (
          <tr key={entry.key}>
            <td className="border px-4 py-2">{entry.key}</td>
            <td className="border px-4 py-2">{entry.value}</td>
            <td className="border px-4 py-2 text-center">
              <button
                onClick={() => onDelete(entry.key)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
