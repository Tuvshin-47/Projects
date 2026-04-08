import React from 'react';

export default function Avatar() {
  const avatar: string = 'https://i.imgur.com/MK3eW3As.jpg';
  const description: string = 'cfghjklkjhv';
  return <img className="avatar" src={avatar} alt={description} />;
}
