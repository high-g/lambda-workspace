# lambda-workspace

Phase 7: AWS Lambda + API Gateway の学習リポジトリ。

## 目標

- Lambda の基本概念を理解
- Hono を Lambda ハンドラーとして動作させる
- API Gateway と連携してエンドポイントを公開
- ECS との比較（コスト・コールドスタート・ユースケース）

## スタック

| パッケージ | 用途 |
|---|---|
| `hono` | Lambda ハンドラー（`hono/aws-lambda` アダプター使用） |
| `@types/aws-lambda` | Lambda 型定義 |
| `tsx` | TypeScript ローカル実行 |

## 構成

```
lambda-workspace/
├── src/
│   └── index.ts        # Hono × Lambda ハンドラー
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

## セットアップ

```bash
pnpm install
```

## ロードマップ

`/Users/tanifumiya/nextjs-workspace/ROADMAP.md` の Phase 7 を参照。
