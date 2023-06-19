import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {} // класс расширяется на основе CreateMovieDto и берет все его поля, делая их необязательными
