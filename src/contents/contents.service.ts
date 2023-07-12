import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Content } from '../schemas/contents.schema';
import { Model } from 'mongoose';

@Injectable()
export class ContentsService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<Content>,
  ) {}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const createdContent = new this.contentModel(createContentDto);
    return createdContent.save();
  }

  async findAll(): Promise<Content[]> {
    return this.contentModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} content`;
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }

  remove(id: number) {
    return `This action removes a #${id} content`;
  }
}
