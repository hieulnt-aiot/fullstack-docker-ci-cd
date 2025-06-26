import instance from '@/lib/axios';
import { RedisEntry } from './types';

export const getAllRedisKeys = async (): Promise<RedisEntry[]> => {
  const res = await instance.get('/api/redis');
  return res.data;
};

export const getRedisKey = async (key: string): Promise<RedisEntry> => {
  const res = await instance.get(`/api/redis/${key}`);
  return { key, value: res.data };
};

export const setRedisKey = async (entry: RedisEntry): Promise<void> => {
  await instance.post(`/api/redis`, entry);
};

export const deleteRedisKey = async (key: string): Promise<void> => {
  await instance.delete(`/api/redis/${key}`);
};
