import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}

  async create(todo: Partial<Todo>) {
    return this.todoModel.create(todo);
  }

  async findAll() {
    return this.todoModel.find().exec();
  }

  async update(id: string, todo: Partial<Todo>) {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
