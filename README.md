# todo app

react,firebase,vite を使用した react 製の todo app.

# Requirement

- node v16.13.1
- vite

# Package

- linkifyjs（Text to link package.）
  - [docs](https://linkify.js.org/docs/)
  - [npm-docs](https://www.npmjs.com/package/linkifyjs)

# Installation

[構築参考](https://zenn.dev/sprout2000/articles/98145cf2a807b1)

```
npm init vite
```

reactm>react-ts を選択後、npm install

```
npm install
```

vite.config.ts の中身と index.html のパスの調整、build 後の public dir の出力先設定を行う.

# Chakra UI のインストール

[参考](https://chakra-ui.com/docs/getting-started)

# 使用方法

env-template 内に環境変数を設定することで使用できます。
ファイル名は.env で作成
