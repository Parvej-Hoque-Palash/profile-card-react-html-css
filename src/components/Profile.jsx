import bgImg from '../assets/bg.jpg';
import dpImg from '../assets/dp.png';
import './Profile.css'



const Profile = () => {
  return (
    <div className="container">
        <div className="profile-card">
            <img src={bgImg} className='cover-pic' />
            <img src={dpImg} className='profile-pic' />
            <h2>Palash Hoque</h2>
            <p>Web Developer</p>
            <a href="" className='follow-btn'>Follow</a>
        </div>
    </div>
  )
}

export default Profile