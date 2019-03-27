import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ clearState }) => (
<Link to="/" onClick={clearState}><h1>Ranch Properties App</h1></Link>
)


export default Header;