import React from 'react';
import './styles/loading.scss'

export default function loading({ user }) {
  return (
    <div className='spinnerContainer'>
      <div className='lockBody'></div>
        <img className='profileImg' src={`/images/users/${user?.photoURL}.png`} alt={`${user.displayName} avatar`} />
    </div>
  )
}

