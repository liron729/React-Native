import React from 'react';
import ResourceScreen from './ResourceScreen';

export default function Users(props) {
  return <ResourceScreen title="Users" endpoint="users" fields={['name', 'email', 'phone']} {...props} />;
}
