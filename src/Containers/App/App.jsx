import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Public/Login";
import Chats from "../Public/Private/Chats";
import Chat from "../Public/Private/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="chats" element={<Chats />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
