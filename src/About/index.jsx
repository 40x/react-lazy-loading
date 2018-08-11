import React from 'react';
import Loadable from 'react-loadable';

const LazyAbout = Loadable({
  loader: () => import('./About'),
  loading() {
    return <div>Loading...</div>
  }
});

export default LazyAbout;