# react-todo-frontend

ReactとReduxの練習用に作った、Todoアプリのフロントエンド。

バックエンドのREST APIは https://github.com/nacam403/scala-todo にある。

#　主な利用技術（練習用に使ってみたかった技術を中心に選んだ）

- 基本はReactとRedux。
- react-intlを使って国際化（多言語化）。
- ビルドの中心はwebpack。
- Gruntやgulpは使わず、npm scriptsでビルドのパイプラインを作り、webpackなどを呼ぶ。
- JavaScriptはES2015+で書き、webpackを通してBabelを呼んでトランスパイルする。
- develop用とproduction用とでwebpackの設定を一部変える。production用ではUglifyによってコードを圧縮したり、出力ファイル名にハッシュ値を含めてブラウザのキャッシュ対策をしたりする。
- CSSプリプロセッサはsass（SCSS記法）。
- テスティングフレームワークはmocha。
- テストでは、REST API呼び出しの部分をfetch-mockによってモック化する。
- コード静的解析はESLint。
