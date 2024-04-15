// CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';



// 定义 Context 中的值的类型
interface CartContextType {
    isCartOpen: boolean;
    toggleCart: () => void;
}

// 使用 createContext 时提供初始值的类型
const CartContext = createContext<CartContextType | undefined>(undefined);

// 自定义 Hook，用于在组件中方便地访问 Context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// CartProvider 的 props 类型定义
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider value={{ isCartOpen, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};
