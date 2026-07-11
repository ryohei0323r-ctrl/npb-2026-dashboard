# NPB 2026 Status Web App

スマホで使いやすいPWA版のNPB個人成績ダッシュボードです。

## ページ

- `/` : アプリ入口
- `/team-status.html` : 12球団の選手起用・調子ページ
- `/mobile-dashboard.html` : 個人成績ランキングページ
- `/player-detail.html` : 選手別の累積・期間詳細ページ
- `/team-comparison.html` : セ・パ別順位表・チーム成績比較ページ

## ローカル確認

```bash
cd webapp
npm install
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```

同じWi-Fiのスマホから `http://MacのIPアドレス:4173` を開きます。

## Vercel公開

Vercelでこの `webapp` フォルダをプロジェクトのルートにしてください。

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

`vercel.json` に同じ設定を入れてあるので、通常は自動で認識されます。

## 更新運用

親フォルダの `update_npb_current.command` をダブルクリックすると、次をまとめて更新します。

- Excel: `outputs/npb_2026_personal_stats_current.xlsx`
- スマホ用HTML: `outputs/mobile_dashboard.html`
- チーム状況HTML: `outputs/team_status.html`
- 選手詳細HTML: `outputs/player_detail.html`
- 順位表・チーム比較HTML: `outputs/team_comparison.html`
- Vercel公開用HTML: `webapp/public/mobile-dashboard.html`, `webapp/public/team-status.html`
- ビルド成果物: `webapp/dist/`
- GitHubへの最新データ送信
- Vercelでの自動再公開

初回だけGitHubのユーザー名とアクセストークンを求められる場合があります。認証後はMacのキーチェーンを使用します。VercelのDeployボタンを毎回押す必要はありません。
