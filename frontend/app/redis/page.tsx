'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RedisEntry } from '@/api/redis/types';
import { deleteRedisKey, getAllRedisKeys, setRedisKey } from '@/api/redis';
import RedisForm from '@/components/redis/RedisForm';
import RedisTable from '@/components/redis/RedisTable';

export default function RedisPage() {
  const [entries, setEntries] = useState<RedisEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllRedisKeys();
    setEntries(data);
    setLoading(false);
  };

  const handleAddOrUpdate = async (entry: RedisEntry) => {
    await setRedisKey(entry);
    fetchData();
  };

  const handleDelete = async (key: string) => {
    await deleteRedisKey(key);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        🔧 Quản lý Redis
      </h1>

      <RedisForm onSubmit={handleAddOrUpdate} />

      {loading ? (
        <p>Đang tải...</p>
      ) : entries.length === 0 ? (
        <p>Chưa có dữ liệu Redis nào.</p>
      ) : (
        <RedisTable data={entries} onDelete={handleDelete} />
      )}

      <div className="mt-8">
        <Link href="/">
          <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
            ⬅️ Quay về trang chính
          </button>
        </Link>
      </div>
    </main>
  );
}
