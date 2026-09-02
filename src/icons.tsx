export function PlusIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="size-6 shrink-0 text-[#5f6368]"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M12 5v14M5 12h14"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function MicIcon() {
	return (
		<svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
			<rect x="9" y="3.5" width="6" height="11" rx="3" fill="#EA4335" />
			<path
				d="M7 11.5a5 5 0 0 0 10 0"
				fill="none"
				stroke="#4285F4"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
			<path d="M12 16.5V20" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
			<path d="M9 20h6" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
		</svg>
	);
}

export function LensIcon() {
	return (
		<svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
			<path
				fill="#4285F4"
				d="M6 3h4c.55 0 1 .45 1 1v1H6c-1.1 0-2 .9-2 2v1H3c-.55 0-1-.45-1-1V6c0-1.66 1.34-3 3-3z"
			/>
			<path
				fill="#EA4335"
				d="M18 3h-4c-.55 0-1 .45-1 1v1h5c1.1 0 2 .9 2 2v1h1c.55 0 1-.45 1-1V6c0-1.66-1.34-3-3-3z"
			/>
			<path
				fill="#34A853"
				d="M18 21h-4c-.55 0-1-.45-1-1v-1h5c1.1 0 2-.9 2-2v-1h1c.55 0 1 .45 1 1v1c0 1.66-1.34 3-3 3z"
			/>
			<path
				fill="#FBBC05"
				d="M6 21h4c.55 0 1-.45 1-1v-1H6c-1.1 0-2-.9-2-2v-1H3c-.55 0-1 .45-1 1v1c0 1.66 1.34 3 3 3z"
			/>
			<circle cx="12" cy="12" r="4.2" fill="none" stroke="#5f6368" strokeWidth="1.6" />
			<circle cx="12" cy="12" r="1.6" fill="#5f6368" />
		</svg>
	);
}

export function SparkleIcon() {
	return (
		<svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
			<path
				fill="#4285F4"
				d="M11.2 3.2c.3-.9 1.3-.9 1.6 0l1.05 3.2c.12.36.4.64.76.76l3.2 1.05c.9.3.9 1.3 0 1.6l-3.2 1.05a1.1 1.1 0 0 0-.76.76l-1.05 3.2c-.3.9-1.3.9-1.6 0l-1.05-3.2a1.1 1.1 0 0 0-.76-.76L6.4 9.81c-.9-.3-.9-1.3 0-1.6l3.2-1.05c.36-.12.64-.4.76-.76l1.05-3.2Z"
			/>
			<path
				fill="#EA4335"
				d="M18.15 14.1c.18-.54.78-.54.96 0l.55 1.68c.07.2.23.36.43.43l1.68.55c.54.18.54.78 0 .96l-1.68.55a.6.6 0 0 0-.43.43l-.55 1.68c-.18.54-.78.54-.96 0l-.55-1.68a.6.6 0 0 0-.43-.43l-1.68-.55c-.54-.18-.54-.78 0-.96l1.68-.55a.6.6 0 0 0 .43-.43l.55-1.68Z"
			/>
		</svg>
	);
}

export function AppsGridIcon() {
	return (
		<svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
			<circle cx="5" cy="5" r="1.7" />
			<circle cx="12" cy="5" r="1.7" />
			<circle cx="19" cy="5" r="1.7" />
			<circle cx="5" cy="12" r="1.7" />
			<circle cx="12" cy="12" r="1.7" />
			<circle cx="19" cy="12" r="1.7" />
			<circle cx="5" cy="19" r="1.7" />
			<circle cx="12" cy="19" r="1.7" />
			<circle cx="19" cy="19" r="1.7" />
		</svg>
	);
}

export function AvatarLight() {
	return (
		<svg viewBox="0 0 40 40" className="size-8 rounded-full" aria-hidden="true">
			<circle cx="20" cy="20" r="20" fill="#cfd8e3" />
			<ellipse cx="20" cy="16" rx="7.5" ry="8.5" fill="#e8c4a0" />
			<path fill="#2c1a12" d="M11 16c.5-7 5-11 9-11s8.5 4 9 11c-1.5-2-4-3.5-9-3.5S12.5 14 11 16Z" />
			<path fill="#1c1c1c" d="M8 38c1-8 6.5-13 12-13s11 5 12 13v2H8v-2Z" />
			<path fill="#f3f3f3" d="M16.5 25.5h7L25 38h-10l1.5-12.5Z" />
		</svg>
	);
}

export function AvatarDark() {
	return (
		<svg viewBox="0 0 40 40" className="size-8 rounded-full" aria-hidden="true">
			<circle cx="20" cy="20" r="20" fill="#4a90c8" />
			<ellipse cx="20" cy="17" rx="7.2" ry="8.2" fill="#e6b98a" />
			<path
				fill="#1a120c"
				d="M10.5 18c1-9 5.5-12.5 9.5-12.5s8.5 3.5 9.5 12.5c-2-3.5-5-6-9.5-6s-7.5 2.5-9.5 6Z"
			/>
			<path fill="#2b6cb0" d="M7 38c1.5-8 7-12.5 13-12.5S31.5 30 33 38v2H7v-2Z" />
		</svg>
	);
}
