import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  position: relative;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

export const Images = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.25s;

  & .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  & .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
`

export const Image = styled.div`
  width: 100%;

  img {
    padding: 0;
    margin: 0;
    width: 100%;
    object-fit: cover;
  }
`

export const ImageCarouselList = styled.div`
  display: flex;
  gap: 6px;
  height: 40px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
`

export const ImageCarouselListItem = styled.div`
  display: flex;
  background-color: var(--background-image-list);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &.active {
    background-color: var(--quartary);
  }

  &:last-child {
    margin-right: 0;
  }
`
