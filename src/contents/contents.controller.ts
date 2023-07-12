import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags()
@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @ApiOperation({ summary: 'Creacion de un contenido' })
  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentsService.create(createContentDto);
  }

  @ApiOperation({ summary: 'Buscando todos los contenidos' })
  @Get()
  findAll() {
    return this.contentsService.findAll();
  }

@ApiOperation({ summary: 'Buscando un contenido por su _id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizando un contenido por su _id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentsService.update(+id, updateContentDto);
  }

  @ApiOperation({ summary: 'Borrando un contenido por su _id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentsService.remove(+id);
  }
}
