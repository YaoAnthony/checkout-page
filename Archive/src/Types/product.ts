/**
 * Represents a tag structure with various categorizations.
 */
type Tag = {
    material?: string[];
    aim?: string[];
    style?: string[];
    color?: string[];
};

/**
 *  Defines the structure of a product item with a detailed tag.
 */
export type Product = {
    id: string;
    name: string;
    authorId: string;
    authorName: string;

    status: "draft" | "unique" | "preorder" | "archived" | "sold" | "soldout" ;
    shortIntroduction: string;
    description: string;
    price: number;
    likes: number;
    rate: number;
    image: string[]; // Replace `any` with the appropriate type for your project, such as `string` for image URLs.
    tag: Tag;
};

export type DIYProduct = {
    id: string;
    name: string;

    description: string;
    initialPrice?: number;
    materials: string[];
    steps?: string[];
    image?: string[];
    tag: Tag;
}

export type Category = {
    id: string;
    name: string;
    description?: string;
    parentId?: string;
};

export type Inventory = {
    productId: string;
    quantity: number;
    alertLevel: number;
};
