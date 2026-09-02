export function PlusIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			className="size-6 shrink-0 text-[#5f6368]"
			fill="none"
			aria-hidden="true">
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
			<path
				d="M12 16.5V20"
				stroke="#34A853"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
			<path
				d="M9 20h6"
				stroke="#34A853"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
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
			<circle
				cx="12"
				cy="12"
				r="4.2"
				fill="none"
				stroke="#5f6368"
				strokeWidth="1.6"
			/>
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
		<svg
			viewBox="0 0 24 24"
			className="size-6"
			fill="currentColor"
			aria-hidden="true">
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
		<img
			src="/profile-light.png"
			alt="profile-light"
			className="size-8 rounded-full"
			aria-hidden="true"
		/>
	);
}

export function AvatarDark() {
	return (
		<img
			src="/profile-dark.png"
			alt="profile-dark"
			className="size-8 rounded-full"
			aria-hidden="true"
		/>
	);
}
