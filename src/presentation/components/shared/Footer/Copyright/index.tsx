import React from 'react'
import { CopyRight, Language, LanguageSelect } from './styles'
import { IconDown } from '@/presentation/assets/icons'

const Copyright: React.FC = () => {
  return (
    <CopyRight>
      <Language>
        English<IconDown size='16' />
        <LanguageSelect aria-label="Switch Display Language">
          <option value="en">English</option>
          <option value="pt-br">Português (Brasil)</option>
        </LanguageSelect>
      </Language>
      <span>© 2022 Instagram from Meta</span>
    </CopyRight>
  )
}

export default Copyright
