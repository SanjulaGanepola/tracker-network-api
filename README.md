# Tracker Network API

[![NPM Version](https://img.shields.io/npm/v/tracker-network-api.svg)](https://www.npmjs.com/package/tracker-network-api)
[![NPM Downloads](https://img.shields.io/npm/dm/tracker-network-api.svg)](https://www.npmjs.com/package/tracker-network-api)
[![Webpack](https://github.com/SanjulaGanepola/tracker-network-api/actions/workflows/webpack.yaml/badge.svg)](https://github.com/SanjulaGanepola/tracker-network-api/actions/workflows/webpack.yaml)
[![Vitest](https://github.com/SanjulaGanepola/tracker-network-api/actions/workflows/test.yaml/badge.svg)](https://github.com/SanjulaGanepola/tracker-network-api/actions/workflows/test.yaml)

Client for the [Tracker Network API](https://tracker.gg/developers) written in Typescript.

Tracker Network offers a variety of game APIs for third party developers to leverage in building their own applications. This client offers an easy way to use these APIs!

## Supported Game APIs

Listed below are the currently supported game APIs:

* [Apex Legends](https://tracker.gg/developers/docs/titles/apex)
* [CS:GO](https://tracker.gg/developers/docs/titles/csgo)
* [The Division 2](https://tracker.gg/developers/docs/titles/division-2)
* [Splitgate](https://tracker.gg/developers/docs/titles/splitgate)

> [!TIP]
> If you would like to request support for another game, refer to the official issue tracker [here](https://github.com/TrackerNetwork/TRN.Developers/issues) which is managed by the developers of Tracker Network.

## Installation

```sh
npm install tracker-network-api
```

## Authentication

Authenticating with the API requires first creating an application on Tracker Network to then obtain a `TRN-Api-Key`. Follow the full instructions [here](https://tracker.gg/developers/docs/getting-started) to create an app.

## Usage

Running the examples below require using your application's `TRN-Api-Key` which can be saved in a `.env` file such as:

```
TRN_API_KEY=
```

It can then be accessed using:

```ts
const apiKey = process.env.TRN_API_KEY;
```

### Apex Legends

```ts
ApexLegends apexLegends = new ApexLegends(apiKey);

let result = await apexLegends.getPlayerProfileStats("psn", "Daltoosh");
result = await apexLegends.getPlayerStatsSegment("psn", "Daltoosh", "legend");
result = await apexLegends.searchForPlayer("psn", "Daltoosh");
result = await apexLegends.getPlayerMatchHistoryBySession("psn", "Daltoosh");
```

### CS:GO

```ts
Csgo csgo = new Csgo(apiKey);

let result = await csgo.getPlayerProfileStats("steam", "76561198008049283");
result = await csgo.getPlayerStatsSegment("steam", "76561198008049283", "weapon");
result = await csgo.searchForPlayer("steam", "76561198008049283");
```

### The Division 2

```ts
TheDivision2 theDivision2 = new TheDivision2(apiKey);

let result = await theDivision2.getPlayerProfileStats("ubi", "Solivictus");
result = await theDivision2.searchForPlayer("ubi", "Solivictus");
```

### Splitgate

```ts
Splitgate splitgate = new Splitgate(apiKey);

let result = await splitgate.getPlayerProfileStats("steam", "76561198085274423");
result = await splitgate.getPlayerMatches("steam", "76561198085274423");
result = await splitgate.getMatch("steam", "5c4639d5-c1cd-4dc7-a15d-5c9d9a01480f");
result = await splitgate.getPlayerStatsSegment("steam", "76561198085274423", "gamemode", "gamemode", "11");
result = await splitgate.searchForPlayer("steam", "76561198085274423");
```

## Maintainers

* [@SanjulaGanepola](https://github.com/SanjulaGanepola)

Powered By [Tracker Network](https://tracker.gg)