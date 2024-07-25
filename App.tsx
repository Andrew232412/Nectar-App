import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}
