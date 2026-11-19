import React from 'react';
import ResourceScreen from './ResourceScreen';

export default function Comments(props) {
  return <ResourceScreen title="Comments" endpoint="comments" fields={['name', 'email', 'body']} {...props} />;
}
