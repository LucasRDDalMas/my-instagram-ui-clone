import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;
  box-sizing: content-box;

  ${device.md`
    padding: 30px 20px 0;
    width: calc(100% - 40px);
  `}
`

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin: 16px 16px 24px;
  ${device.md`
    margin: 0;
    margin-bottom: 44px;
  `}
`

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;

  ${device.md`
    flex-shrink: 0;
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 30px;
  `}
`

export const ProfileImageBorder = styled.div`
  border: 2px solid var(--border);
  overflow: hidden;
  border-radius: 50%;
  align-self: center;
  display: block;
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  width: 77px;
  height: 77px;
  border: 5px solid #FFF;

  ${device.md`
    width: 160px;
    height: 160px;
  `}
`

export const ProfileStatusWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 30px;
  flex-grow: 2;
`

export const ProfileStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileUsername = styled.h2`
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
`

export const Verified = styled.div`
  display: flex;
  margin-left: 8px;
`

export const Button = styled.button`
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const ButtonFollow = styled(Button)`
  margin-left: 8px;
  padding: 0 24px;
`

export const ButtonSuggestion = styled(Button)`
  margin-left: 8px;
  padding: 0 12px;
`

export const Options = styled.button`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileNumbers = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ProfileNumbersItem = styled.div`
  display: flex;
  margin-right: 40px;
  font-size: 16px;
  line-height: 24px;

  &:last-child {
    margin-right: 0;
  }
`

export const ProfileNumbersStrong = styled.span`
  font-weight: 600;
`
