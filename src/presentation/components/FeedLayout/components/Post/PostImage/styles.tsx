import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  position: relative;


  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
export const Image = styled.div`
  width: 100%;

  img {
    padding: 0;
    margin: 0;
    width: 100%;
    object-fit: cover;
  }
`
