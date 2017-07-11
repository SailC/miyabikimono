import React from 'react'
import {Link} from 'react-router-dom'

const NoMatch = ({ location }) => (
  <section class='hero is-fullheight'>
    <div class='hero-body'>
      <div class='container'>
        <div className='has-text-centered'>
          <img src='/images/404.gif' />
        </div>
        <div className='has-text-centered'>
          <Link to='/'>
            <button class='button is-primary'>
              返回主页
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default NoMatch
