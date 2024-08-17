import { TrackerNetworkAPI } from "../trackerNetworkAPI";

export class SplitGate extends TrackerNetworkAPI {
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/splitgate/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    async getPlayerMatches(platform: string, platformUserIdentifier: string) {
        return this.get(`/splitgate/standard/matches/${platform}/${platformUserIdentifier}`)
    }

    async getMatch(platform: string, matchId: string) {
        return this.get(`/splitgate/matches/${platform}/direct/${matchId}`, 'v1')
    }

    async getPlayerStatsSegment(platform: string, platformUserIdentifier: string, segmentType: string, queue?: string, season?: string) {
        let endpoint = new URL(`/splitgate/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`);

        if (queue) {
            endpoint.searchParams.append('queue', queue);
        }

        if (season) {
            endpoint.searchParams.append('season', season);
        }

        return this.get(endpoint.toString());
    }

    async searchForPlayer(platform: string, query: string) {
        return this.get(`/splitgate/standard/search?platform=${platform}&query=${query}`);
    }
}