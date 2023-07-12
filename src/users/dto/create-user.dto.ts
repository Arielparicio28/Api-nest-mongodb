import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsArray, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "Ariel" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: "Principe1994" })
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @ApiProperty({ description: "usuario1234." })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: "ariel@mail.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: "User or Admin" })
  @IsOptional()
  @Transform((value) => (value === undefined ? [] : value))
  role?: string;

  @ApiProperty({ description: "1000" })
  @IsNotEmpty()
  @IsNumber()
  wallet_balance: number;

  @ApiProperty({ description: "[ObjectId: zxAi1234],[ObjectId: TRei1234]" })
  @IsOptional()
  @IsArray()
  id_published_content: number[];

  @ApiProperty({ description: "[ObjectId: zxAi1234],[ObjectId: TRei1234]" })
  @IsOptional()
  @IsArray()
  id_bought_content: number[];

  @ApiProperty({ description: "11/07/2023" })
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty({ description: "15/09/2023" })
  @IsOptional()
  @IsDate()
  created_update?: Date;
}
