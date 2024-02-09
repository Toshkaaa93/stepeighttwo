import { Block, Button, Navbar, Page } from "framework7-react";
import React from "react";
import { LoadScreen } from "../../utils/utils";

export const AuthScreen = () => {
  return (
    <Page>
      <Navbar title="Auth"/>
      <Block style={{ marginTop: 100 }}>
        <Button onClick={() => LoadScreen("/code")} round fill large>
          Следующая страница
        </Button>
      </Block>
    </Page>
  );
};
