# lambda-workspace

## 目的

Phase 7: AWS Lambda + API Gateway の学習リポジトリ（5/6〜5/8）。  
ロードマップ全体: `/Users/tanifumiya/nextjs-workspace/ROADMAP.md`

## フェーズ目標

- [ ] Lambda の基本概念を理解
- [ ] Hono を Lambda ハンドラーとして動作させる
- [ ] API Gateway と連携してエンドポイントを公開
- [ ] ECS との比較 — コスト・コールドスタート・ユースケース

## 現在の状況

### 完了済み

- リポジトリ初期化（`pnpm init`、`.gitignore` 追加）
- 依存パッケージインストール（`hono`、`@types/aws-lambda`、`tsx`）
- `src/` ディレクトリ作成

### 次にやること

`src/index.ts` を作成してLambdaハンドラーを実装する：

```ts
import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/posts', (c) => c.json({ posts: [] }))

export const handler = handle(app)
```

作成後の流れ：

1. `esbuild` でバンドル（TypeScript → CommonJS）
2. zip 化して Lambda にアップロード
3. API Gateway と連携してエンドポイント公開
4. ECS との比較整理（コスト・コールドスタート・ユースケース）

## 技術スタック

| パッケージ | 用途 |
| --- | --- |
| `hono` | Lambda ハンドラー |
| `@types/aws-lambda` | Lambda 型定義 |
| `tsx` | TypeScript 実行（ローカル確認用） |

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Codeからのファイル編集はmdファイル以外は受け付けない
- ローカルでHonoアプリを作り、Lambda対応に変換する流れで進める
- デプロイはAWS CLIまたはSAM CLIを使用
- ECSとの比較はコスト・コールドスタート・適切なユースケースの3軸で整理

## 前提知識

- Hono の基本（Phase 2 完了済み）
- AWS IAM・VPC・ECS の基本（Phase 4 完了済み）
- Docker・ECR（Phase 3/4 完了済み）
