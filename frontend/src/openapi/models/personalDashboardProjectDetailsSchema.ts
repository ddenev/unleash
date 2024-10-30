/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PersonalDashboardProjectDetailsSchemaInsights } from './personalDashboardProjectDetailsSchemaInsights';
import type { PersonalDashboardProjectDetailsSchemaLatestEventsItem } from './personalDashboardProjectDetailsSchemaLatestEventsItem';
import type { PersonalDashboardProjectDetailsSchemaOnboardingStatus } from './personalDashboardProjectDetailsSchemaOnboardingStatus';
import type { PersonalDashboardProjectDetailsSchemaOwners } from './personalDashboardProjectDetailsSchemaOwners';
import type { PersonalDashboardProjectDetailsSchemaRolesItem } from './personalDashboardProjectDetailsSchemaRolesItem';

/**
 * Project details in personal dashboard
 */
export interface PersonalDashboardProjectDetailsSchema {
    /** Insights for the project, including flag data and project health information. */
    insights: PersonalDashboardProjectDetailsSchemaInsights;
    /** The latest events for the project. */
    latestEvents: PersonalDashboardProjectDetailsSchemaLatestEventsItem[];
    /** The current onboarding status of the project. */
    onboardingStatus: PersonalDashboardProjectDetailsSchemaOnboardingStatus;
    /** The users and/or groups that have the "owner" role in this project. If no such users or groups exist, the list will contain the "system" owner instead. */
    owners: PersonalDashboardProjectDetailsSchemaOwners;
    /** The list of roles that the user has in this project. */
    roles: PersonalDashboardProjectDetailsSchemaRolesItem[];
}
