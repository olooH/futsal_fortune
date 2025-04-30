import React, { useEffect } from "react";

function LoadingPage({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // 1.5초 후 결과 페이지로 넘어가기
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>운세를 불러오고 있어요...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ddd",
    borderTop: "4px solid #4CAF50",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "24px",
    fontSize: "16px",
    color: "#555",
  },
};

export default LoadingPage;
