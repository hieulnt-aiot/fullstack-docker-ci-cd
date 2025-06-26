'use client';

import { RedisEntry } from '@/api/redis/types';
import { useState } from 'react';

interface Props {
  onSubmit: (entry: RedisEntry) => void;
}

export default function RedisForm({ onSubmit }: Props) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ key, value });
    setKey('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={e => setKey(e.target.value)}
        className="border px-4 py-2 rounded w-40"
        required
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="border px-4 py-2 rounded w-60"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        ➕ Thêm / Cập nhật
      </button>
    </form>
  );
}
