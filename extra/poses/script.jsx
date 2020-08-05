import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Body>
      <div className="body container">
        <div className="pose">
          <img className="pose__img" src="photos/0.jpg" alt="Позы для позирования стоя" />
          <h3 className="pose__title">Позирование стоя</h3>
          <p className="pose__text">
            Взаимодействуйте с окружением, не бойтесь опираться, трогать
            то что вас окружает, аналогично с одеждой, засовывайте руки
            в карманы, мните платье, поправляйте жакет.
            <br />
            Тело лучше расслабить , опереться на одну ногу, вторую немного согнуть.
          </p>
        </div>
        <div className="pose">
          <img className="pose__img" src="photos/1.jpg" alt="Позы для позирования на стуле" />
          <h3 className="pose__title">Позирование на стуле</h3>
          <p className="pose__text">
            Расслабьтесь (нам конечно могут понадобиться статичные позы, но
            зачастую они ни к чему). Держать ровно спину вовсе не обязательно,
            ноги можно поставить на разные уровни (то есть одну немного
            согнуть, другую согнуть побольше или наоборот). Взаимодействуйте
            со стулом: опирайтесь на него руками, ставьте ноги на проножки.
          </p>
        </div>
        <div className="pose">
          <img className="pose__img" src="photos/2.jpg" alt="Позы для позирования на полу" />
          <h3 className="pose__title">Позирование на полу</h3>
          <p className="pose__text">
            Не бойтесь сгибать колени, хвататься за них руками, облокачивайтесь
            руками на пол, чем вам удобнее и комфортнее будет - тем лучше.
          </p>
        </div>
        <div className="pose">
          <img className="pose__img" src="photos/3.jpg" alt="Позы для портретного позирования" />
          <h3 className="pose__title">Портретное позирование</h3>
          <p className="pose__text">
            Не бойтесь взаимодействовать с руками и в одеждой. Давить улыбку
            совсем не обязательно, если вам не хочется улыбаться, то не нужно.
          </p>
        </div>
      </div>
    </Body>,
    document.querySelector('#body'),
  );
});
