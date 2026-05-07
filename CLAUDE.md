# lambda-workspace

## 目的

Phase 7: AWS Lambda + API Gateway の学習リポジトリ（5/6〜5/8）。  
ロードマップ全体: `/Users/tanifumiya/nextjs-workspace/ROADMAP.md`

## フェーズ目標

- [ ] Lambda の基本概念を理解
- [ ] Hono を Lambda ハンドラーとして動作させる
- [ ] API Gateway と連携してエンドポイントを公開
- [ ] ECS との比較 — コスト・コールドスタート・ユースケース

## 技術スタック

| パッケージ | 用途 |
|---|---|
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
