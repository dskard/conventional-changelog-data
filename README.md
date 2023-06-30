# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coverage-image]][coverage-url]

> [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) data preset

## Data Convention

### Examples

1. Adding new rows to a data set

   ##### Result
   Bump the minor version because we have changed the shape of the data set.

   ##### Commit message
   ```
   data(add-row): added new rows to the data set
   ```

2. Adding new columns to a data set

   ##### Result
   Bump the minor version because we have changed the shape of the data set. Might want to combine this with `BREAKING_CHANGE` to signal an important new column was added. May be useful for surveys, where a new question was added after years of it previously not existing. Participant would now be getting version 2 of the survey.

   ##### Commit message
   ```
   data(add-column): added new columns to the data set
   ```

3. Removing rows from a data set

   ##### Result
   Bump the minor version because, although we have changed the shape of the data set, the number of columns stays the same and it should not impact (as much?) how data is read by a program.

   ##### Commit message
   ```
   data(remove-row): remove rows from the data set
   ```

4. Removing columns from a data set

   ##### Result
   Bump the major version because we have changed the shape of the data set in a way that could brake the way people previously read the data.

   ##### Commit message
   ```
   data(remove-column): remove columns from the data set
   ```

5. Changing values in a previously published data set

   ##### Result
   Bump the patch version because we have made a change to values in the data set, but have not changed the shape of the data set in a way that could brake the way people previously read the data.

   ##### Commit message
   ```
   data(change-values): changing the value in the data set, but not removing or adding new columns or rows
   ```

6. Replace whole data set (yearly update of data)

   ##### Result
   Bump the major version to signal that this is a whole new set of data, unrelated to previous versions of the data set.

   ##### Commit message
   ```
   data(replace): changing the value in the data set, but not removing or adding new columns or rows
   ```

7. Fix a non-data related bug. Most other [Angular style presets](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular#readme) are supported.

   ##### Result
   Bump the patch version to signal that a bug has been fixed.

   ##### Commit message
   ```
   fix: one less bug
   ```


### Commit Message Format

A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `build`, `ci`, `docs` ,`style`, `refactor`, and `test` for non-changelog related tasks.

Details regarding these types can be found in the official [Angular Contributing Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).

### Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](#commit-message-format).
