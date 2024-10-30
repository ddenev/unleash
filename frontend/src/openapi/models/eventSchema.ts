/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { EventSchemaData } from './eventSchemaData';
import type { EventSchemaPreData } from './eventSchemaPreData';
import type { TagSchema } from './tagSchema';
import type { EventSchemaType } from './eventSchemaType';

/**
 * An event describing something happening in the system
 */
export interface EventSchema {
    /** The time the event happened as a RFC 3339-conformant timestamp. */
    createdAt: string;
    /** Which user created this event */
    createdBy: string;
    /**
     * The is of the user that created this event
     * @nullable
     */
    createdByUserId?: number | null;
    /**
     * Extra associated data related to the event, such as feature flag state, segment configuration, etc., if applicable.
     * @nullable
     */
    data?: EventSchemaData;
    /**
     * The feature flag environment the event relates to, if applicable.
     * @nullable
     */
    environment?: string | null;
    /**
     * The name of the feature flag the event relates to, if applicable.
     * @nullable
     */
    featureName?: string | null;
    /**
     * The ID of the event. An increasing natural number.
     * @minimum 1
     */
    id: number;
    /**
     * The concise, human-readable name of the event.
     * @nullable
     */
    label?: string | null;
    /**
     * Data relating to the previous state of the event's subject.
     * @nullable
     */
    preData?: EventSchemaPreData;
    /**
     * The project the event relates to, if applicable.
     * @nullable
     */
    project?: string | null;
    /**
     * A markdown-formatted summary of the event.
     * @nullable
     */
    summary?: string | null;
    /**
     * Any tags related to the event, if applicable.
     * @nullable
     */
    tags?: TagSchema[] | null;
    /** What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is */
    type: EventSchemaType;
}
