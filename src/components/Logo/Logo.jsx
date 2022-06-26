import React from 'react';

function Logo({ className = '' }) {
  return (
    <div className={ 'w-max font-vollkorn ' + className }>
      <font className="text-goonavy">D</font>
      <font className="text-gooblue">O</font>
      <font className="text-goocyan">CS</font>
      <font className="text-goonavy"> EN</font>
      <font className="text-gooviolet">GINE</font>
    </div>
  );
}

export default Logo;

