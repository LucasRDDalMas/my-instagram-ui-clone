import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { Feed, Login } from '@/presentation/pages'

ReactDOM.render(
    <Router
      Feed={Feed}
      Login={Login}
    />,
    document.getElementById('main')
)
