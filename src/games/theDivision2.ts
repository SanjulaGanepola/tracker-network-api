import { TrackerNetworkAPI } from "../trackerNetworkAPI";

/**
 * The Division 2
 * * Publisher: Ubisoft
 * * Platforms: `ubi`, `xbl`, `psn`
 */
export class TheDivision2 extends TrackerNetworkAPI {
    /**
     * Get a Division 2 player's profile stats.
     * 
     * Retrieve career stats for an Division 2 player.
     * 
     * @param platform The platform slug, must be one of 'ubi', 'psn', 'xbl'.
     * @param platformUserIdentifier The user's handle on the platform, ie. a Ubisoft username, PSN ID, Xbox Live gamertag, etc.
     * @returns 
     */
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/division-2/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    /**
     * Search for a Division 2 player.
     * 
     * Allows you to perform a search for a Division 2 player using a unique identifier (Xbox Live gamertag, PSN ID, or Ubisoft username.) The result set is not guaranteed to be an exhaustive list of players that match the search.
     * 
     * @param platform The platform slug, must be one of 'ubi', 'psn', 'xbl'.
     * @param query The user's handle on the platform, ie. a Ubisoft username, PSN ID, Xbox Live gamertag, etc.
     * @returns 
     */
    async searchForPlayer(platform: string, query: string) {
        return this.get(`/division-2/standard/search?platform=${platform}&query=${query}`);
    }
}