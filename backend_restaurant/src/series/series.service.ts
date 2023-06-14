import {ConflictException, Injectable,NotFoundException } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { SeriesEntity } from './entities/series.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private seriesRepository: Repository<SeriesEntity>,
  ) {}
  async create(createSeriesDto: CreateSeriesDto): Promise<SeriesEntity> {
    const existe = await this.seriesRepository.findOneBy({
      titulo: createSeriesDto.titulo.trim(),
      sinopsis:createSeriesDto.sinopsis.trim(),
      director:createSeriesDto.director.trim(),
      duracion:createSeriesDto.duracion,
    });

    if (existe) {
      throw new ConflictException(
        `La serie ${createSeriesDto.titulo} ya existe para el titulo.`,
      );
    }

    return this.seriesRepository.save({
      titulo: createSeriesDto.titulo.trim(),
      sinopsis:createSeriesDto.sinopsis.trim(),
      director:createSeriesDto.director.trim(),
      duracion:createSeriesDto.duracion,
      fechaEstreno:createSeriesDto.fechaEstreno,
    });
  }


  async findAll(): Promise<SeriesEntity[]> {
    return this.seriesRepository.find();
  }

  async findOne(id: number): Promise<SeriesEntity> {
    const series = await this.seriesRepository.findOneBy({id});

    if (!series) {
      throw new NotFoundException(`La serie  ${id} no existe.`);
    }

    return series;
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto) {
    const series = await this.seriesRepository.findOneBy({id});

    if (!series) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    const seriesUpdate = Object.assign(series, updateSeriesDto);
    return this.seriesRepository.save(seriesUpdate);
  }
  async remove(id: number) {
    const existe = await this.seriesRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`La seire ${id} no existe.`);
    }

    return this.seriesRepository.delete(id);
  }
}
