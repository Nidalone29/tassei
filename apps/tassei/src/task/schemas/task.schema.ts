import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  title!: string;

  @Prop()
  content!: string;

  @Prop()
  completed!: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
