# wwog-lib-name

## template Usage

If you use github, it is recommended to use github CI to complete your workflow.

If you don't use github, you can install Install husky and lint-staged and complete your workflow with githook.

1.Replace all "wwog-lib-name" with your libName

```bash
#install pnpm
corepack enable
#version must be SemVer,you can run NPM info to check the latest SemVer
#replace package.json pnpm version
corepack prepare pnpm@7.5.0 --activate
```

2.install degit copy the repository

```bash
pnpm add -g degit

degit https://github.com/wwog/wwog-lib-template
```

3.according to the editor,install prettier and eslint plugin


## Install

## Usage

## Options

## License

MIT License.
