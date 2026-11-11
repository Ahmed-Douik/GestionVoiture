import { ApiProperty } from '@nestjs/swagger';

export class CreateVoitureDto {
  @ApiProperty({ example: 'Clio' })
  nom: string;

  @ApiProperty({ example: 'Rouge' })
  couleur: string;

  @ApiProperty({ example: 90 })
  nbChevaux: number;
}
