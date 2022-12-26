//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface Cart {
    id: number;
    products: Product[];
    user: User;
}

export interface GetCartQueryParams {
    /**
     *
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     *
     * A search term.
     */
    search?: string;
}

export interface GetOrderGet_ordersQueryParams {
    /**
     *
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     *
     * A search term.
     */
    search?: string;
    user__id?: number;
}

export interface GetOrderQueryParams {
    /**
     *
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     *
     * A search term.
     */
    search?: string;
    user__id?: number;
}

export interface GetProductsQueryParams {
    brand?: string;
    name?: string;
    /**
     *
     * Which field to use when ordering the results.
     */
    ordering?: string;
    price?: number;
    /**
     *
     * A search term.
     */
    search?: string;
    strength?: number;
}

/**
 *
 * Authenticates an existing user.
Email and password are required.
Returns a JSON web token.
 */

export interface Login {
    /**
     *
     * - Format: email
     */
    email: string;
    id?: number;
    /**
     *
     * - maxLength: 128
     */
    password: string;
    /**
     *
     * - maxLength: 255
     */
    token?: string;
    /**
     *
     * - maxLength: 255
     */
    username?: string;
}

export interface Order {
    id?: number;
    products?: Product[];
    user?: User;
    /**
     *
     * - Format: date-time
     */
    approval_date?: string;
    /**
     *
     * - Format: date-time
     */
    order_date?: string;
    /**
     *
     * - Format: date-time
     */
    pickup_date?: string;
    status: StatusEnum | BlankEnum;
}

export interface PatchedOrder {
    /**
     *
     * - Format: date-time
     */
    approval_date?: string;
    id?: number;
    /**
     *
     * - Format: date-time
     */
    order_date?: string;
    /**
     *
     * - Format: date-time
     */
    pickup_date?: string;
    products?: Product[];
    status?: StatusEnum | BlankEnum;
    user?: User;
}

export interface PatchedProduct {
    /**
     *
     * - maxLength: 100
     */
    brand?: string;
    id?: number;
    /**
     *
     * - maxLength: 100
     */
    name?: string;
    /**
     *
     * - minimum: -2147483648
     * - max: 2147483647
     */
    price?: string;
    /**
     *
     * - minimum: -2147483648
     * - max: 2147483647
     */
    strength?: number;
    /**
     *
     * - maxLength: 100
     */
    type?: string;
}

/**
 *
 * Осуществляет сериализацию и десериализацию объектов User.
 */

export interface PatchedUser {
    /**
     *
     * - Format: email
     * - maxLength: 254
     */
    email?: string;
    id?: number;
    is_staff?: boolean;
    /**
     *
     * Superuser status
     *
     * Designates that this user has all permissions without explicitly assigning them.
     */
    is_superuser?: boolean;
    /**
     *
     * - maxLength: 128
     * - minLength: 8
     */
    password?: string;
    /**
     *
     * - maxLength: 255
     */
    username?: string;
}

export interface Product {
    id: number;
    /**
     *
     * - maxLength: 100
     */
    name: string;
    /**
     *
     * - maxLength: 100
     */
    brand?: string;
    /**
     *
     * - minimum: -2147483648
     * - max: 2147483647
     */
    price?: string;
    /**
     *
     * - minimum: -2147483648
     * - max: 2147483647
     */
    strength?: number;
    /**
     *
     * - maxLength: 100
     */
    type?: string;
}

/**
 *
 * Creates a new user.
Email, username, and password are required.
Returns a JSON web token.
 */

export interface Registration {
    /**
     *
     * - Format: email
     * - maxLength: 254
     */
    email: string;
    id?: number;
    /**
     *
     * - maxLength: 128
     * - minLength: 4
     */
    password: string;
    /**
     *
     * - maxLength: 255
     */
    token?: string;
    /**
     *
     * - maxLength: 255
     */
    username: string;
    is_staff?: boolean;
    /**
     *
     * Superuser status
     *
     * Designates that this user has all permissions without explicitly assigning them.
     */
    is_superuser?: boolean;
}

export enum StatusEnum {
    ordered = "ordered",
    approved = "approved",
    picked_up = "picked_up",
    rejected = "rejected",
}

/**
 *
 * Осуществляет сериализацию и десериализацию объектов User.
 */

export interface User {
    /**
     *
     * - Format: email
     * - maxLength: 254
     */
    email: string;
    id: number;
    /**
     *
     * - maxLength: 128
     * - minLength: 8
     */
    password: string;
    /**
     *
     * - maxLength: 255
     */
    username: string;
    is_staff?: boolean;
    /**
     *
     * Superuser status
     *
     * Designates that this user has all permissions without explicitly assigning them.
     */
    is_superuser?: boolean;
}

export interface ValidationError {
    status: string;
}
