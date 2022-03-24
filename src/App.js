import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main/Main';
import NotFound from './components/notfound/NotFound';
import FindId from './components/findId/FindId';

function App() {
  return (
    <>
			<Router>
				<Routes>
					<Route path="/" exact element={<Main />} />
					<Route path="/findId" exact element={<FindId />} />
					<Route path="*" exact element={<NotFound />} />
				</Routes>
			</Router>
		</>
  );
}

export default App;
