import React from 'react';
import classes from './Question.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Questions extends React.Component {
  state = {
    isOpen: false,
  };
  openQuestion = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeQuestion = () => {
    this.setState({
      isOpen: false,
    });
  };

  questionList = this.props.list.map((el) => (
    <div className={classes.item} key={el}>
      <div className={this.state.isOpen ? classes.captionOpen : classes.captionClose}>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <p className={classes.caption}>{el.caption}</p>
        <span className={classes.toggle} onClick={this.openQuestion}>
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </span>
      </div>
      <div className={this.state.isOpen ? classes.contentOpen : classes.contentClose}>
        <p className={classes.content}>{el.content}</p>
      </div>
    </div>
  ));

  render() {
    return (
      <>
        <h2 className={classes.title}>{this.props.title}</h2>
        {this.questionList}
      </>
    );
  }
}
export default Questions;
