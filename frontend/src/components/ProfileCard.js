import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <UserIcon className="icon" />
      <h2>{profile.name}</h2>
      <p className="title">{profile.title}</p>
      <p>-</p>
      <p className="location">
        <MapPinIcon />
        {profile.location}
      </p>
      <p className="description">{profile.description}</p>
    </div>
  );
};

export default ProfileCard;
