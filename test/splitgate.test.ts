import * as dotenv from 'dotenv';
import { beforeAll, describe, expect, it } from "vitest";
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
        const result = await splitgate.getPlayerProfileStats("steam", "76561198085274423");
        expect(result.status).toEqual(200);
    });

    it('getPlayerMatches', async () => {
        const result = await splitgate.getPlayerMatches("steam", "76561198085274423");
        expect(result.status).toEqual(200);
    });

    it('getMatch', async () => {
        const result = await splitgate.getMatch("steam", "5c4639d5-c1cd-4dc7-a15d-5c9d9a01480f");
        expect(result.status).toEqual(200);
    });

    it('getPlayerStatsSegment', async () => {
        const result = await splitgate.getPlayerStatsSegment("steam", "76561198085274423", "gamemode", "gamemode", "11");
        expect(result.status).toEqual(200);
    });

    it('searchForPlayer', async () => {
        const result = await splitgate.searchForPlayer("steam", "76561198085274423");
        expect(result.status).toEqual(200);
    });
});