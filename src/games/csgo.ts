import { TrackerNetworkAPI } from "../trackerNetworkAPI";

/**
 * CS:GO API
 * 
 * * Publisher: Valve
 * * Platforms: `steam`
 */
export class Csgo extends TrackerNetworkAPI {
    /**
     * Get a CSGO player's profile stats.
     * 
     * Retrieve career stats for an CSGO player.
     * 
     * @param platform The platform slug, must be 'steam'.
     * @param platformUserIdentifier The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc.
     * @returns 
     */
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/csgo/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    /**
     * Get a stats segment for a CSGO player.
     * 
     * Retrieve a portion of the stats for a CSGO player. We divide stats into logical segments, such as playlists, seasons, heroes, etc. (whatever happens to be useful for a specific game.)
     * 
     * @param platform The platform slug, must be 'steam'.
     * @param platformUserIdentifier The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc.
     * @param segmentType The type of segment you want to return, ie. 'map', or 'weapon'.
     * @returns 
     */
    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string) {
        return this.get(`/csgo/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`);
    }

    /**
     * Search for a CSGO player.
     * 
     * Allows you to perform a search for a CSGO player using a unique identifier (a Steam ID, Steam Community URL, Steam Vanity Username, etc.) The result set is not guaranteed to be an exhaustive list of players that match the search.
     * 
     * @param platform The platform slug, must be 'steam'.
     * @param query The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc.
     * @returns 
     */
    async searchForPlayer(platform: string, query: string) {
        return this.get(`/csgo/standard/search?platform=${platform}&query=${query}`);
    }
}