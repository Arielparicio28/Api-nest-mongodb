import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateCommentDto {

/*   @ApiProperty({ example: "Soy un comentario" })
  id: string;
 */
  @ApiProperty({ example: "Soy un comentario" })
  @IsArray()
  @IsString({ each: true })
  comments: string[];
}
