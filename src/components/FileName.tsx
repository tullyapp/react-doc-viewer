import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../state/Context";

const FileName: FC<{}> = () => {
  const {
    state: { currentDocument },
  } = useContext(AppContext);

  if (!currentDocument) return null;

  let fileName = currentDocument.uri;

  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return <Container>{fileName}</Container>;
};

export default FileName;

const Container = styled.div`
  flex: 1;
  text-align: left;
  color: #444;
  font-weight: bold;
  margin: 0 10px;
`;