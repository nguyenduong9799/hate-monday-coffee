// src/stores/cartStore.ts
import { writable } from 'svelte/store';
import type { Cart, ProductList } from '../components/models/cart.model';



// Initial state for the cart
const initialCartState: Cart = {
    productList: [],
    storeId: 'A',
    orderType: '',
    paymentType: '',
    totalAmount: 0,
    discountAmount: 0,
    shippingFee: 0,
    finalAmount: 0,
    bonusPoint: 0,
    promotionCode: '',
    voucherCode: '',
    promotionList: [],
    customerId: '',
    customerName: '',
    customerPhone: '',
    deliveryAddress: '',
    message: '',
    customerNumber: 0,
    customerNote: '',
    notes: ''
};

// Helper function to calculate the total
const calculateTotal = (items: ProductList[]) =>
    items.reduce((total, item) => total + item.finalAmount, 0);

// Create a writable store with the initial state
const cartStore = writable<Cart>(initialCartState);

// Actions for managing the cart
export const addToCart = (item: ProductList) => {
    cartStore.update((cart) => {
        const existingItem = cart.productList.find((cartItem) => cartItem.productInMenuId === item.productInMenuId);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.productList.push(item);
        }
        return {
            ...cart,
            totalAmount: calculateTotal(cart.productList)
        };
    });
};

export const removeFromCart = (itemId: string) => {
    cartStore.update((cart) => {
        cart.productList = cart.productList.filter((item) => item.productInMenuId !== itemId);
        return {
            ...cart,
            totalAmount: calculateTotal(cart.productList)
        };
    });
};
export const increaseQuantity = (itemId: string) => {
    cartStore.update((cart) => {
        const item = cart.productList.find((cartItem) => cartItem.productInMenuId === itemId);
        if (item) {
            item.quantity += 1;
            item.finalAmount = item.sellingPrice * item.quantity
        }
        return {
            ...cart,
            totalAmount: calculateTotal(cart.productList)
        };
    });
};

// Decrease the quantity of a specific item
export const decreaseQuantity = (itemId: string) => {
    cartStore.update((cart) => {
        const item = cart.productList.find((cartItem) => cartItem.productInMenuId === itemId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            item.finalAmount = item.sellingPrice * item.quantity
        } else {
            cart.productList = cart.productList.filter((cartItem) => cartItem.productInMenuId !== itemId);
        }
        return {
            ...cart,
            totalAmount: calculateTotal(cart.productList)
        };
    });
};

export const clearCart = () => {
    cartStore.set(initialCartState);
};

export default cartStore;