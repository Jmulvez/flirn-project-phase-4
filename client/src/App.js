import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from "./Login";
import GamesList from './GamesList';
import NewGame from './NewGame';
import { UserContext } from "./context/UserContext";

function App() {
  const {user, setUser}  = useContext(UserContext);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/">
            <NewGame />
            <GamesList />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
