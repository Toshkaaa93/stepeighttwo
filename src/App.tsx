import React from "react";
import "./App.css";
import { App as F7App, View } from "framework7-react";
import { AuthScreen,CodeScreen,EmailBindScreen, MainScreen } from "./screens";


const f7params = {

  name: 'My App',
  routes:[
    {
      path: '/',
      component: AuthScreen,
    },
    {
      path: '/email',
      component: EmailBindScreen,
    },
    {
      path: '/code',
      component: CodeScreen,
    },
    {
      path: '/main',
      component: MainScreen,
    },
  ]
};

function App() {
  return (
    <F7App {...f7params}>
      <View main url="/main" />
    </F7App>
  );
}

export default App;