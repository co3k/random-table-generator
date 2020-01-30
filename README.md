# random-table-generator

## これはなんですか

Wikipedia から記事タイトルをいくつかガチャって並べるやつです。

https://co3k.github.io/random-table-generator/index.html

## 動作環境

- Node.js v10+
- Yarn

## うごかす

```
$ make server
```

## テスト

```
$ make test
```

## デプロイ (ローカルからやる場合)

※fork した場合は package.json の homepage をうまく書き換える必要がたぶんある

```
$ make deploy
```

## デプロイ (GitHub Actions おまかせな場合)

### 準備

- https://github.com/marketplace/actions/github-pages-action#getting-started の手順に従って Getting Started する
- Enjoy!


## 依存ライブラリのアップデート

たぶん基本的に dependabot が CI (E2E テストが動く) に通ったらマージをやってくれる。

fork したリポジトリの場合は dependabot のダッシュボードからそのような設定を有効にしないと勝手にマージとかはしてくれないと思う。
