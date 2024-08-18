import * as dotenv from 'dotenv';
import { beforeAll, describe, it } from "vitest";
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
        const result = await csgo.getPlayerProfileStats("steam", "Daltoosh");
    });

    it('getPlayerStatsSegment', async () => {
        const result = await csgo.getPlayerStatsSegment("steam", "Daltoosh", "map");
    });

    it('searchForPlayer', async () => {
        const result = await csgo.searchForPlayer("steam", "Daltoosh");
    });
});