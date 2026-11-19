import React from 'react';
import ResourceScreen from './ResourceScreen';

export default function Posts(props) {
  return <ResourceScreen title="Posts" endpoint="posts" fields={['title', 'body']} {...props} />;
}
