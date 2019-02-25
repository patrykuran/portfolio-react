import React from 'react';

const PortfolioItem = (props) => (
    <h3>PortfolioItem - id {props.match.params.id}</h3>
);

export default PortfolioItem;