import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {

  @Get()
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  // декоратор @Param, в переменую params мы оборачиваем то что приходит с декоратора
  //  getOne(@Param() params){
  // 2 способ
  getOne(@Param('id') id):string {
    return 'getOne ' + id
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto):string {
    return `Title: ${createProductDto.title} Price:${createProductDto.price}`
  }

  @Delete(':id')
  remove(@Param('id') id:string):string{
    return 'remove ' +id
  }

  @Put(':id')
  update(@Body() updateProductDto:UpdateProductDto, @Param('id') id:string):string{
    return 'Update ' + id
  }
}