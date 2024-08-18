import * as dotenv from 'dotenv';
import { beforeAll, describe, it } from "vitest";
import { TheDivision2 } from "../src/games/theDivision2";

dotenv.config()

describe('The Division 2', () => {
    let theDivision2: TheDivision2;

    beforeAll(() => {
        const apiKey = process.env.TRN_API_KEY;

        if(apiKey) {
            theDivision2 = new TheDivision2(apiKey);
        } else {
            throw new Error("TRN_API_KEY not set");
        }
    });

    it('getPlayerProfileStats', async () => {
        const result = await theDivision2.getPlayerProfileStats("psn", "Daltoosh");
    });

    it('searchForPlayer', async () => {
        const result = await theDivision2.searchForPlayer("psn", "Daltoosh");
    });
});