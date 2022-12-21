import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Request from "./pages/Request";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/request" element={<Request />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
