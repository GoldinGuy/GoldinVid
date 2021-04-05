import VideoChat from "catalyst-vc-react";
import React from "react";
import "./App.css";
function App() {
	return (
		<VideoChat
			sessionKey={window.location.pathname.substring(1)}
			uniqueAppId="63431a59-3548-4aa2-9bdb-5d74a49c5d9d"
			// themeColor="#05b0bb"
			themeColor="#0dae8c"
			onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
		/>
	);
}

export default App;
