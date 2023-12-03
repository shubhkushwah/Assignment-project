import React from 'react'
import './AboutStyle.css'
// import Title from '../common/title/Title'
import { homeAbout } from '../../SiteData'
import AWrapper from './AWrapper'

const AboutCards = () => {
  return (
    <>
      <section className='aboutHome'>
            <div className="container flexSB">
                <div className="left row">
                    <img src='https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                </div>

                <div className="right row">
                {/* <Title subtitle='LEARN ANYTHING' title='Benifits Of Online Learning' /> */}
                <div className="items">
                    {homeAbout.map((val) => (
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt="pic" />
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
      </section>
      <AWrapper />
    </>
  )
}

export default AboutCards
