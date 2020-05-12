/* tslint:disable */
/* eslint-disable */
/**
 * PMM QAN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2002Rows,
    InlineResponse2002RowsFromJSON,
    InlineResponse2002RowsFromJSONTyped,
    InlineResponse2002RowsToJSON,
} from './';

/**
 * ReportReply is list of reports per quieryids, hosts etc.
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    offset?: number;
    /**
     * 
     * @type {Array<InlineResponse2002Rows>}
     * @memberof InlineResponse2002
     */
    rows?: Array<InlineResponse2002Rows>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    total_rows?: number;
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
    return InlineResponse2002FromJSONTyped(json, false);
}

export function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'rows': !exists(json, 'rows') ? undefined : ((json['rows'] as Array<any>).map(InlineResponse2002RowsFromJSON)),
        'total_rows': !exists(json, 'total_rows') ? undefined : json['total_rows'],
    };
}

export function InlineResponse2002ToJSON(value?: InlineResponse2002 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
        'rows': value.rows === undefined ? undefined : ((value.rows as Array<any>).map(InlineResponse2002RowsToJSON)),
        'total_rows': value.total_rows,
    };
}


