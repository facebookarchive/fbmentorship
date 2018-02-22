# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](CODE_OF_CONDUCT.md). Test.

There are two areas you can contribute to:

1. As part of your open source training.
1. Making the overall mentorship content better.

## Workflow and Pull Requests

We actively welcome your pull requests.

1. Fork the repo and create your branch from `master`.
1. If you've added code that should be tested, add tests and make sure the test suite passes.
1. If you've made documentation fixes, we love you!
1. Ensure tests pass on Circle CI.

## Testing Code Changes

If you make code changes, we expect you to detail how you tested the changes when your submit the pull request.

You can send a link to a [JSFiddle](https://jsfiddle.net/) where you show a working test. Here's an example fiddle showing [sum functionality](https://jsfiddle.net/caabernathy/5mz4qusa/).

If you add new functionality, we expect you to add a new test in the `js/__tests__` folder. These are [Jest](http://facebook.github.io/jest/) tests. See existing tests as examples.

If you're not familiar with Jest, and/or you aren't ready to install it, just add a test anyway. The continuous integration tests (via Circle CI) will run to check this. If your tests fail, the PR will not be accepted.

Alternatively, you can set up Jest and get brownie points for mentioning in the pull request that you've run the local test suite.

**Jest testing setup**

You only need to do the following one time:

1. Install [Brew](http://brew.sh/)
2. Install Node
```sh
brew install node
```
3. Install Watchman
```sh
brew install watchman
```
4. Install Yarn
```sh
npm install -g yarn
```


Go to the top-level folder for this repository on your machine and run the following command:

```sh
yarn install
```

**Running Jest tests**

In your top-level folder, run the following whenever you want to test your changes:

```sh
yarn test
```
You should see something similar to the following:

```sh
$ yarn test
Using globally installed version of Yarn
yarn test v0.21.2
$ jest
 PASS  js/__tests__/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.816s, estimated 1s
Ran all test suites.
✨  Done in 1.68s.
```
Expect to see more tests listed as more tests are added.

#### Additional workflow for any website changes

If you are making changes to the website or documentation, test the website
folder and run the server to check if your changes are being displayed
accurately.

1. Locate to the website directory and install any website specific dependencies
   by typing in `yarn`. Following steps are to be followed for this purpose from
   the root directory.
   ```sh
   cd website
   yarn
   ```
2. You can run a development server to check if the changes you made are being
   displayed accurately by running `yarn start` in the website directory.

## Contributor License Agreement ("CLA")
In order to accept a pull request for improving the training content, we need you to
submit a CLA. You only need to do this once to work on any of Facebook's open source
projects.

Complete your CLA here: <https://code.facebook.com/cla>

## License

By contributing to this project, you agree that your contributions will be licensed under its [MIT license](LICENSE).
