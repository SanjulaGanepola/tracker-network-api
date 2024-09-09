import * as dotenv from 'dotenv';
import { beforeAll, describe, expect, it } from "vitest";
import { Csgo } from "../src/games/csgo";

dotenv.config()

describe('CS:GO', () => {
    let csgo: Csgo;

    beforeAll(() => {
        const apiKey = process.env.TRN_API_KEY;

        if(apiKey) {
            csgo = new Csgo(apiKey);
        } else {
            throw new Error("TRN_API_KEY not set");
        }
    });

    it('getPlayerProfileStats', async () => {
        const result = await csgo.getPlayerProfileStats("steam", "76561198008049283");
        expect(result.status).toEqual(200);
    });

    it('getPlayerStatsSegment', async () => {
        const result = await csgo.getPlayerStatsSegment("steam", "76561198008049283", "weapon");
        expect(result.status).toEqual(200);
    });

    it('searchForPlayer', async () => {
        const result = await csgo.searchForPlayer("steam", "76561198008049283");
        expect(result.status).toEqual(200);
    });
});