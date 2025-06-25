import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteResponseDto } from './dto/note-response.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNoteDto): Promise<NoteResponseDto> {
    const note = await this.prisma.note.create({ data: dto });
    return note;
  }

  async findAll(): Promise<NoteResponseDto[]> {
    return this.prisma.note.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number): Promise<NoteResponseDto> {
    const note = await this.prisma.note.findUnique({ where: { id } });
    if (!note) throw new NotFoundException(`Note ${id} not found`);
    return note;
  }

  async update(id: number, dto: UpdateNoteDto): Promise<NoteResponseDto> {
    return this.prisma.note.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.note.delete({ where: { id } });
  }
}
