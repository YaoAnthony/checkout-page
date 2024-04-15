//simulating request the database


//type
import { Product } from '../Types/product';
import { User } from '../Types/user';
import { UserProfile } from '../Types/profile';

//data
import { product } from './simulationProductDatabase';
import { user,userProfiles } from './simulationUserDatabase';



interface ProductWithQuantity {
    product: Product;
    quantity: number;
}

export function findProductOnlyId(id: string): Product | null {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            return product[i]; // 返回匹配到的json数据
        }
    }
    return null;
}

export function findUserOnlyId(id: string): User | null {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
            return user[i]; // 返回匹配到的json数据
        }
    }
    return null;
}

export function findUserProfileOnlyId(id: string): UserProfile | null {
    for (let i = 0; i < userProfiles.length; i++) {
        if (userProfiles[i].user.id === id) {
            return userProfiles[i]; // 返回匹配到的json数据
        }
    }
    return null;
}
    



export function findProductsAndQuantities(cart: { productid: string; quantity: number }[]): ProductWithQuantity[] {
    if (cart.length === 0) {
        console.log('cart is empty' )
        return [];
    }
    const allProducts = product;
    return cart.map(item => {
        const product = findProductById(allProducts, item.productid);
        return product ? { product, quantity: item.quantity } : [];
    }).filter((item): item is ProductWithQuantity => item !== null);
}

export function findProductById(productArray: Product[], id: string): Product | null {
    // 遍历productDetail数组来搜索对应id的json数据
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id === id) {
            return productArray[i]; // 返回匹配到的json数据
        }
    }
    return null; // 如果未找到匹配的id，返回null
}

export function findProductsByIds(idArray: string[]) : Product[]  {
    if (idArray.length === 0) {
        return [];
    }
    return idArray
        .map(id => findProductById(product,id))
        .filter((product): product is Product => product !== null);
}



//simulation of a database
export const getNewProducts = () => {

    //TODO: replace with actual API call
    return product.slice(11,21);
}

export const getPopularProducts = () => {

    const productId = [
        "bag1",
        "bag2",
        "bag3",
        "bag4",
        "bag5",
        "bag6",
    ]
    return findProductsByIds(productId);

}

