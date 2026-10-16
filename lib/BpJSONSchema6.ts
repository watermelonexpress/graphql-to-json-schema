import { JSONSchema6 } from 'json-schema'

export type BpJSONSchema6 = JSONSchema6 & { isDeprecated?: boolean, deprecationReason?: string | null }
