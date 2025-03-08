/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/auth/sign-up": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SignUpRequest"];
                    "text/json": components["schemas"]["SignUpRequest"];
                    "application/*+json": components["schemas"]["SignUpRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SignUpResponse"];
                        "application/json": components["schemas"]["SignUpResponse"];
                        "text/json": components["schemas"]["SignUpResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/sign-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SignInRequest"];
                    "text/json": components["schemas"]["SignInRequest"];
                    "application/*+json": components["schemas"]["SignInRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SignInResponse"];
                        "application/json": components["schemas"]["SignInResponse"];
                        "text/json": components["schemas"]["SignInResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateGroupRequest"];
                    "text/json": components["schemas"]["CreateGroupRequest"];
                    "application/*+json": components["schemas"]["CreateGroupRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["CreateGroupResponse"];
                        "application/json": components["schemas"]["CreateGroupResponse"];
                        "text/json": components["schemas"]["CreateGroupResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/add-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["AddUsersRequest"];
                    "text/json": components["schemas"]["AddUsersRequest"];
                    "application/*+json": components["schemas"]["AddUsersRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/delete-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["DeleteUsersRequest"];
                    "text/json": components["schemas"]["DeleteUsersRequest"];
                    "application/*+json": components["schemas"]["DeleteUsersRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/expenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Expense"][];
                        "application/json": components["schemas"]["Expense"][];
                        "text/json": components["schemas"]["Expense"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/balances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["UserBalanceItem"][];
                        "application/json": components["schemas"]["UserBalanceItem"][];
                        "text/json": components["schemas"]["UserBalanceItem"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/settle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SettleRequest"];
                    "text/json": components["schemas"]["SettleRequest"];
                    "application/*+json": components["schemas"]["SettleRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AddUsersRequest: {
            userIds?: string[] | null;
        };
        CreateGroupRequest: {
            name?: string | null;
            userIds?: string[] | null;
        };
        CreateGroupResponse: {
            /** Format: uuid */
            groupId?: string;
        };
        DeleteUsersRequest: {
            userIds?: string[] | null;
        };
        Expense: {
            title?: string | null;
            /** Format: double */
            amount?: number;
            /** Format: date-time */
            date?: string;
            /** Format: uuid */
            paidByUserId?: string;
            split?: components["schemas"]["ExpenseSplit"];
        };
        ExpenseSplit: {
            type?: string | null;
            details?: components["schemas"]["ExpenseSplitDetail"][] | null;
        };
        ExpenseSplitDetail: {
            /** Format: uuid */
            userId?: string;
            /** Format: double */
            amount?: number;
        };
        SettleRequest: {
            /** Format: uuid */
            payerUserId?: string;
            /** Format: uuid */
            receiverUserId?: string;
            /** Format: double */
            amount?: number;
        };
        SignInRequest: {
            username?: string | null;
            password?: string | null;
        };
        SignInResponse: {
            /** Format: uuid */
            userId?: string;
            token?: string | null;
        };
        SignUpRequest: {
            username?: string | null;
            password?: string | null;
        };
        SignUpResponse: {
            token?: string | null;
        };
        UserBalance: {
            /** Format: uuid */
            userId?: string;
            /** Format: double */
            amount?: number;
        };
        UserBalanceItem: {
            /** Format: uuid */
            userId?: string;
            balance?: components["schemas"]["UserBalance"][] | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
