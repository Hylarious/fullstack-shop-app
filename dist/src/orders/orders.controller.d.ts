import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { CreateOrderAdditionalDTO } from './dtos/create-order-additional.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<import(".prisma/client").Order[]>;
    getById(id: string): Promise<import(".prisma/client").Order>;
    create(orderData: CreateOrderDTO, products: CreateOrderAdditionalDTO[]): Promise<import(".prisma/client").Order>;
}
