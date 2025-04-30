import React from "react";

function FortuneCard({ fortune, mission }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.fortuneTitle}>오늘의 풋살 운세 ✨</h2>
      <p style={styles.fortuneText}>{fortune}</p>

      <div style={styles.divider}></div>

      <h3 style={styles.missionTitle}>오늘의 미션 🎯</h3>
      <p style={styles.missionText}>{mission}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "320px",
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    textAlign: "center",
  },
  fortuneTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#4CAF50",
  },
  fortuneText: {
    fontSize: "18px",
    color: "#424242",
    marginBottom: "20px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#E0E0E0",
    margin: "16px 0",
  },
  missionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#FFC107",
  },
  missionText: {
    fontSize: "16px",
    color: "#616161",
  },
};

export default FortuneCard;
