import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';

document.addEventListener('DOMContentLoaded', () => {
  const style = {
    height: '100%',
    width: '100%',
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
