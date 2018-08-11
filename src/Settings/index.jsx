import React from 'react';
import Loadable from 'react-loadable';

const LazySettings = Loadable({
  loader: () => import('./Settings'),
  loading() {
    return <div>Loading...</div>
  }
});

export default LazySettings;