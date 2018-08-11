import React from 'react';
import Loadable from 'react-loadable';

const LazyEditProfile = Loadable({
  loader: () => import('./EditProfile'),
  loading() {
    return <div>Loading...</div>
  }
});

export default LazyEditProfile;