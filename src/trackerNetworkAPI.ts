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

    async get(endpoint: string, version?: string, searchParams?: { [key: string]: string }) {
        return await axios.get(
            `${TrackerNetworkAPI.url}/${version ? version : this.version}${endpoint}${searchParams ? new URLSearchParams(searchParams).toString() : ""}`,
            {
                headers: {
                    "TRN-Api-Key": this.apiKey,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip"
                }
            }
        );
    }

    public getVersion() {
        return this.version;
    }

    public getApiKey() {
        return this.apiKey;
    }
}