import React from 'react';

export function getLoadingIndicator() {
  const dots = "······················";
  return <h1 data-text={dots}>{dots}</h1>
}

export function getCharacterDetails(urls) {
  return urls && urls[1] && urls[1].type === "wiki" ? urls[1].url : urls[0].url;
}

export function getPicture(thumbnail, size) {
  return thumbnail ? thumbnail.path + "/" + size + "." + thumbnail.extension : "";
}