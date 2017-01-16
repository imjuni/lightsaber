import * as React from 'react';

export interface IUserProps {}

export class User extends React.Component<IUserProps, undefined> {
  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    );
  }
}
