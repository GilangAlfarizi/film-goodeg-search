import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
	AppsGridIcon,
	AvatarDark,
	AvatarLight,
	LensIcon,
	MicIcon,
	PlusIcon,
	SparkleIcon,
} from "./icons";
import { resolveSearch } from "./search";
import { useTheme } from "./theme";

function Landing() {
	const { theme, toggleTheme } = useTheme();
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	function handleSearch(event: FormEvent) {
		event.preventDefault();
		const dest = resolveSearch(query);
		if (dest) {
			navigate(dest);
		}
	}

	return (
		<div className="relative flex min-h-svh flex-col overflow-x-hidden bg-white text-[#202124] dark:bg-[#303134] dark:text-[#e8eaed]">
			<button
				type="button"
				onClick={toggleTheme}
				aria-label="Toggle color theme"
				className="absolute top-0 left-0 z-20 size-5 cursor-default opacity-0"
			/>

			<header className="flex items-center justify-between gap-2 px-3 py-3 text-[13px] sm:px-4">
				<nav className="flex items-center gap-3 pl-2 text-[#4d5156] sm:gap-4 sm:pl-3 dark:text-[#e8eaed]">
					<a
						className="hover:underline"
						href="#"
						onClick={(e) => e.preventDefault()}>
						About
					</a>
					<a
						className="hover:underline"
						href="#"
						onClick={(e) => e.preventDefault()}>
						Store
					</a>
				</nav>

				<div className="flex items-center gap-3 pr-1 sm:gap-4">
					<a
						className="hover:underline"
						href="#"
						onClick={(e) => e.preventDefault()}>
						Images
					</a>
					<button
						type="button"
						aria-label="Google apps"
						className="hidden rounded-full p-2 text-[#5f6368] hover:bg-black/5 sm:block dark:text-[#e8eaed] dark:hover:bg-white/10">
						<AppsGridIcon />
					</button>
					<button type="button" aria-label="Account" className="rounded-full">
						{theme === "dark" ? <AvatarDark /> : <AvatarLight />}
					</button>
				</div>
			</header>

			<main className="flex flex-1 flex-col items-center justify-center px-4 pb-[12vh]">
				<div className="mb-7 flex items-end">
					<h1 className="text-[52px] leading-none font-bold tracking-tight text-[#c0c0c0] sm:text-[72px] md:text-[90px] dark:text-white">
						Goodeg
					</h1>
					<span className="mb-1 ml-1.5 shrink-0 text-[16px] font-normal text-[#c0c0c0] sm:text-[20px] md:text-[22px] dark:text-white">
						{theme === "dark" ? "Image" : "maps"}
					</span>
				</div>

				<form
					onSubmit={handleSearch}
					className="flex w-full max-w-[692px] flex-col items-center">
					<div className="flex h-12 w-full items-center gap-2 rounded-full border border-[#dfe1e5] bg-white px-3 shadow-[0_1px_3px_rgba(32,33,36,0.08)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] sm:h-[52px] sm:gap-3 sm:px-4 dark:border-transparent">
						<PlusIcon />
						<input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Ask Goodeg"
							autoComplete="off"
							spellCheck={false}
							aria-label="Search"
							className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-[#202124] outline-none placeholder:text-[#80868b]"
						/>
						<button
							type="button"
							aria-label="Voice search"
							className="shrink-0 p-0.5">
							<MicIcon />
						</button>
						<button
							type="button"
							aria-label="Search by image"
							className="hidden shrink-0 p-0.5 min-[420px]:block">
							<LensIcon />
						</button>
						<button
							type="button"
							className="hidden shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[14px] text-[#444746] sm:flex">
							<SparkleIcon />
							AI Mode
						</button>
					</div>

					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<button
							type="submit"
							className="h-9 min-w-[132px] rounded-[4px] bg-[#b0b0b0] px-4 text-sm text-white hover:bg-[#a3a3a3] dark:bg-[#5f6368] dark:hover:bg-[#6b7075]">
							Goodeg Search
						</button>
						<button
							type="submit"
							className="h-9 min-w-[132px] rounded-[4px] bg-[#b0b0b0] px-4 text-sm text-white hover:bg-[#a3a3a3] dark:bg-[#5f6368] dark:hover:bg-[#6b7075]">
							I&apos;m Feeling Lucky
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default Landing;
