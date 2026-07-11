import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pages = [
  {
    title: "チーム選手状況",
    description: "ファイターズ初期表示。12球団の起用量と直近の調子をカードで確認できます。",
    href: "/team-status.html",
    primary: true,
  },
  {
    title: "個人成績ランキング",
    description: "打者・投手ランキングを、チーム、リーグ、期間、最低条件で切り替えできます。",
    href: "/mobile-dashboard.html",
    primary: false,
  },
  {
    title: "順位表・チーム比較",
    description: "セ・パ別の順位表と、12球団のチーム打撃・投手成績をリーグ内で比較できます。",
    href: "/team-comparison.html",
    primary: false,
  },
];

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">NPB 2026</p>
        <h1>選手状況ダッシュボード</h1>
        <p className="lead">
          スマホでいつでも確認できる、12球団対応の成績WEBアプリです。
        </p>
      </section>

      <section className="cards" aria-label="ページ一覧">
        {pages.map((page) => (
          <a className={page.primary ? "card primary" : "card"} href={page.href} key={page.href}>
            <span>{page.primary ? "おすすめ" : page.href.includes("comparison") ? "チーム" : "ランキング"}</span>
            <h2>{page.title}</h2>
            <p>{page.description}</p>
          </a>
        ))}
      </section>

      <section className="note">
        <b>更新方法</b>
        <p>
          Mac側で <code>update_npb_current.command</code> を実行すると、ExcelとWEBアプリ用ページが更新されます。
          GitHubへの送信と公開URLの更新まで自動で進みます。
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
