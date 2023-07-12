import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, IsMongoId, IsOptional } from "class-validator";

export class CreateContentDto {
  @ApiProperty({ description: "['Ar223tdudw']" })
  @IsNotEmpty()
  @IsString({ each: true })
  author_id: string[];

  @ApiProperty({ description: "JavaScript" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: "excelente curso" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 20 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ description: "Programacion" })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  @IsNumber()
  dificulty: number;

  @ApiProperty({ description: "Es buen curso muy recomendado" })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  sales: boolean;

  @ApiProperty({ description: "Ariel" })
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty({ description: "Ariel" })
  @IsOptional()
  @IsDate()
  update?: Date;

  @ApiProperty({ description: "Ariel" })
  @IsOptional()
  @IsNumber({}, { each: true })
  rating: number[];

  @ApiProperty({ description: "Ariel" })
  @IsOptional()
  @IsMongoId({ each: true })
  comments: string[];
}
