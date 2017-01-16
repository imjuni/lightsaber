import * as React from 'react';
import logger from '../services/util/Logger';

export interface IAppProps {
  children: JSX.Element,
}

export class App extends React.Component<IAppProps, undefined> {
  render() {
    logger()('Application Component, render');

    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}
