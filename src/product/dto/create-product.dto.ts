import { Type } from 'class-transformer';
import { IsNumber, IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';

class ProductCharacteristicDto {
	@IsString()
	name: string;

	@IsString()
	value: string;
}

export class CreateProductDto {
	@IsString()
	image: string;

	@IsString()
	title: string;

	@IsNumber()
	price: number;

	@IsOptional() // опциональное свойство
	@IsNumber()
	oldPrice?: number;

	@IsNumber()
	credit: number;

	@IsString()
	description: string;

	@IsString()
	advantages: string;

	@IsString()
	disAdvantages: string;

	@IsArray()
	@IsString({ each: true }) // проверяет что каждый ел. массива строка
	categories: string[];

	@IsArray()
	@IsString({ each: true })
	tags: string[];

	@IsArray()
	@ValidateNested() //праваливатся во внутырь обьекта и проверяет
	@Type(() => ProductCharacteristicDto)
	characteristics: ProductCharacteristicDto[];
}

