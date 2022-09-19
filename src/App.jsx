import React from "react";
import GithubCorner from "react-github-corner";
import Routes from "./Routes/Routes";

function App() {
  return (
    <React.Fragment>
      <GithubCorner
        // href="https://github.com/palakgupta2712/bored-games"
        bannerColor="#C51935"
        octoColor="#fff"
        size={80}
        direction="right"
      />
      <Routes />
    </React.Fragment>
  );
}

export default App;
