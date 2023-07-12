
import mongoose, { HydratedDocument } from "mongoose";
import { UserDocument } from "./users.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type CommentDocument = HydratedDocument<Comment>

@Schema()
export class Comment{

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  "id": UserDocument;

  @Prop()
 "comments":string[];

}

export const CommentSchema = SchemaFactory.createForClass(Comment)