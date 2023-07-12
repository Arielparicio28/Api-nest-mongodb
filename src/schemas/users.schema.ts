import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, Types} from "mongoose";
import { ContentDocument } from "./contents.schema";


export type UserDocument = HydratedDocument<User>

@Schema()
export class User {


    @Prop({ required: true, unique: true })
    'name': string;

    @Prop()
    'user_name': string;

    @Prop({ required: true, select: false })
    'password': string;

    @Prop({ required: true, unique: true })
    'email': string;

    @Prop()
    'role': string;

    @Prop()
    'wallet_balance': number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Content' }] })
  'id_published_content'?: ContentDocument[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Content' }] })
  'id_bought_content'?: ContentDocument[];

    @Prop()
    'created_at:'?: Date;

    @Prop()
    'created_update'?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);