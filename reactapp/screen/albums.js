import React from 'react';
import ResourceScreen from './ResourceScreen';

export default function Albums(props) {
  return <ResourceScreen title="Albums" endpoint="albums" fields={['title']} {...props} />;
}
