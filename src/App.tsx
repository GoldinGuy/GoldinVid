import VideoChat from "catalyst-vc-react";
import React from "react";
import "./App.css";

function App() {
	return (
		<VideoChat
			sessionKey={window.location.href.substring(
				window.location.href.lastIndexOf("/") + 1
			)}
			uniqueAppId="63431a59-3548-4aa2-9bdb-5d74a49c5d9d"
			themeColor="#3a63e8"
			// defaults={{ audioOn: false }}
			onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
		/>
	);
}

export default App;

// function App() {
// 	const [showVideoCall, setShowVideoCall] = React.useState(true);
// 	return (
// 		<>
// 			<button
// 				style={{ position: "absolute", top: 0, left: 0, zIndex: 10000 }}
// 				onClick={() => setShowVideoCall(!showVideoCall)}
// 			>
// 				toggle on
// 			</button>
// 			{showVideoCall ? (
// 				<VideoChat
// 					sessionKey={window.location.href.substring(
// 						window.location.href.lastIndexOf("/") + 1
// 					)}
// 					uniqueAppId="63431a59-3548-4aa2-9bdb-5d74a49c5d9d"
// 					themeColor="#3a63e8"
// 					// defaults={{ audioOn: false }}
// 					onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
// 				/>
// 			) : (
// 				""
// 			)}
// 		</>
// 	);
// }

// export default App;
