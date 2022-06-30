#OPERATOR

## Development

please run `yarn global add lerna` before run npm-script

### Commands

| Command               | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| `yarn add -g lerna`   | install lerna globally for run our monorepo project                        |
| `yarn`                | install dependencies                                                       |
| `yarn start:customer` | run the customer app with react hot reloading and electron live restarting |
| `yarn start:operator` | run the operator app with react hot reloading and electron live restarting |
| `yarn build:customer` | bundle customer package for production                                     |
| `yarn build:operator` | bundle operator package for production |
| `yarn test`           | run unit tests in watch mode                                               |
| `yarn lint`           | run typescript and eslint syntax checking                                  |
| `yarn husky-config`   | install husky and create precommit file                                    |
| `yarn format`         | format code using prettier                                                 |

### Tech Stack
- [Lerna](https://github.com/lerna/lerna): optimizes the workflow around managing multi-package repositories with git and npm.
- [Typescript](https://github.com/microsoft/TypeScript): increased productivity with a typed language
- [ReactJS](https://github.com/facebook/react/): declarative UI library for JavaScript
- [react-i18next](https://github.com/i18next/react-i18next): support for multiple languages (english/spanish included)
- [Prettier](https://github.com/prettier/prettier): keep code format consistent
- [ESLint](https://github.com/eslint/eslint): follow code quality best practices
- [Renovate Bot](https://github.com/renovatebot/renovate): automate dependency upgrades via GitHub bot(to do)
- [Jest](https://github.com/facebook/jest): delightful JavaScript testing (to do)
- [React Testing Library](https://github.com/testing-library/react-testing-library): React specific testing utilities (to do)
- [CodeCov](https://codecov.io/): maintain quality of unit tests(to do)
- [Testcafe](https://github.com/DevExpress/testcafe): End-to-end is important(to do)
