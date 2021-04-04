import VideoChat from "catalyst-vc-react";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	return (
		<VideoChat
			sessionKey={location.pathname.substring(1)}
			uniqueAppId="fe1c7514-1b51-417c-a111-cf0d0deaa112"
			themeColor="#1E40AF"
			// defaults={{ audioOn: false }}
			onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
		/>
	);
}

export default App;
