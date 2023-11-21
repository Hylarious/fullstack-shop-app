import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order> | null;
    create(orderData: Omit<Order, 'id' | 'createAt' | 'updateAt'>, products: {
        id: string;
        quantity: number;
        description: string;
    }[]): Promise<Order>;
}
