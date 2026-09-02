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
		element: <ImageView src="/image-a.jpg" />,
	},
	{
		path: "/image-b",
		element: <ImageView src="/image-b.jpg" />,
	},
]);

export default router;
