import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) { }

    public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany({ include: { products: true } })
    }

    public getById(id: Order['id']): Promise<Order> | null {
        return this.prismaService.order.findUnique({
            where: { id },
            include: {
                products: true
            }
        })
    }

    public create(
        orderData: Omit<Order, 'id' | 'createAt' | 'updateAt'>,
        products: { id: string, quantity: number }[]
    ): Promise<Order> {
        return this.prismaService.order.create({
            data: {
                ...orderData,
                products: {
                    create: products.map(product => ({
                        quantity: product.quantity,
                        product: {
                            connect: {
                                id: product.id
                            }
                        },
                    }))
                }
            }
        })
    }
    /* Example body structure for creating order:
    {
     "orderData": {
        "name": "John Doe"
        "email": "tester@gmail.com",
        "address": "1234 Elm Street, Apt 567, Cityville, Stateland, 56789"
        }, 
        "productIds": ["fd105551-0f0d-4a9f-bc41-c559c8a17210", "fd105551-0f0d-4a9f-bc41-c559c8a17201"]
    } */
}

