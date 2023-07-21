import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import Friends from './components/Friends/Friends'
import News from './components/News/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <Router>
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Navbar />
          <Routes>
            <Route path='/profile' element={< Profile />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </ContentWrapper>
      </Wrapper>
    </Router> 
  )
}

export default App
