import React, { Fragment } from 'react';

const RepoItems = ({ repo }) => {
  const { name, html_url } = repo;
  return (
    <Fragment>
      <span className="repo">
        <a href={html_url}>{name}</a>
      </span>
    </Fragment>
  );
};

export default RepoItems;
