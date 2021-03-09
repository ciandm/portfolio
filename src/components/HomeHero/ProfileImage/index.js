import React from 'react';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <Image
      src="/images/profile-picture.jpg"
      alt="My profile picture"
      layout="fill"
      objectFit="cover"
      priority
    />
  );
};

export default ProfileImage;
