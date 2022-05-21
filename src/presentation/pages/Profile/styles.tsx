import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;

  ${device.sm`
    padding: 30px 20px 0;
    width: calc(100% - 40px);
  `}
`

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin: 16px 16px 24px;
  ${device.sm`
    margin: 0;
    margin-bottom: 44px;
  `}
`

export const ProfileImageWrapper = styled.div`
  display: flex;
  margin-right: 28px;

  ${device.sm`
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 30px;
  `}
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  width: 77px;
  height: 77px;
  ${device.sm`
    width: 150px;
    height: 150px;
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
