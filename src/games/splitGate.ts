import { TrackerNetworkAPI } from "../trackerNetworkAPI";

/**
 * Splitgate API
 * * Publisher: 1047 Games
 * * Platforms: `steam`, `xbl`, `psn`
 */
export class Splitgate extends TrackerNetworkAPI {
    /**
     * Get a Splitgate player's profile stats.
     * 
     * Retrieve career stats for a Splitgate player.
     * 
     * @param platform The platform slug, must be 'steam', 'xbl' or 'psn'.
     * @param platformUserIdentifier The user's SteamID64, Xbox Gamertag, or PSN Id.
     * @returns 
     */
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/splitgate/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    /**
     * Get a Splitgate player's Matches.
     * 
     * Retrieve all matches for a Splitgate Player.
     * 
     * @param platform The platform slug, must be 'steam', 'xbl' or 'psn'.
     * @param platformUserIdentifier The user's SteamID64, Xbox Gamertag, or PSN Id.
     * @returns 
     */
    async getPlayerMatches(platform: string, platformUserIdentifier: string) {
        return this.get(`/splitgate/standard/matches/${platform}/${platformUserIdentifier}`)
    }

    /**
     * Get a Match.
     * 
     * Retrieve a Detailed Match Report.
     * 
     * @param platform The platform slug, must be 'steam', 'xbl' or 'psn'.
     * @param matchId The Match ID.
     * @returns 
     */
    async getMatch(platform: string, matchId: string) {
        return this.get(`/splitgate/matches/${platform}/direct/${matchId}`, 'v1')
    }

    /**
     * Get stats segments of a Splitgate player's profile
     * 
     * Retrieves additional stat segments for a particular player.
     * 
     * @param platform The platform slug, must be 'steam', 'xbl' or 'psn'.
     * @param platformUserIdentifier The user's SteamID64, Xbox Gamertag, or PSN Id.
     * @param segmentType The type of the segments to return. Can be 'weapon', 'map', 'gamemode', 'playlist', or 'overview'.
     * @param queue Can be empty, 'ranked' or 'social'.
     * @param season To get season specific data for the player. Keep empty for lifetime. Weapon data is only available for lifetime.
     * @returns 
     */
    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string, queue?: string, season?: string) {
        const endpoint = `/splitgate/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`;

        const searchParams: { [key: string]: string } = {};
        if (queue) {
            searchParams.queue = queue;
        }
        if (season) {
            searchParams.season = season;
        }

        return await this.get(endpoint, undefined, searchParams);
    }

    /**
     * Search for a Splitgate player.
     * 
     * Allows you to perform a search for a Splitgate player using a unique identifier (a Steam ID, Steam Community URL, Steam Vanity Username, etc.) The result set is not guaranteed to be an exhaustive list of players that match the search.
     * 
     * @param platform The platform slug, must be 'steam', 'xbl' or 'psn'.
     * @param query The user's SteamID64, Xbox Gamertag, or PSN Id. For Steam it can also be their steam community url or vanity name.
     * @returns 
     */
    async searchForPlayer(platform: string, query: string) {
        return this.get(`/splitgate/standard/search?platform=${platform}&query=${query}`);
    }
}