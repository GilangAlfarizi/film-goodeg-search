const SEARCH_ROUTES: Record<string, string> = {
	"arah ranu pane": "/image-a",
	"budi santoso": "/image-b",
};

export function resolveSearch(query: string): string | null {
	const key = query.trim().toLowerCase().replace(/\s+/g, " ");
	return SEARCH_ROUTES[key] ?? null;
}
