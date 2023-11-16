import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prismaService: PrismaService) { }

    public getAll(): Promise<Product[]> {
        return this.prismaService.product.findMany({ include: { photos: true } })
    }

    public getById(id: Product['id']): Promise<Product> | null {
        return this.prismaService.product.findUnique({
            where: { id },
            include: { photos: true }
        })
    }
}
