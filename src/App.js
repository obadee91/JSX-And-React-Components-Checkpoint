import './styles/profile.css';

import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <ProfilePhoto className="profile-photo" />
      <FullName className="full-name" />
      <Address className="address" />
    </div>
  )
}

export default App;
