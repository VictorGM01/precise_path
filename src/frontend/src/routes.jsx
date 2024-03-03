import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ height: '120vh' }}>
              <h1>Welcome to the app!</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
