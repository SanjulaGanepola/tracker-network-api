import * as dotenv from 'dotenv';
import { beforeAll, describe, it } from "vitest";
import { ApexLegends } from "../src/games/apexLegends";

dotenv.config()

describe('Apex Legends', () => {
    let apexLegends: ApexLegends;

    beforeAll(() => {
        const apiKey = process.env.TRN_API_KEY;

        if(apiKey) {
            apexLegends = new ApexLegends(apiKey);
        } else {
            throw new Error("TRN_API_KEY not set");
        }
    });

    it('getPlayerProfileStats', async () => {
        const result = await apexLegends.getPlayerProfileStats("psn", "Daltoosh");
    });

    it('getPlayerStatsSegment', async () => {
        const result = await apexLegends.getPlayerStatsSegment("psn", "Daltoosh", "legend");
    });

    it('searchForPlayer', async () => {
        const result = await apexLegends.searchForPlayer("psn", "Daltoosh");
    });

    it('getPlayerMatchHistoryBySession', async () => {
        const result = await apexLegends.getPlayerMatchHistoryBySession("psn", "Daltoosh");
    });
});