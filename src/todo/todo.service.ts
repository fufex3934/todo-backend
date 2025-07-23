import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}

  async create(todo: CreateTodoDto) {
    return this.todoModel.create(todo);
  }

  async findAll() {
    return this.todoModel.find().exec();
  }

  async update(id: string, todo: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
