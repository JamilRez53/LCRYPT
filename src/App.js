import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserAuth from './components/user/userAuthComponents/UserAuth';
import Signup from './components/user/userAuthComponents/SignUp';
import UserDetails from './components/user/UserDetails';
import AdminAuth from './components/admin/authComponents/AdminAuth';
import AdminSignup from "./components/admin/authComponents/AdminSignup";
import Admin from "./pages/Admin/Admin";
import Questions from './pages/Admin/Questions';
import Topics from './pages/Admin/Topics';
import Tutorials from './pages/Admin/Tutorials';
import UpdateTopics from './components/admin/TopicsComponent/UpdateTopics';
import ViewTopics from './components/admin/TopicsComponent/ViewTopics';
import UpdateQuestions from './components/admin/QuestionComponents/UpdateQuestions'
import UpdateTutorials from './components/admin/TutorialComponent/UpdateTutorials';
import AddTopics from './components/admin/TopicsComponent/AddTopics';
import ViewTutorials from './components/admin/TutorialComponent/ViewTutorials';
import ViewDetails from './components/user/userTopicsComponents/ViewDetails';
import User from './pages/User/User';
import TutorialDetail from './components/user/userTutorialComponents/TutorialDetail'
import UserTutorials from './components/user/userTutorialComponents/UserTutorials';
import UserProfile from './components/user/UserProfile/UserProfile';
import UserEdit from './components/user/UserProfile/UserEdit';
import Home from './pages/Home';
import Quiz from './pages/Admin/Quiz';
import SendMessage from './components/admin/QuizResult/SendMessage'
import Quiz1 from './components/user/quizComponents/Quiz1';
import Quiz2 from './components/user/quizComponents/Quiz2';
import Quiz3 from './components/user/quizComponents/Quiz3';
import Quiz4 from './components/user/quizComponents/Quiz4';
import Quiz5 from './components/user/quizComponents/Quiz5';
import Quiz6 from './components/user/quizComponents/Quiz6';
import Quiz7 from './components/user/quizComponents/Quiz7';
import Quiz8 from './components/user/quizComponents/Quiz8';
import Quiz9 from './components/user/quizComponents/Quiz9';
import Quiz10 from './components/user/quizComponents/Quiz10';

import QuizMain from './components/user/quizComponents/QuizMain';
import AdminRegister from './components/SuperAdmin/AdminSignup';
//import Quora from './components/QuoraComponents/Quora';
import Authentication from './components/SuperAdmin/Authentication';
import UserQuiz from './pages/User/UserQuiz';
import UserHome from './pages/User/UserHome';
import UserView from './pages/User/UserView';
import AddContent from './components/admin/SyllabusComponents/AddContent'
import UpdateContent from './components/admin/SyllabusComponents/UpdateContent'
import AdminDashboard from './components/SuperAdmin/AdminDashboard'
import Instructor from './components/SuperAdmin/Instructor'
import Syllabus from './pages/Admin/Syllabus'
function App() {
  const islogged = window.localStorage.getItem("loggedIn");
  const isInstructorLogged = window.localStorage.getItem("instructorloggedIn");
  const isAdminLogged = window.localStorage.getItem("adminloggedIn");
  return (
    
    <Router>
    <>
      <Routes>
      <Route path="/" element={isAdminLogged==="true" ? <AdminDashboard/>:<Home/> }/>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
     <Route path="/" element={islogged==="true" ? <UserHome/>:<Home/>}/>
     <Route path="/userHome" element={<UserHome/>}/>
     <Route path="/login" element={<UserAuth/>}/>
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/userTopics/:week" element={<User/>} />
     <Route path="/" element={isInstructorLogged==="true" ? <Topics/>:<Home/>}/>
     <Route path="/instructorlogin" element={<AdminAuth/>}/>
     <Route path="/instructor-signup" element={<AdminSignup/>}/>
     <Route path="/adminlogin" element={<Authentication/>}/>
     <Route path="/admin-signup" element={<AdminRegister/>}/>
     <Route path="/topics" element={<Topics/>}/>
     <Route path="/instructor" element={<Instructor/>}/>
     <Route path="/questions" element={<Questions/>}/>
     <Route path="/tutorials" element={<Tutorials/>}/>
     <Route path="/addTopics" element={<AddTopics/>}/>
     <Route path="/editTopics/:id" element={<UpdateTopics/>}/>
     <Route path="/viewTopics/:id" element={<ViewTopics/>}/>
     <Route path="/userView/:week" element={<UserView/>}/>
     <Route path="/editQuestions/:id" element={<UpdateQuestions/>}/>
     <Route path="/editTutorials/:id" element={<UpdateTutorials/>}/>
     <Route path="/viewTutorials/:id" element={<ViewTutorials/>}/>
     <Route path="/viewDetails/:id" element={<ViewDetails/>}/>
     <Route path="/userTutorials" element={<UserTutorials/>}/>
     <Route path="/profile" element={<UserProfile/>}/>
     <Route path="/tutorialdetail/:id" element={<TutorialDetail/>}/>
     <Route path="/editUser/:id" element={<UserEdit/>}/>
     <Route path="/quiz/" element={<Quiz/>}/>
     {/* <Route path="/queries" element={<Quora/>}/> */}
     <Route path="/quizweek1/" element={<Quiz1/>}/>
     <Route path="/quizweek2/" element={<Quiz2/>}/>
     <Route path="/quizweek3/" element={<Quiz3/>}/>
     <Route path="/quizweek4/" element={<Quiz4/>}/>
     <Route path="/quizweek5/" element={<Quiz5/>}/>
     <Route path="/quizweek6/" element={<Quiz6/>}/>
     <Route path="/quizweek7/" element={<Quiz7/>}/>
     <Route path="/quizweek8/" element={<Quiz8/>}/>
     <Route path="/quizweek9/" element={<Quiz9/>}/>
     <Route path="/quizweek10/" element={<Quiz10/>}/>
   
     <Route path="/quizmain/" element={<QuizMain/>}/>
     <Route path="/quizresult/" element={<Quiz/>}/>
     <Route path = "#userquiz" element={<UserQuiz/>}/>
     <Route path="/addContent" element={<AddContent/>}/>
     <Route path="/syllabus" element={<Syllabus/>}/>
     <Route path="/editContent/:id" element={<UpdateContent/>}/>
     <Route path="/sendMessage/:id" element={<SendMessage/>}/>
      </Routes>
     
    </>
    </Router>
  );
}

export default App;
