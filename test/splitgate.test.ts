import * as dotenv from 'dotenv';
import { beforeAll, describe, it } from "vitest";
import { Splitgate } from "../src/games/splitgate";

dotenv.config()

describe('Splitgate', () => {
    let splitgate: Splitgate;

    beforeAll(() => {
        const apiKey = process.env.TRN_API_KEY;

        if(apiKey) {
            splitgate = new Splitgate(apiKey);
        } else {
            throw new Error("TRN_API_KEY not set");
        }
    });

    it('getPlayerProfileStats', async () => {
        const result = await splitgate.getPlayerProfileStats("steam", "Daltoosh");
    });

    it('getPlayerMatches', async () => {
        const result = await splitgate.getPlayerMatches("steam", "Daltoosh");
    });

    it('getMatch', async () => {
        const result = await splitgate.getMatch("steam", "82749201");
    });

    it('getPlayerStatsSegment', async () => {
        const result = await splitgate.getPlayerStatsSegment("steam", "Daltoosh", "map", "ranked", "11");
    });

    it('searchForPlayer', async () => {
        const result = await splitgate.searchForPlayer("steam", "Daltoosh");
    });
});