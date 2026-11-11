import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VoitureService } from './voiture.service.js';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { Voiture } from './entities/voiture.entity.js';

@ApiTags('Voiture')
@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  @ApiCreatedResponse({ type: Voiture, description: 'Voiture ajoutée' })
  create(@Body() createVoitureDto: CreateVoitureDto): Voiture {
    return this.voitureService.create(createVoitureDto);
  }

  @Get()
  @ApiOkResponse({ type: [Voiture], description: 'Liste des voitures' })
  findAll(): Voiture[] {
    return this.voitureService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Voiture })
  @ApiNotFoundResponse({ description: 'Voiture introuvable' })
  findOne(@Param('id', ParseIntPipe) id: number): Voiture {
    return this.voitureService.findOne(id);
  }
}
