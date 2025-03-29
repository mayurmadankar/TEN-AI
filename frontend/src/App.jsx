import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
