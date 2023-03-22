# CIS560Project

# Useful Git commands

## clone the git repo to the local machine

```
git clone "<the clone link>"
```

## pull the latest changes to an existing repo on the local machine
```
git pull 
```

## how to push changes to the repo:
```
- git add .
- git commit -a -m "<the title of the commit here>"
- git push
```

## how to create a branch
### True sigma programmers don't do branches but if you need it:
```
git checkout -b <the branch name like my_branch>
```
### the -b command is what creates a new branch, if the branch already exists (like main) then just do git checkout <branch_name>

## how to revert back to the latest changes on the server (helpful if you get stuck in a merge conflict and just want whatever is on the server)
```
git restore .
```
### sometimes you need the force flag which should look somthing like:
```
git restore . --force
```
