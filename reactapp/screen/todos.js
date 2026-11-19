import React from 'react';
import ResourceScreen from './ResourceScreen';

export default function Todos(props) {
  return <ResourceScreen title="Todos" endpoint="todos" fields={['title', 'completed']} {...props} />;
}
