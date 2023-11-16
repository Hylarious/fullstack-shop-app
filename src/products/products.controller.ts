import { Controller, Get, NotFoundException, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get('/') 
    getAll() {
        return this.productsService.getAll()
    }

    @Get('/:id') 
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
        const product = await this.productsService.getById(id)
        if(!product) {throw new NotFoundException('Product not found!')}
        return product
    }
} 
