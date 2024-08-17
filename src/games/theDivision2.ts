import { TrackerNetworkAPI } from "../trackerNetworkAPI";

export class TheDivision2 extends TrackerNetworkAPI {
    async getPlayerProfileStats(platform: string, platformUserIdentifier: string) {
        return this.get(`/division-2/standard/profile/${platform}/${platformUserIdentifier}`)
    }

    async searchForPlayer(platform: string, query: string) {
        return this.get(`/division-2/standard/search?platform=${platform}&query=${query}`);
    }
}