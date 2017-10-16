import React from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

const buttonStyle = css`
  padding: 0.5rem 2rem;
  background-color: orange;
  font-weight: 600;
  border: 2px solid orange;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: orange;
  }

  &:focus {
    outline: 0;
  }
`;

const CounterPage = ({increment, decrement}) => (
  <div>
    <h1>Here you can count up or down</h1>
    <button className={buttonStyle} onClick={increment}>Up</button>
    <br/>
    <br/>
    <button className={buttonStyle} onClick={decrement}>Down</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(null, mapDispatchToProps)(CounterPage);
