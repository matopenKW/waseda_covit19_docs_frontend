# ベースイメージの作成
FROM node:12.16.1
# # コンテナ内で作業するディレクトリを指定
# WORKDIR /usr/src/app
# # パッケージをインストール
# RUN yarn install
# # コンテナを起動する際に実行されるコマンド
# ENTRYPOINT [ "yarn", "start" ]