import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<import(".prisma/client").Product[]>;
    getById(id: string): Promise<import(".prisma/client").Product>;
}
