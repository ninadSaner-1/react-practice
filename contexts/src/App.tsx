import { InputProvider } from "./App.context";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

const App = () => {
	return (
		<InputProvider>
		<div style={{
			padding: '1.5rem',
			border: '4px solid blue',
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: '1rem',
			height: '90vh'
		}}>
			<Left />
			<Right />
		</div>
		</InputProvider>
	);
}

/* function App() {
	const {text2, setText2} = useContext(AppContext);

	return (
		<>
			{text2}
			<button
				onClick={() => {
					setText2(`${text2} Hi2!`);
				}}
			>
				Hi! Click Me
			</button>
			<One />
		</>
	);
} */

export default App;
