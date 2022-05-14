import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { Feed, SignIn, SignUp } from '@/presentation/pages'

ReactDOM.render(
    <Router
      Feed={Feed}
      SignIn={SignIn}
      SignUp={SignUp}
    />,
    document.getElementById('main')
)
