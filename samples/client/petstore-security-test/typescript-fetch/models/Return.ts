// tslint:disable
/**
 * OpenAPI Petstore *_/ ' \" =end -- \\r\\n \\n \\r
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  *_/ ' \" =end --       
 *
 * OpenAPI spec version: 1.0.0 *_/ ' \" =end -- \\r\\n \\n \\r
 * Contact: something@something.abc *_/ ' \" =end -- \\r\\n \\n \\r
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 * Model for testing reserved words  *_/ ' \" =end -- \\r\\n \\n \\r
 * @export
 * @interface Return
 */
export interface Return {
    /**
     * property description  *_/ ' \" =end -- \\r\\n \\n \\r
     * @type {number}
     * @memberof Return
     */
    _return?: number;
}

export function ReturnFromJSON(json: any): Return {
    return {
        '_return': !exists(json, 'return') ? undefined : json['return'],
    };
}

export function ReturnToJSON(value?: Return): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'return': value._return,
    };
}

