import { TrackerNetworkAPI } from "../trackerNetworkAPI";

/**
 * Apex Legends API
 * * Publisher: Electronic Arts
 * * Platforms: `origin`, `steam`, `xbl`, `psn`
 */
export class ApexLegends extends TrackerNetworkAPI {
    /**
     * Get an Apex Legends player's profile stats.
     * 
     * Retrieve career stats for an Apex Legends player.
     * 
     * @param platform The platform slug, one of: 'origin', 'xbl', 'psn'.
     * @param platformUserIdentifier The user's handle on the platform, ie. an Origin ID, Xbox Live gamertag, PSN ID, etc.
     * @returns 
     */
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    /**
     * Get a stats segment for an Apex Legends player.
     * 
     * Retrieve a portion of the stats for an Apex Legends player. We divide stats into logical segments, such as playlists, seasons, heroes, etc. (whatever happens to be useful for a specific game.)
     * 
     * @param platform The platform slug, must be one of 'battlenet', 'psn', 'xbl'.
     * @param platformUserIdentifier The user's handle on Battle.net (including #) or a PSN ID, or Xbox Gamertag.
     * @param segmentType The type of segment you want to return, ie. 'legend'.
     * @returns 
     */
    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`);
    }

    /**
     * Search for an Apex Legends player.
     * 
     * Allows you to perform a search for an Apex Legends player using a unique identifier (Xbox Live gamertag, PSN ID, or Origin ID.) The result set is not guaranteed to be an exhaustive list of players that match the search.
     * 
     * @param platform The platform slug, ie. 'origin', 'xbl', 'psn'.
     * @param query The user's handle on the platform, ie. an Origin ID, Xbox Live gamertag, PSN ID, etc.
     * @returns 
     */
    async searchForPlayer(platform: string, query: string) {
        return this.get(`/apex/standard/search?platform=${platform}&query=${query}`);
    }

    /**
     * Get an Apex Legends player's match history broken up by session.
     * 
     * Retrieve match history broken up by gaming session. A session is a cluster of games played around the same time (as in, a gaming session.) 45 minutes or more between matches makes a new session.
     * 
     * @param platform The platform slug, one of: 'origin', 'xbl', 'psn'.
     * @param platformUserIdentifier The user's handle on the platform, ie. an Origin ID, Xbox Live gamertag, PSN ID, etc.
     * @returns 
     */
    async getPlayerMatchHistoryBySession(platform: string, platformUserIdentifier: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}/sessions`);
    }
}