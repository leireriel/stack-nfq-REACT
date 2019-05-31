import React, { Component } from 'react';
import ModalInfo from './ModalInfo';
import './styles.scss';

export default class StackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false;
    }

    this.openDialogue = this.openDialogue.bind(this)
  }

  openDialogue() { 
    this.setState( { isOpen : true } );

  }

  render() {
    return (
      <div>
        <ModalInfo />
      </div>
    );
  }
}
