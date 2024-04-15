import { Product,DIYProduct } from "./product";

export type Comment = {
    id: string;
    userId: string;
    productId: string;

    title: string;
    content: string;
    type: "diy" | "final product" | "material" | "other";
    //product: Product | DIYProduct; 因为这个product和diyproduct都是comment的子集，所以不需要再次引入
    image: string[];
    rate: number;
    location: string;
    createdAt: string | Date;
}
