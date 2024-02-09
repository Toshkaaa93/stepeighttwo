import { Block, Button, Navbar, Page } from "framework7-react";
import React from "react";
import { LoadScreen } from "../../utils/utils";

export const EmailBindScreen = () => {
  return (
    <Page>
      <Navbar title="Email"/>
      <Block style={{ marginTop: 100 }}>
        <Button onClick={() => LoadScreen("/main")} round fill large>
          Следующая страница
        </Button>
      </Block>
    </Page>
  );
};
