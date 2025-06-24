import instance from '@/lib/axios';

export const getAndUpdateCounter = async () => {
  const res = await instance.get('/api/counter');
  return res.data;
};
