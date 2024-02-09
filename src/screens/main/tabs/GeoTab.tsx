import { Block, Button, Tab } from 'framework7-react';
import React, { useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import {LocalNotifications} from '@capacitor/local-notifications'


export const GeoTab = () => {

  // const [value,setValue] = useState('')
 
    const printCurrentPosition = async () => {
        // await Geolocation.requestPermissions()
        const coordinates = await Geolocation.getCurrentPosition();
        // console.log('Current position:', coordinates.coords.latitude, coordinates.coords.longitude);
        // setValue(`${coordinates.coords.latitude}, ${coordinates.coords.longitude}`)
        alert(`Current position: ${coordinates.coords.latitude} , ${coordinates.coords.longitude}`)
      };


      const notifs = async () => {
        await LocalNotifications.requestPermissions()
        let options = await LocalNotifications.schedule({
          notifications: [
            {
              id: 1,
              title: "",
              body: "First notification",
              schedule: {at: new Date(Date.now() + 1000 * 5)}
            },
            {
                id: 2,
                title: "",
                body: "Second notification",
                schedule: {at: new Date(Date.now() + 1000 * 6)}
              },
              {
                id: 3,
                title: "",
                body: "Third notification",
                schedule: {at: new Date(Date.now() + 1000 * 7)}
              },
              {
                id: 4,
                title: "",
                body: "Fourth notification",
                schedule: {at: new Date(Date.now() + 1000 * 8)}
              },
              {
                id: 5,
                title: "",
                body: "Fifth notification",
                schedule: {at: new Date(Date.now() + 1000 * 9)}
              }
          ],
        });
        console.log('scheduled notifications', options);
      };

    return (
        <Tab id="tab-4" className="page-content">
        <Block>
            <Button fill className='margin-top' onClick={printCurrentPosition}>Geolocation</Button>
            <Button fill className='margin-top' onClick={notifs}>Notification</Button>
        </Block>
        </Tab>
    );
};
