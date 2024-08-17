import { TrackerNetworkAPI } from "../trackerNetworkAPI";

export class Csgo extends TrackerNetworkAPI {
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/csgo/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string) {
        return this.get(`/csgo/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`);
    }

    async searchForPlayer(platform: string, query: string) {
        return this.get(`/csgo/standard/search?platform=${platform}&query=${query}`);
    }
}