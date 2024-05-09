export interface IAppContext {
	text: string;
	text2:string;
	setText: (newText: string) => void;
	setText2: (newText: string) => void;
}


export interface IInputContext {
	value: string;
	setValue: (value:string) => void
}