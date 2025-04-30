import React from "react";
import FortuneCard from "../components/FortuneCard";
import ShareButtons from "../components/ShareButtons";
import DownloadBanner from "../components/DownloadBanner";

function ResultPage({ fortune, mission }) {
  return (
    <div style={styles.container}>
      {/* 로고 */}
      <h2 style={styles.title}>오늘의 풋살 운세 결과</h2>

      {/* 운세 카드 */}
      <FortuneCard fortune={fortune} mission={mission} />

      {/* 공유/저장 버튼 */}
      <ShareButtons />

      {/* 매치업 다운로드 안내 */}
      <DownloadBanner />
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    backgroundColor: "#FAFAFA",
    minHeight: "100vh",
  },
  title: {
    fontSize: "20px",
    color: "#4CAF50",
    marginTop: "24px",
  },
};

export default ResultPage;
