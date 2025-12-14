import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./schemas/task.schema";

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    console.log(createTaskDto.title);
    const createdTask = new this.taskModel(createTaskDto);
    console.log(createdTask.title);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }
}
