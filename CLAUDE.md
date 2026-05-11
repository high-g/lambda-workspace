# lambda-workspace

## 目的

Phase 7: AWS Lambda + API Gateway の学習リポジトリ（5/6〜5/10）。**完了済み。**  

## フェーズ目標

- [x] Lambda の基本概念を理解
- [x] Hono を Lambda ハンドラーとして動作させる
- [x] API Gateway と連携してエンドポイントを公開
- [-] ECS との比較 — スキップ（体感での理解で十分と判断）

## 現在の状況

### 完了済み

- リポジトリ初期化（`pnpm init`、`.gitignore` 追加）
- 依存パッケージインストール（`hono`、`@types/aws-lambda`、`tsx`、`esbuild`）
- `src/index.ts` 作成（Hono × Lambda ハンドラー）
- esbuild でバンドル（ESM形式、`dist/index.mjs`）
- zip 化（`dist/function.zip`）
- AWSコンソールでIAMロール作成（`lambda-hono-role`）
- Lambda関数作成・zipアップロード（`hono-api`、Node.js 24.x）
- API Gateway（HTTP API）作成・Lambda統合・エンドポイント公開
- `curl https://wl23aup7d5.execute-api.ap-northeast-1.amazonaws.com/posts` で `{"posts":[]}` の疎通確認済み

- モノレポ化（`nextjs/` ディレクトリ + `pnpm-workspace.yaml`）
- Next.js から API Gateway エンドポイントを呼び出し、`{"posts":[]}` の表示確認済み

### Phase 7 完了

次フェーズ（Phase 8: React 19 の理解）へ進む。このリポジトリの役割はここで終了。

## 技術スタック

| パッケージ | 用途 |
| --- | --- |
| `hono` | Lambda ハンドラー |
| `@types/aws-lambda` | Lambda 型定義 |
| `tsx` | TypeScript 実行（ローカル確認用） |
| `esbuild` | バンドル（TS → ESM） |

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Codeからのファイル編集はmdファイル以外は受け付けない
- ローカルでHonoアプリを作り、Lambda対応に変換する流れで進める
- デプロイはAWSコンソールから実施（学習目的）
- ECSとの比較はスキップ（体感での理解を優先）

## 前提知識

- Hono の基本（Phase 2 完了済み）
- AWS IAM・VPC・ECS の基本（Phase 4 完了済み）
- Docker・ECR（Phase 3/4 完了済み）
