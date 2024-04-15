import { Product } from './product';


export type PaymentDetail = {
    transactionId?: string;

    method: 'paypal' | 'wechat' | 'emt' | 'alipay';
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    paymentDate?: Date;
};

/**
 * Order type
 */
export type productOrder = {
    id: string;

    products: { 
        product: Product; 
        quantity: number 
    }[];
    buyerId: string;
    sellerId: string;
    status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
    paymentDetail: PaymentDetail;
    createdAt: Date; // Date of creation
    updatedAt?: Date; // Date of last update

    shippingInfo: ShippingInfo;
}

export type ShippingInfo = {
    orderId: string;
    method: 'standard' | 'express';
    cost: number;
    address: string;
    recipient: string;
    trackingNumber?: string;
    status: 'preparing' | 'shipped' | 'delivered';
};
