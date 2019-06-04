import React, { Fragment } from 'react';
import './styles.scss';

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

export default function Member({ member: { name, bio, links, img, role } }) {
  return (
    <Fragment>
      <div className="member__image--container">
        <img src={img} alt={name} className="member__image" />
      </div>
      <div className="member__content">
        <h2 className="member__name">{name}</h2>
        <p className="member__role">{role}</p>
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
