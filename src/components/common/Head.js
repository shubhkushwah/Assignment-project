import React from 'react'
import './Header.css'


const Head = () => {
  return (
    <div>
      <section className='head'>
            <div className="container flexSB">
                <div className="logo">
                    <h1>ACADEMIA</h1>
                    <span>Online Education And Learning</span>
                </div>
                <div className="social">
                    <i className='fab fa-linkedin icon'></i>
                    <i className='fab fa-github icon'></i>
                    <i className='fab fa-instagram icon'></i>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Head
