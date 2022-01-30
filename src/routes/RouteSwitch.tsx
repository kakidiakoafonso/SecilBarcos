import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import Signinoute from './signin.route';
import Route from './route';
import { UserContext } from '../context/User';

export default function RouteSwitch() 
{
    const {logado} = useContext(UserContext)
  return (
    <>
    {logado?
    <Route/>:
    <Signinoute/>
    }
    </>
  );
}
