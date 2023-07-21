import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile/Profile'
import './App.css'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto; 
  box-sizing: border-box;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22px;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 22px;
`

function App() {

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Navbar />
          <Profile />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default App
