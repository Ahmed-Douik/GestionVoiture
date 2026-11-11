import { ApiProperty } from '@nestjs/swagger';

export class Voiture {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Clio' })
  nom: string;

  @ApiProperty({ example: 'Rouge' })
  couleur: string;

  @ApiProperty({ example: 90 })
  nbChevaux: number;
}
