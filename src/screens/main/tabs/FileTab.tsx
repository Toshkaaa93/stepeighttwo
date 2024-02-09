import { Block, Button, Tab } from "framework7-react";
import React, { useState } from "react";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";

export const FileTab = () => {
  const [value, setValue] = useState("");

  const inpS = (e: any) => {
    setValue(e.target.value);
  };

  const addFile = async (e: any) => {
    e.preventDefault();
    const ops = await Filesystem.writeFile({
      path: "test.txt",
      data: value,
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
    });
    setValue("");
  };

  const readFile = async () => {
    const file = await Filesystem.stat({
      path: "test.txt",
      directory: Directory.Cache,
    });
    console.log("File info:", file);
    const contents = await Filesystem.readFile({
      path: 'test.txt',
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
    });
  
    console.log('File:', contents);
  };

  return (
    <Tab id="tab-3" className="page-content">
      <Block>
        <input
          style={{ marginLeft: "80px" }}
          type="text"
          value={value}
          onChange={inpS}
          placeholder="Введите название файла"
        />
        <Button onClick={addFile} className="margin-top" fill small>
          Создать файл
        </Button>
        <Button className="margin-top" onClick={readFile} fill>
          Информация о файле
        </Button>
      </Block>
    </Tab>
  );
};

// const checkDoc = async () => {
//     try {
//         const file = await Filesystem.stat({
//             path:'test.txt',
//             directory: Directory.Cache,
//         });
//         console.log('TEST FILE', file)
//     } catch (error) {
//         await Filesystem.writeFile({
//             path:'test.txt',
//             data:'ITSsss',
//             directory: Directory.Cache,
//             encoding: Encoding.UTF8
//         })
//     }
// }
