import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types} from "mongoose";
import { CommentDocument} from "./comments.schema";

export type ContentDocument = HydratedDocument<Content>

@Schema()
export class Content {

    @Prop()
    'author_id':string[] ;

    @Prop({ required: true })
    'title': string;
  
    @Prop()
    'description': string;
  
    @Prop({ required: true })
    'price': number;
  
    @Prop()
    'category': string;
  
    @Prop()
    'dificulty': number;

    @Prop()
    'content': string;
  
    @Prop({ default: false, required: false })
    'sales': boolean;
  
    @Prop()
    'created_at': Date;
  
    @Prop()
    'update': Date;
  
    @Prop({ type: [Number], default: [] })
    rating: number[];
  
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments: CommentDocument[];
  
  }

  export const ContentSchema = SchemaFactory.createForClass(Content);