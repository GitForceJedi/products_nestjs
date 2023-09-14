import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';

console.log(process.env.DATABASE_NAME);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
