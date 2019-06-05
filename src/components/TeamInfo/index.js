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
      <main className="team__main">
        <div className="wrapper">
          <p className="app__info">Stack NFQ - una aplicación web donde los desarrolladores de la empresa pueden encontrar soluciones a problemas de programación de diferentes lenguajes, así como plantear posibles dudas para que sean resueltas por sus compañeros.</p>
          <ul className="member__list">
            {dataMembers.map((member, index) => (
              <li className="member__item" key={index}>
                <Member member={member} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
