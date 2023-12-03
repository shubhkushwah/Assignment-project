import React from 'react'
import Back from '../common/back/Back'
import './TeamStyle.css'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
      <Back />
      <section className='team padding' >
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
