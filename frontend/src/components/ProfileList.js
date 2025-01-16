import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profiles-container">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
