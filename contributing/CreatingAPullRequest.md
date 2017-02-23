# How to Create a Pull Request

Instructions on creating a pull request.

Here's [a good resource](http://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/) that explains the workflow in general.

You may also want to keep this [Git cheatsheet](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf) handy if you ever get stuck or just need a reference.

## Fork the GitHub repository

[GitHub reference doc](https://help.github.com/articles/fork-a-repo/)

## Clone your fork

Example for this project:

```bash
git clone https://github.com/YOUR-USERNAME/fbmentorship
```

## Create a branch

[GitHub reference](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

The GitHub doc shows you how to do this via their website. You can also do this on the command line. First go to the directory where you cloned your fork of the repository.

```bash
git checkout -b SOME-BRANCH-NAME
```

Replace `FEATURE-NAME` with something that describes the enhancement of fix your'e making. For example if you're adding Android documentation for native modules in React Native, you could name your branch `android-add-native-modules-doc`.

After you run this command you'll be switched to the newly created branch. The command above is equivalent to the following:

```bash
git branch SOME-BRANCH-NAME
git checkout SOME-BRANCH-NAME
```

The first command creates a new branch and the second switches to the specified branch.

## Make your changes

Using your favorite editor and tools related to the project, make code changes. Always keep in mind the contributing guidelines for a project. For example, you can find [React Native's guidelines here](https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md).

Typically the guidelines should give you info on style guides and testing requirements.

## Test your changes

You'll want to make sure your code is working per instructions for the project.

## Commit your changes locally

You can do this multiple times before you're completely done.

```bash
git add LIST-OF-CHANGED-FILES
git commit -m "some commit message"
```

Whenever you're ready to send over your pull request, rebase to squash any multiple commits into one.

```bash
git rebase
```

Check out this [GitHub reference](https://help.github.com/articles/using-git-rebase-on-the-command-line/) for more info and advice on rebasing.

## Push your local changes to your cloned repo

Run the following command to push your local changes up to GitHub:

```bash
git push origin SOME-BRANCH-NAME
```

Replace `SOME-BRANCH-NAME` with the actual name of your branch.

## Initiate the pull request

Now that your changes are up on your cloned repository, you can initiate a pull request to the original project.

Check out docs on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/) for more details.

When you make a pull request, be sure to conform to any guidelines or templates from the original project. Some projects require you to give details test plan info. The more info you give, the easier you'll make the reviewer's life.

Once you've gone through this process, there should be a new pull request in the original project.

## Make any review changes

At this point it's in the reviewer's plate. They may come back with changes after reviewing your code.

Be sure to visit your pull request frequently or pay attention to GitHub notifications to see if there are any required changes.

If you've been asked to make changes, go back to the branch you were working on:

```bash
git checkout SOME-BRANCH-NAME
```

Then make your changes, commit them locally, then push them up to your repository.

```bash
git add CHANGED-FILES
git commit -m "some message"
git push origin SOME-BRANCH-NAME
```

Replace `SOME-BRANCH-NAME` with the actual name of your branch.

## Keeping your fork up to date

[GitHub reference doc](https://help.github.com/articles/syncing-a-fork/)

Before you can sync your fork with an upstream repository, you must [configure a remote that points to the upstream repository](https://help.github.com/articles/configuring-a-remote-for-a-fork/) in Git.

Once you're done there, run the following commands to keep your fork and your feature branch up to date with any changes upstream:

```bash
git fetch upstream
git checkout master
git rebase upstream/master
git push origin master
git checkout feature-branch
git rebase master
```
