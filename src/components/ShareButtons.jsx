import React from "react";

function ShareButtons() {
    const handleSaveImage = () => {
        const card = document.getElementById("fortune-card");
        if (!card) {
          alert("카드를 찾을 수 없어요!");
          return;
        }
      
        html2canvas(card).then((canvas) => {
          const link = document.createElement("a");
          link.download = "futsal_fortune.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        });
      };
      


  const handleShare = () => {
    alert("📤 공유 기능은 나중에 카카오톡 연동 예정!");
  };

  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, backgroundColor: "#4CAF50" }} onClick={handleShare}>
        공유하기
      </button>
      <button style={{ ...styles.button, backgroundColor: "#FFC107", color: "#000" }} onClick={handleSaveImage}>
        이미지 저장
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginTop: "8px",
  },
  button: {
    border: "none",
    borderRadius: "12px",
    padding: "12px 20px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ShareButtons;
