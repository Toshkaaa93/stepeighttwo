import { Block, Button, Navbar, Page } from "framework7-react";
import React from "react";
import { LoadScreen } from "../../utils/utils";

export const CodeScreen = () => {
  return (
    <Page>
      <Navbar title="CodeScreen"/>
      <Block style={{ marginTop: 100 }}>
        <Button onClick={() => LoadScreen("/email")} round fill large>
          Следующая страница
        </Button>
      </Block>
    </Page>
  );
};
