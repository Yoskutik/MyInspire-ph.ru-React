import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';

document.addEventListener('DOMContentLoaded', () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  ReactDom.render(
    <Body>
      <div className="container" style={style}>
        <h1>Упс!</h1>
        <h3>Кажется, необходимый Вам файл отсутствует.</h3>
      </div>
    </Body>,
    document.querySelector('#body'),
  );
});
