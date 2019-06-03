import React from 'react';
import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';
import { dataMembers } from '../../data/dataMembers.js';
import Member from './Member';

export default function TeamInfo() {
  return (
    <div className="team__page">
      <Header />
      <div className="wrapper">
        <h1 className="about__title">Team</h1>
        <ul className="member__list">
          {dataMembers.map((member, index) => (
            <li className="member__item" key={index}>
              <Member member={member} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
