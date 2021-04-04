import VideoChat from "catalyst-vc-react";
import "./App.css";

function App() {
	return (
		<VideoChat
			sessionKey={window.location.href.substring(
				window.location.href.lastIndexOf("/") + 1
			)}
			uniqueAppId="63431a59-3548-4aa2-9bdb-5d74a49c5d9d"
			themeColor="#1E40AF"
			// defaults={{ audioOn: false }}
			onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
		/>
	);
}

export default App;
