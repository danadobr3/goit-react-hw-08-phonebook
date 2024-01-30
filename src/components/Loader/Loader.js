import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import cssloader from './Loader.module.css';

const Loader = () => {
  return (
    <div className={cssloader.loadersWrapper}>
      <TailSpin
        type="TailSpin"
        color="#02be6e"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loader;