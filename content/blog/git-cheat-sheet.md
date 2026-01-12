---
title: "Git Cheat Sheet"
description: "Everything you need to know to start your hill walking journey safely and confidently."
image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800"
category: "Beginner"
date: "2024-11-15"
author: "Sarah Mitchell"
---

### What is Git

Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers who are developing software collaboratively. Git maintains a local copy of a repository, a.k.a. repo, with history and version-tracking abilities, independent of network access or a central server. A repo is stored on each computer in a standard directory with additional, hidden files to provide version control capabilities.

### What is Github

GitHub is a cloud-based platform that allows developers to store, share, and collaborate on code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. It is commonly used to host open source software development projects.

### Configurations

First set some configuration settings to work with Git. If you've signed up to Github use those settings so that they can interact with each other.
`git config --global user.name "Your Username"` //_The username you use on Github_
`git config --global user.email "Your email"` //_The email you use on Github_
`git config --global color.ui true` //_highlights the git code for easier reading_.
`git config --list` //_Lists your git config settings - global, default settings used in all git repros_

#### .DS_Store files

`find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch` //_Finds and removes .DS_Store files from your project and Git. Do this from the root of your project_
Add `**/.DS_Store to the .gitignore file`

### Starting a Repository

A Git repository is just a folder that holds your project. It can be empty or already contain project files and folders. Git places a hidden folder at the root of the project folder/repository where it tracks the projects files and watches for changes.
`git init` //_initialize a repository_
`git status` //_Shows the status of the repository_

### Staging Files

The command `git status` shows any changes to the projects files. Before Git commits the files it needs to add them to the staging area. Git manipulates the staging area with the following commands.
`git add <file-name>`//_Add file to commit stage_
`git add <file-name> <another-file-name> <and-another-file-name>` //_Add multiple files to commit stage_
`git add .` //_Add all files in the root directory - note the period_
`git add --all` //_Add all files in the project_
`git add -A` //_Add all files in the project_
`git rm --cached <file-name>` //_Remove file from commit list_
`git reset <file-name>` //_Remove file from commit list_

### Committing to a Repository

After adding files to the staging area Git will commit the changes or new files to the current branch.
`git commit -m "your message"` //_Commit with message_
`git reset --soft HEAD^` //_Undo the last commit_
`git commit --amend -m "enter your message"` //_Use instead of git reset to amend the last commit and rewriting the message_
`eg. git add I-forgot-this-file`
`git commit --amend -m "added I-forgot-this-file"`

### Pulling and Pushing From and To Repositories

Working between the local and remote repositories(Github)
`git remote add origin <repo link>` //_Set up the origin path to your on-line repository_
`git push -u origin master` //_upload to the on-line repository master branch_
`git push` //_because we ran git push -u origin master we can now just use git push_
`git clone <clone link>` //_Download a on-line project to a folder on your computer_
`git clone <clone link> new-name` //_Download and change the name if you wish_
`git pull` //_Update the local repository with any changes made in the remote repository_

### Branching

The main branch in a repository is the `master branch`. If we need to add new features to the project we can make them on separate branches so as not to upset the `master branch`. This allows multi developers to work on different features at the same time. When the features are finished and passed the branches can be merged with the `master branch`.
`git branch` //_Lists all the repository branches_
`git branch <branch-name>` //_Create a new branch_
`git checkout <branch-name>` //_Switch to branch_
`git merge <branch-name>`//_Merge the branch into master branch. Switch to the master branch before merging_
`git branch -d <branch-name>` //_delete branch_
`git checkout -b <branch-name>` //_Create and switch to new branch_

---
