import { useMsal } from "@azure/msal-react";

function App() {
	const { instance, accounts, inProgress } = useMsal();

	if (accounts.length > 0) {
		return (
			<>
				<span>There are currently {accounts.length} users signed in!</span>
				<br/>
				<button onClick={() => instance.logout()}>Logout</button>
				<br/>
				{`Username: ${accounts[0]?.username}\nName: ${accounts[0]?.name}`}
			</>
		);
	} else if (inProgress === "login") {
		return <span>Login is currently in progress!</span>
	} else {
		return <>
			<span>There are currently no users signed in!</span>
			<button onClick={() => instance.loginPopup()}>Login</button>
		</>


	}
}

export default App;