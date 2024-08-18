import { TrackerNetworkAPI } from "../trackerNetworkAPI";

export class ApexLegends extends TrackerNetworkAPI {
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`);
    }

    async searchForPlayer(platform: string, query: string) {
        return this.get(`/apex/standard/search?platform=${platform}&query=${query}`);
    }

    async getPlayerMatchHistoryBySession(platform: string, platformUserIdentifier: string) {
        return this.get(`/apex/standard/profile/${platform}/${platformUserIdentifier}/sessions`);
    }
}