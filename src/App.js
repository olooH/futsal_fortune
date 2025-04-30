import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";
import { fortunes } from "./data/fortunes";
import { missions } from "./data/missions";

function App() {
  const [page, setPage] = useState("main");

  const handleDrawClick = () => {
    setPage("loading"); // 나중에 로딩 페이지로 전환
  };
  const [fortune, setFortune] = useState(null);
  const [mission, setMission] = useState(null);

// 운세 뽑기 버튼 클릭 시
  const handleDrawClick = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const randomMission = missions[Math.floor(Math.random() * missions.length)];
    setFortune(randomFortune);
    setMission(randomMission);
    setPage("loading");
  };

// 결과 페이지 띄우기
  const handleLoadingFinish = () => {
    setPage("result");
  };
  return (
    <div className="App">
      {page === "main" && <MainPage onDrawClick={handleDrawClick} />}
     {page === "loading" && <LoadingPage onFinish={handleLoadingFinish} />}
     {page === "result" && <ResultPage fortune={fortune} mission={mission} />}
    </div>
  );

  return (
    <div className="App">
      {page === "main" && <MainPage onDrawClick={handleDrawClick} />}
      {page === "loading" && <LoadingPage onFinish={() => setPage("result")} />}
    </div>
  );
}

export default App;
