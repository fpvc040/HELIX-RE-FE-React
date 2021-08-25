# JavaScript Shell Utilities

<!--js-sh-toc-start-->
   * [JavaScript Shell Utilities](#javascript-shell-utilities)
      * [How to Develop](#how-to-develop)
      * [Usage](#usage)
      * [Original script](#original-script)
<!--js-sh-toc-end-->

## How to Develop

1. `npm link`
2. `js-sh toc`
3. `npm unlink`

## Usage

Create a pre-commit hook in `package.json`.

```
"husky": {
  "hooks": {
    "pre-commit": "js-sh toc"
  }
}
```

## Original script

The original source is from [gh-md-toc](https://github.com/ekalinin/github-markdown-toc).
