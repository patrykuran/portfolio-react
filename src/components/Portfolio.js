import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h2>Here are my works:</h2>
        <Link to="portfolio/1">Portfolio 1</Link>
        <Link to="portfolio/2">Portfolio 2</Link>
        <Link to="portfolio/3">Portfolio 3</Link>
    </div>

);

export default Portfolio;
