# lambda-workspace

AWS Lambda + API Gateway の学習リポジトリ

## 目標

- [x] Lambda の基本概念を理解
- [x] Hono を Lambda ハンドラーとして動作させる
- [x] API Gateway と連携してエンドポイントを公開
- [-] ECS との比較（スキップ：体感での理解で十分と判断）

## スタック

| パッケージ | 用途 |
| --- | --- |
| `hono` | Lambda ハンドラー（`hono/aws-lambda` アダプター使用） |
| `@types/aws-lambda` | Lambda 型定義 |
| `esbuild` | バンドル（TS → ESM） |
| `tsx` | TypeScript ローカル実行 |

## 構成

```
lambda-workspace/
├── src/
│   └── index.ts        # Hono × Lambda ハンドラー
├── dist/
│   ├── index.mjs       # esbuild バンドル済み
│   └── function.zip    # Lambda アップロード用
├── nextjs/             # Next.js アプリ
├── pnpm-workspace.yaml
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

## セットアップ

```bash
pnpm install
```

## ビルド

```bash
pnpm build
zip -j dist/function.zip dist/index.mjs
```

## エンドポイント

```
GET https://wl23aup7d5.execute-api.ap-northeast-1.amazonaws.com/posts
```
