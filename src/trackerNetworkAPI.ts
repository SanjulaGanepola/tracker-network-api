import axios from "axios";

const DEFAULT_API_VERSION = "v2";

export class TrackerNetworkAPI {
    private static url: string = "https://public-api.tracker.gg";
    private version: string;
    private apiKey: string;

    constructor(apiKey: string, version: string = DEFAULT_API_VERSION) {
        this.apiKey = apiKey;
        this.version = version;
    }

    getApiKey() {
        return this.apiKey;
    }

    setApiKey(apiKey: string) {
        this.apiKey = apiKey;
    }

    async get(endpoint: string) {
        return await axios.get(
            `${TrackerNetworkAPI.url}/${this.version}${endpoint}`,
            {
                headers: {
                    "TRN-Api-Key": this.getApiKey(),
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip"
                }
            }
        );
    }
}