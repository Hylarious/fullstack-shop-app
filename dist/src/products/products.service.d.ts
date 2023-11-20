import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product> | null;
}
