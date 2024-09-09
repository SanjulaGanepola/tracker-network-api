import axios from "axios";

const DEFAULT_API_VERSION = "v2";

/**
 * Tracker Network API 
 */
export class TrackerNetworkAPI {
    /**
     * The API url.
     */
    private static url: string = "https://public-api.tracker.gg";

    /**
     * The API version.
     */
    private version: string;

    /**
     * The API key (`TRN-Api-Key`).
     */
    private apiKey: string;

    /**
     * Construct a `TrackerNetworkAPI` object.
     * 
     * @param apiKey The API key.
     * @param version The API version which is `v2` by default.
     */
    constructor(apiKey: string, version: string = DEFAULT_API_VERSION) {
        this.apiKey = apiKey;
        this.version = version;
    }

    /**
     * Send a `GET` request to the Tracker Network API and get the API response.
     * 
     * @param endpoint The API endpoint.
     * @param version The API version.
     * @param searchParams The search parameters.
     * @returns 
     */
    async get(endpoint: string, version?: string, searchParams?: { [key: string]: string }) {
        return await axios.get(
            `${TrackerNetworkAPI.url}/${version ? version : this.version}${endpoint}${searchParams ? `?${new URLSearchParams(searchParams).toString()}` : ""}`,
            {
                headers: {
                    "TRN-Api-Key": this.apiKey,
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip"
                }
            }
        );
    }

    /**
     * Get the API version.
     * 
     * @returns The API version.
     */
    public getVersion() {
        return this.version;
    }

    /**
     * Get the API key (`TRN-Api-Key`).
     * 
     * @returns The API key.
     */
    public getApiKey() {
        return this.apiKey;
    }
}