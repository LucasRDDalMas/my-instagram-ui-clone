import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { Feed, SignIn, SignUp, Profile } from '@/presentation/pages'

ReactDOM.render(
    <Router
      Feed={Feed}
      Profile={Profile}
      SignIn={SignIn}
      SignUp={SignUp}
    />,
    document.getElementById('main')
)
