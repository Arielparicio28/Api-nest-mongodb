import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ContentsModule } from './contents/contents.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://arielaparicio100:Principe1994@cluster0.7mvk5pl.mongodb.net/Api-example'), UsersModule, ContentsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
