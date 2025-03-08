/* tslint:disable */
/* eslint-disable */
/**
 * SplitEasy API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface AddUsersRequest
 */
export interface AddUsersRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AddUsersRequest
     */
    'userIds'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateGroupRequest
     */
    'name'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateGroupRequest
     */
    'userIds'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface CreateGroupResponse
 */
export interface CreateGroupResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateGroupResponse
     */
    'groupId'?: string;
}
/**
 * 
 * @export
 * @interface DeleteUsersRequest
 */
export interface DeleteUsersRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof DeleteUsersRequest
     */
    'userIds'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface Expense
 */
export interface Expense {
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Expense
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'paidByUserId'?: string;
    /**
     * 
     * @type {ExpenseSplit}
     * @memberof Expense
     */
    'split'?: ExpenseSplit;
}
/**
 * 
 * @export
 * @interface ExpenseSplit
 */
export interface ExpenseSplit {
    /**
     * 
     * @type {string}
     * @memberof ExpenseSplit
     */
    'type'?: string | null;
    /**
     * 
     * @type {Array<ExpenseSplitDetail>}
     * @memberof ExpenseSplit
     */
    'details'?: Array<ExpenseSplitDetail> | null;
}
/**
 * 
 * @export
 * @interface ExpenseSplitDetail
 */
export interface ExpenseSplitDetail {
    /**
     * 
     * @type {string}
     * @memberof ExpenseSplitDetail
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof ExpenseSplitDetail
     */
    'amount'?: number;
}
/**
 * 
 * @export
 * @interface MeResponse
 */
export interface MeResponse {
    /**
     * 
     * @type {string}
     * @memberof MeResponse
     */
    'username': string | null;
    /**
     * 
     * @type {string}
     * @memberof MeResponse
     */
    'userId'?: string;
}
/**
 * 
 * @export
 * @interface SettleRequest
 */
export interface SettleRequest {
    /**
     * 
     * @type {string}
     * @memberof SettleRequest
     */
    'payerUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SettleRequest
     */
    'receiverUserId'?: string;
    /**
     * 
     * @type {number}
     * @memberof SettleRequest
     */
    'amount'?: number;
}
/**
 * 
 * @export
 * @interface SignInRequest
 */
export interface SignInRequest {
    /**
     * 
     * @type {string}
     * @memberof SignInRequest
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignInRequest
     */
    'password'?: string | null;
}
/**
 * 
 * @export
 * @interface SignInResponse
 */
export interface SignInResponse {
    /**
     * 
     * @type {string}
     * @memberof SignInResponse
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SignInResponse
     */
    'token'?: string | null;
}
/**
 * 
 * @export
 * @interface SignUpRequest
 */
export interface SignUpRequest {
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    'password'?: string | null;
}
/**
 * 
 * @export
 * @interface SignUpResponse
 */
export interface SignUpResponse {
    /**
     * 
     * @type {string}
     * @memberof SignUpResponse
     */
    'token'?: string | null;
}
/**
 * 
 * @export
 * @interface UserBalance
 */
export interface UserBalance {
    /**
     * 
     * @type {string}
     * @memberof UserBalance
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserBalance
     */
    'amount'?: number;
}
/**
 * 
 * @export
 * @interface UserBalanceItem
 */
export interface UserBalanceItem {
    /**
     * 
     * @type {string}
     * @memberof UserBalanceItem
     */
    'userId'?: string;
    /**
     * 
     * @type {Array<UserBalance>}
     * @memberof UserBalanceItem
     */
    'balance'?: Array<UserBalance> | null;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignInRequest} [signInRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authSignInPost: async (signInRequest?: SignInRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/sign-in`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signInRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignUpRequest} [signUpRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authSignUpPost: async (signUpRequest?: SignUpRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/sign-up`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signUpRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authMeGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authMeGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authMeGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SignInRequest} [signInRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authSignInPost(signInRequest?: SignInRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignInResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authSignInPost(signInRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authSignInPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SignUpRequest} [signUpRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authSignUpPost(signUpRequest?: SignUpRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignUpResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authSignUpPost(signUpRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authSignUpPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet(options?: RawAxiosRequestConfig): AxiosPromise<MeResponse> {
            return localVarFp.authMeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignInRequest} [signInRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authSignInPost(signInRequest?: SignInRequest, options?: RawAxiosRequestConfig): AxiosPromise<SignInResponse> {
            return localVarFp.authSignInPost(signInRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignUpRequest} [signUpRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authSignUpPost(signUpRequest?: SignUpRequest, options?: RawAxiosRequestConfig): AxiosPromise<SignUpResponse> {
            return localVarFp.authSignUpPost(signUpRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authMeGet(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authMeGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignInRequest} [signInRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authSignInPost(signInRequest?: SignInRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authSignInPost(signInRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignUpRequest} [signUpRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authSignUpPost(signUpRequest?: SignUpRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authSignUpPost(signUpRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * GroupsApi - axios parameter creator
 * @export
 */
export const GroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} groupId 
         * @param {AddUsersRequest} [addUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdAddUserPost: async (groupId: string, addUsersRequest?: AddUsersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupsGroupIdAddUserPost', 'groupId', groupId)
            const localVarPath = `/groups/{groupId}/add-user`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addUsersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdBalancesGet: async (groupId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupsGroupIdBalancesGet', 'groupId', groupId)
            const localVarPath = `/groups/{groupId}/balances`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupId 
         * @param {DeleteUsersRequest} [deleteUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdDeleteUserDelete: async (groupId: string, deleteUsersRequest?: DeleteUsersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupsGroupIdDeleteUserDelete', 'groupId', groupId)
            const localVarPath = `/groups/{groupId}/delete-user`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteUsersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdExpensesGet: async (groupId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupsGroupIdExpensesGet', 'groupId', groupId)
            const localVarPath = `/groups/{groupId}/expenses`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupId 
         * @param {SettleRequest} [settleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdSettlePost: async (groupId: string, settleRequest?: SettleRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupsGroupIdSettlePost', 'groupId', groupId)
            const localVarPath = `/groups/{groupId}/settle`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(settleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateGroupRequest} [createGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsPost: async (createGroupRequest?: CreateGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsApi - functional programming interface
 * @export
 */
export const GroupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} groupId 
         * @param {AddUsersRequest} [addUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsGroupIdAddUserPost(groupId: string, addUsersRequest?: AddUsersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsGroupIdAddUserPost(groupId, addUsersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsGroupIdAddUserPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsGroupIdBalancesGet(groupId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserBalanceItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsGroupIdBalancesGet(groupId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsGroupIdBalancesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} groupId 
         * @param {DeleteUsersRequest} [deleteUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsGroupIdDeleteUserDelete(groupId: string, deleteUsersRequest?: DeleteUsersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsGroupIdDeleteUserDelete(groupId, deleteUsersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsGroupIdDeleteUserDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsGroupIdExpensesGet(groupId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Expense>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsGroupIdExpensesGet(groupId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsGroupIdExpensesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} groupId 
         * @param {SettleRequest} [settleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsGroupIdSettlePost(groupId: string, settleRequest?: SettleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsGroupIdSettlePost(groupId, settleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsGroupIdSettlePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CreateGroupRequest} [createGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupsPost(createGroupRequest?: CreateGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateGroupResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupsPost(createGroupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.groupsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GroupsApi - factory interface
 * @export
 */
export const GroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsApiFp(configuration)
    return {
        /**
         * 
         * @param {string} groupId 
         * @param {AddUsersRequest} [addUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdAddUserPost(groupId: string, addUsersRequest?: AddUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.groupsGroupIdAddUserPost(groupId, addUsersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdBalancesGet(groupId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<UserBalanceItem>> {
            return localVarFp.groupsGroupIdBalancesGet(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupId 
         * @param {DeleteUsersRequest} [deleteUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdDeleteUserDelete(groupId: string, deleteUsersRequest?: DeleteUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.groupsGroupIdDeleteUserDelete(groupId, deleteUsersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdExpensesGet(groupId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Expense>> {
            return localVarFp.groupsGroupIdExpensesGet(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupId 
         * @param {SettleRequest} [settleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsGroupIdSettlePost(groupId: string, settleRequest?: SettleRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.groupsGroupIdSettlePost(groupId, settleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateGroupRequest} [createGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupsPost(createGroupRequest?: CreateGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateGroupResponse> {
            return localVarFp.groupsPost(createGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export class GroupsApi extends BaseAPI {
    /**
     * 
     * @param {string} groupId 
     * @param {AddUsersRequest} [addUsersRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsGroupIdAddUserPost(groupId: string, addUsersRequest?: AddUsersRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsGroupIdAddUserPost(groupId, addUsersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsGroupIdBalancesGet(groupId: string, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsGroupIdBalancesGet(groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupId 
     * @param {DeleteUsersRequest} [deleteUsersRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsGroupIdDeleteUserDelete(groupId: string, deleteUsersRequest?: DeleteUsersRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsGroupIdDeleteUserDelete(groupId, deleteUsersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsGroupIdExpensesGet(groupId: string, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsGroupIdExpensesGet(groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupId 
     * @param {SettleRequest} [settleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsGroupIdSettlePost(groupId: string, settleRequest?: SettleRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsGroupIdSettlePost(groupId, settleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateGroupRequest} [createGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public groupsPost(createGroupRequest?: CreateGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).groupsPost(createGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



