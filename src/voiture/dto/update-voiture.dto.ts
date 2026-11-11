import { PartialType } from '@nestjs/swagger';
import { CreateVoitureDto } from './create-voiture.dto.js';

export class UpdateVoitureDto extends PartialType(CreateVoitureDto) {}
