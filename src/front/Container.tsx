import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './Router';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import './resources/font/NotoSansKR-Hestia/stylesheets/NotoSansKR-Hestia.css';

interface IContainerProps {}

class Container extends React.Component<IContainerProps, undefined> {
  render() {
    return (
      <AppRouter />
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('lightsaber-react-app'));
