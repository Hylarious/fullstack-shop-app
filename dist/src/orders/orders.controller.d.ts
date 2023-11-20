import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
type ProductOrder = {
    id: string;
    quantity: number;
};
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<import(".prisma/client").Order[]>;
    getById(id: string): Promise<import(".prisma/client").Order>;
    create(orderData: CreateOrderDTO, products: ProductOrder[]): Promise<import(".prisma/client").Order>;
}
export {};
