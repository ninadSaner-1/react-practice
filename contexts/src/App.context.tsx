import { PropsWithChildren, createContext, useState } from "react";
import { IAppContext, IInputContext } from "./App.types";

// create a context
// pass it a default value
export const AppContext = createContext<IAppContext>({
	text: "",
	setText: (text) => {
		return;
	},
});

// context provides two components,
// 1.
AppContext.Provider;
// 2.
AppContext.Consumer; // NOT USE in Functional Components
// In Functional Components, Consumer are replaced by useContext hook

export const AppProvider = ({ children }: PropsWithChildren) => {
	const [text, setText] = useState<string>("initial value");
	const [text2, setText2] = useState<string>("initial value 2");

	return (
		<AppContext.Provider value={{ text, setText, setText2, text2 }}>
			{children}
		</AppContext.Provider>
	);
};

export const InputContext = createContext<IInputContext>({
	value: "",
	setValue: (val) => {
		return;
	},
});

export const InputProvider = ({ children }: PropsWithChildren) => {
	const [value, setValue] = useState<string>("");
	return (
		<InputContext.Provider
			value={{ value, setValue }}
		>
			{children}
		</InputContext.Provider>
	);
};
