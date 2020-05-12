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
import {
    V1InventoryAgentsChangeExternalExporterCommon,
    V1InventoryAgentsChangeExternalExporterCommonFromJSON,
    V1InventoryAgentsChangeExternalExporterCommonFromJSONTyped,
    V1InventoryAgentsChangeExternalExporterCommonToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineObject22
 */
export interface InlineObject22 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject22
     */
    agent_id?: string;
    /**
     * 
     * @type {V1InventoryAgentsChangeExternalExporterCommon}
     * @memberof InlineObject22
     */
    common?: V1InventoryAgentsChangeExternalExporterCommon;
}

export function InlineObject22FromJSON(json: any): InlineObject22 {
    return InlineObject22FromJSONTyped(json, false);
}

export function InlineObject22FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject22 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_id': !exists(json, 'agent_id') ? undefined : json['agent_id'],
        'common': !exists(json, 'common') ? undefined : V1InventoryAgentsChangeExternalExporterCommonFromJSON(json['common']),
    };
}

export function InlineObject22ToJSON(value?: InlineObject22 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_id': value.agent_id,
        'common': V1InventoryAgentsChangeExternalExporterCommonToJSON(value.common),
    };
}


