import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Nothing here, bub.</h1>;
}

export default {
  component: NotFoundPage
};