import React from 'react';
import { Redirect } from 'react-router';

export default function NotExist() {
  return (
    <div>
      <h1>This Page not exist, go to <Redirect to="/"><em>Home Page</em></Redirect></h1>
    </div>
  );
}
