import CatalystChat from "catalyst-vc-react";
import React from "react";
import "./App.css";
function App() {
	return (
		<CatalystChat
			sessionKey={window.location.pathname.substring(1)}
			uniqueAppId="63431a59-3548-4aa2-9bdb-5d74a49c5d9d"
			// disableSetupRoom={true}
			defaults={{
				audioOn: true,
				videoOn: true,
				showChatArea: false
			}}
			showSetNameBox={true}
			name={""}
			// disableLocalVidDrag={true}
			// alwaysBanner={true}
			onEndCall={() => (window.location.href = "https://seth.goldin.io/")}
			onSubmitLog={(log: string) => {
				console.log("received: " + log);
			}}
			themeColor="teal"
		/>
	);
}

export default App;
