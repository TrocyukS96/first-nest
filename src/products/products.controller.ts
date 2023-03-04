import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {

  //делаем инжекцию переменной в конструктор, чтобы через this получить доступ к классу ProductsService
  constructor(private readonly productsService: ProductsService) {
  }

  // @Get()
  // // @Redirect('https://google.com',301)
  // getAll(@Req() req:Request, @Res() res:Response) {
  //   res.status(201).end('Poka')
  //   return 'getAll'
  // }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(":id")
  // декоратор @Param, в переменую params мы оборачиваем то что приходит с декоратора
  //  getOne(@Param() params){
  // 2 способ
  getOne(@Param("id") id): string {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): string {
    return "remove " + id;
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string): string {
    return "Update " + id;
  }
}