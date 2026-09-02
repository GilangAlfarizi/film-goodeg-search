import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");

	function toggleTheme() {
		setTheme((current) => {
			const next = current === "light" ? "dark" : "light";
			document.documentElement.classList.toggle("dark", next === "dark");
			return next;
		});
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}
