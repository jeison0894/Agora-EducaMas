import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const UserLink = ({ user, handleLogout }) => {
  return (
    <>
      <div className='container-psd'>
        <Link to='#' className='avatar'>
          <img className='img-avatar' src={user.avatar} alt='' /> {user.name}{' '}
        </Link>
      </div>
      <Dropdown>
        <Dropdown.Toggle
          variant='bg-transparent'
          id='dropdown-basic'
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to='/profile'>Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to='/' onClick={handleLogout}>
              Logout
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default UserLink
