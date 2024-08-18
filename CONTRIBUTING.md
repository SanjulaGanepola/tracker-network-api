Contributing to Tracker Network API

Thank you for considering contributing to the Tracker Network API.

> [!TIP]
> If you have any questions about contributing, open an issue [here](https://github.com/SanjulaGanepola/tracker-network-api/issues).

## Development

### Visual Studio Code

1. Fork the repository and clone it to your local machine
2. Open the repository in Visual Studio Code
3. Install the recommended extensions listed below
4. Create a new branch (ie. `feature/...`, `fix/...`, `test/...`)
4. Commit changes and push to your fork
5. Create a pull request

### Recommended Extensions

* [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## Testing

To run the unit tests, use the following command:

```sh
npm run test
```

To run the unit test and generate a code coverage report, use the following command:

```sh
npm run coverage
```

To debug the tests, use the actions provided by the Vitest extension in the editor or Test Explorer view.

## Publishing

Publishing is handled by the `Publish to NPM` GitHub workflow. Upon creating a new release on GitHub, this workflow will be triggered and a new version will be pushed to the NPM registry. This process will be initiated by code owners.