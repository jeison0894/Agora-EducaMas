import React from 'react'
import './FeedbackProjects.css'
import { FiSend } from "react-icons/fi";
import { RiChatDeleteLine } from "react-icons/ri";
import { useState, useEffect } from 'react'
import axios from 'axios'



const FeedbackProjects = () => { 
  const initialState = {
    id_Proyecto: '',
    id_user:'',
    id_publisher: '',
    text:''
}
  const [user, setUser] = useState([initialState]);

  const {
    id_Proyecto,
    id_user,
    id_publisher,
    text,
  } =user

  useEffect(() => {
    const fetchData = async () => {
      try {
            const res = await axios.get('http://localhost:3005/api/agora/get-deliverie', {
              id_Proyecto,
              id_user,
              id_publisher,
              text,
            })
            console.log(res)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container main-section border col-lg-2 col-sm-2 col-5'>
      <div className='row'>
        <div className='container-post  col-lg-10 col-sm-10 col-7'>
          <img
            src='https://media.cdnandroid.com/item_images/1068635/imagen-girly-wallpapers-profil-pics-for-girls-0big.jpg'
            className='user'
          />

          <p className='name-post'>Lola Mento</p>
          <p className='comment'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            commodi expedita consequuntur eius, adipisci tempore! Odit nostrum
            possimus deserunt quod at.
          </p>
        </div>
        <div className='container-add'>
          <form> 
            <p> <strong>Agregar una entrega</strong> (máximo 5 enlaces )</p>
            <label>
              <input className='link' 
              type='url' 
              name='link'
              placeholder="Ingresa una URL válida -https://www.ejemplo.com"
              
              />
            </label>
            <input className='btn-add'
             type='submit' 
             value='Agregar'
             />
          <p>Escriba un mensaje</p>
          <textarea
             className='textarea-comment'
            onChange={props.handleChange}
            value={props.comment} />
             <FiSend className='icon-send'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FeedbackProjects
