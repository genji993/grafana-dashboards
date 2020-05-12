/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineObject52
 */
export interface InlineObject52 {
    /**
     * pmm-agent ID where to run this Action.
     * @type {string}
     * @memberof InlineObject52
     */
    pmm_agent_id?: string;
    /**
     * Service ID for this Action. Required.
     * @type {string}
     * @memberof InlineObject52
     */
    service_id?: string;
    /**
     * Table name. Required. May additionally contain a database name.
     * @type {string}
     * @memberof InlineObject52
     */
    table_name?: string;
    /**
     * Database name. Required if not given in the table_name field.
     * @type {string}
     * @memberof InlineObject52
     */
    database?: string;
}

export function InlineObject52FromJSON(json: any): InlineObject52 {
    return InlineObject52FromJSONTyped(json, false);
}

export function InlineObject52FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject52 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pmm_agent_id': !exists(json, 'pmm_agent_id') ? undefined : json['pmm_agent_id'],
        'service_id': !exists(json, 'service_id') ? undefined : json['service_id'],
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'database': !exists(json, 'database') ? undefined : json['database'],
    };
}

export function InlineObject52ToJSON(value?: InlineObject52 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pmm_agent_id': value.pmm_agent_id,
        'service_id': value.service_id,
        'table_name': value.table_name,
        'database': value.database,
    };
}


