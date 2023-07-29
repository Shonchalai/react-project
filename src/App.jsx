import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/Friends/Friends'
import News from './components/news/News'
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

function App({state}) {

  return (
    <Router>
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Navbar friends={ state.sidebar.friends}/>
          <Routes>
            <Route path='/profile' element={< Profile posts={state.profilePage.posts} />} />
            <Route path='/messages' element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />} />
            <Route path='/news' element={<News />} />
            <Route path='/friends' element={<Friends friends={ state.sidebar.friends} />} />
          </Routes>
        </ContentWrapper>
      </Wrapper>
    </Router> 
  )
}

export default App
