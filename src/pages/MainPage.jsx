import React from "react";

function MainPage({ onDrawClick }) {
  return (
    <div style={styles.container}>
      {/* 매치업 로고 */}
      <img
        src="/matchup-logo.png" // (나중에 로고 경로 바꿔야 해!)
        alt="매치업 로고"
        style={styles.logo}
      />

      {/* 오늘의 풋살 운세 제목 */}
      <h2 style={styles.title}>오늘 나의 풋살 경기 운세는?</h2>
      <h1 style={styles.mainTitle}>오늘의 풋살 운세</h1>

      {/* 운세 뽑기 버튼 */}
      <button style={styles.button} onClick={onDrawClick}>
        운세 뽑기
      </button>

      {/* 푸터 */}
      <div style={styles.footer}>
        <p>NO.1 풋살/축구 어플리케이션</p>
        <strong>매치업 다운로드하기</strong>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: "100px",
    marginTop: "16px",
  },
  title: {
    fontSize: "18px",
    color: "#757575",
    marginTop: "40px",
  },
  mainTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: "40px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "12px",
    padding: "16px 32px",
    fontSize: "18px",
    cursor: "pointer",
  },
  footer: {
    fontSize: "14px",
    color: "#757575",
    textAlign: "center",
    marginBottom: "24px",
  },
};

export default MainPage;