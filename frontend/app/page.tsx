'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAndUpdateCounter } from '@/api/counter';

export default function HomePage() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const countAPI = await getAndUpdateCounter();
        setCount(countAPI);
      } catch (err) {
        console.error('Lỗi khi gọi API counter:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCounter();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">👋 Welcome!</h1>
      <p className="text-lg mb-4 text-gray-800">
        Số lượt truy cập:{' '}
        <span className="font-semibold">{loading ? 'Đang tải...' : count}</span>
      </p>

      <div className="flex space-x-4">
        <Link href="/notes">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            📝 Quản lý Ghi chú
          </button>
        </Link>
        <Link href="/redis">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            🗂️ Quản lý Redis
          </button>
        </Link>
      </div>
    </main>
  );
}
