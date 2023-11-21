import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { CreateOrderAdditionalDTO } from './dtos/create-order-additional.dto';



@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

@Get('/') 
getAll() {
    return this.ordersService.getAll()
}

@Get('/:id')
async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersService.getById(id)
    if(!order) { throw new NotFoundException('Order not found')}
    return order
}
@Post('/')
async create(@Body('orderData') orderData: CreateOrderDTO, @Body('products') products: CreateOrderAdditionalDTO[]){
    console.log(Body)
    return this.ordersService.create(orderData, products);
}
    
}
