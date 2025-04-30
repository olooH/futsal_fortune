import React from "react";

function DownloadBanner() {
  return (
    <div style={styles.banner}>
      <p style={styles.subText}>No.1 풋살/축구 어플리케이션</p>
      <p style={styles.mainText}>매치업 앱 다운로드 하기</p>
    </div>
  );
}

const styles = {
  banner: {
    backgroundColor: "#F0F0F0",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    width: "100%",
    maxWidth: "320px",
    marginTop: "24px",
  },
  subText: {
    fontSize: "14px",
    color: "#757575",
    marginBottom: "4px",
  },
  mainText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#4CAF50",
  },
};

export default DownloadBanner;
