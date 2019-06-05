import React, { Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const findClassIcon = iconName => {
  let classForIcon = '';
  switch (iconName) {
    case 'github':
      classForIcon = 'fab fa-github-alt';
      break;
    case 'twitter':
      classForIcon = 'fab fa-twitter';
      break;
    case 'linkedin':
      classForIcon = 'fab fa-linkedin-in';
      break;
    case 'email':
      classForIcon = 'fas fa-envelope';
      break;

    default:
      break;
  }
  return classForIcon;
};

export default function Member({ member: { name, links, img } }) {
  return (
    <Fragment>
      <div className="member__image--container">
        <img src={img} alt={name} className="member__image" />
      </div>
      <div className="member__content">
        <h2 className="member__name">{name}</h2>
        <ul className="member__linkList">
          {links.map((link, index) => (
            <li className="member__linkItem" key={index}>
              <a href={link.src} className="social_media_link" target="_blank" rel="noopener noreferrer">
                <i className={findClassIcon(link.name)} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

Member.propTypes = {
  member: PropTypes.object
}