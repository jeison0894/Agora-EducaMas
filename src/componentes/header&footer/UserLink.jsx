import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const UserLink = ({ user, handleLogout }) => {
  return (
    <>
      <div className="container-main-avatarContainer">
        <div className="avatarContainer">
          <img className="img-avatar" src={user.avatar} alt="Avatar" />
          <p>{user.name}</p>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="bg-transparent"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default UserLink;