import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[]
}

const Profiles = ({ profiles }: ProfilesProps) => {
  if(!profiles.length) return <h1>Loading...</h1>

  return (
    <>
      {profiles.map((profile: Profile) =>
      <div key={profile.id.toString()}>
        <p>{profile.name}</p>
        <img height={'100px'} src={profile.photo ? profile.photo : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="profile" />
      </div>
      )}
    </>
  )
}
 
export default Profiles