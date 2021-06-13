### git rebase:
    -to rebase all the commit between another branch and the current branch state,
    -to rebase the last few commits in current branch

    e.g.: 
```js
git log         // 查看commit的历史

```
-rebase the last few commits in current branch:
```js
git rebase -i HEAD~7    // HEAD~7指要合并的commits的记录的前一个commit的号
```