import axios from '@/lib/axios';
import { Note } from './types';

export const getAllNotes = async (): Promise<Note[]> => {
  const res = await axios.get('/api/notes');
  return res.data;
};

export const createNote = async (data: Omit<Note, 'id'>): Promise<Note> => {
  const res = await axios.post('/api/notes', data);
  return res.data;
};

export const updateNote = async (
  id: number,
  data: Omit<Note, 'id'>
): Promise<Note> => {
  const res = await axios.put(`/api/notes/${id}`, data);
  return res.data;
};

export const deleteNote = async (id: number): Promise<void> => {
  await axios.delete(`/api/notes/${id}`);
};
