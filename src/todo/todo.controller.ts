import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('create')
  async create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Put(':id')
  async update(@Body() todo: Partial<Todo>, @Param('id') id: string) {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
