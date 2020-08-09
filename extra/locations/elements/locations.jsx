import React from 'react';
import { getCookie } from '@assets/utils';
import Alert from '@elements/alert';
import Location from './location';
import locations from './locations.json';

export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    const photos = {};
    require.context('../photos/', true)
      .keys()
      .filter(ph => ph.endsWith('m.webp'))
      .forEach(photo => {
        const [dir, name] = photo.replace(/^\.\//, '').replace('m.webp', '').split('/');
        if (!Object.keys(photos).includes(dir)) {
          photos[dir] = [];
        }
        photos[dir].push(name);
      });
    this.photos = photos;
  }

  onSmallImageClick = evt => {
    const el = evt.target;
    if (!el.classList.contains('small-image')) return;
    const item = el.closest('.location');
    item.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    item.querySelector('.location__photos picture source').srcset = el.src.replace('m.jpg', '.webp');
    item.querySelector('.location__photos_main').src = el.src.replace('m.jpg', '.jpg');
  };

  onAlertClose = () => {
    document.cookie = `alert-deleted=true; max-age=${60 * 60 * 24 * 10}`;
  };

  render() {
    const alert = (
      <Alert type={Alert.Types.INFO} onClose={this.onAlertClose}>
        На каждом маршруте можно прокрутить ленту фотографий, чтобы увидеть больше локаций.
      </Alert>
    );
    return (
      <div className="body">
        <div className="locations container">
          {getCookie('alert-deleted') ? null : alert}
          {locations.map(location => (
            <Location key={Math.random()}
                      {...location}
                      photosList={this.photos[location.photos_dir]}
                      onClick={this.onSmallImageClick} />
          ))}
        </div>
      </div>
    );
  }
}
