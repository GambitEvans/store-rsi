import { Product } from './product';

export class ProductResponse {
    status: number;
    data: Product[];
    total: number;
}