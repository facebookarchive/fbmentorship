---
id: contributing-workflow
title: Contributing Workflow
sidebar_label: Workflow
---

Once you've identified a good project to work on as well as an issue, then it's time to get started with your contibution.

The general steps you want to follow are:

1. **Claim the issue**: Let the project owner and community know that you want to tackle the issue. You can comment on an existing issue or create a new one if it doesn't exist.
1. **Discuss your solution**: Get buy in from the community by outlining how you intend to solve the issue. This may prevent unnecessary changes down the line.
1. **Work on your changes**: Fork the repository, clone your fork locally, and implement your changes.
1. **Create a pull request**: Push your changes to your clone of the repo then create a pull request to the original repo.
1. **Make review changes**: Update your work based on any review feedback.

If you completed the [initial training](ContributingGettingStarted.md#initial-training) then you should be familiar with the workflow involved with making your changes. We've provided them here in case you need a reference or more details.

## Implementation Workflow

### Fork the GitHub repository

Follow these [GitHub instructions](https://help.github.com/articles/fork-a-repo/) to fork the repository. A fork is basically a copy of the original repository. You want to work on your own copy so you can make changes without affecting the original project.

### Clone your fork

Example for this project:

```bash
git clone https://github.com/YOUR-USERNAME/fbmentorship
```

Where `YOUR-USERNAME` should be replaced with your GitHub username.

### Create a branch

You can create a branch either on [GitHub](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) or via the command line. You're likely going to want to do this on the command line since you've already created a local clone of your fork in the previous step.

Go to the directory where you cloned your fork of the repository and run the following:

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

### Make your changes

Using your favorite editor and tools related to the project, make code changes. Always keep in mind the contributing guidelines for a project. For example, you can find [React Native's guidelines here](https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md).

Typically the guidelines should give you info on style guides and testing requirements.

### Test your changes

You'll want to make sure your code is working per instructions for the project.

### Commit your changes locally

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

### Initiate the pull request

Now that your changes are up on your cloned repository, you can initiate a pull request to the original project. If this is your first pull request, you may want to run it by your mentor to get their feedback.

Check out docs on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/) for more details.

When you make a pull request, be sure to conform to any guidelines or templates from the original project. Some projects require you to give details test plan info. The more info you give, the easier you'll make the reviewer's life.

Once you've gone through this process, there should be a new pull request in the original project.

### Make any review changes

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

### Keeping your fork up to date

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

## Additional Resources

You can also check out these helpful resources if you run into any issues:

* [Pro Git book](https://git-scm.com/book/en/v2) by Scott Chacon and Ben Straub.

* [Using the Fork-and-Branch Git Workflow](http://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/) by Scott Lowe.

* [Beginning Git](https://videos.raywenderlich.com/courses/86-beginning-git/lessons/1) and [Mastering Git](https://videos.raywenderlich.com/courses/87-mastering-git/lessons/1) video tutorial from [raywenderlich.com](https://www.raywenderlich.com/).

* [Git Cheatsheet](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf) from GitHub.
