import instance from '@/lib/axios';

export const getAndUpdateCounter = async () => {
  console.log("instance url: " + instance)
  const res = await instance.get('/api/counter');
  return res.data;
};
