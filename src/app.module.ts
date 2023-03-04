import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";

//@Module - Это декоратор
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://resam2171:nest-first@cluster0.eeiaaji.mongodb.net/?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
