import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ImageView from "./ImageView.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/image-a",
		element: <ImageView src="/image-a.jpeg" />,
	},
	{
		path: "/image-b",
		element: <ImageView src="/image-b.jpeg" />,
	},
]);

export default router;
