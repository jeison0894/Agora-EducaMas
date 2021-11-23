import { React, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './FeedbackProjects.css'
import { FiSend } from "react-icons/fi";
//import { RiChatDeleteLine } from "react-icons/ri";




const FeedbackProjects = () => {
  const [formsent, setFormsent] = useState(false);
  const [links, setLinks] = useState([]);
  const [comment, setComment] = useState([]);

  const addLink = (links) => {
    const newLinks = [...links, { links }];
    setLinks(newLinks);
  };

  return (
<>
  
    <div className='container-feedback'>
    
        <div className='container-post  '>
          <img
            src='https://media.cdnandroid.com/item_images/1068635/imagen-girly-wallpapers-profil-pics-for-girls-0big.jpg'
            className='user'
          />
          <p className='name-post'>Lola Mento</p>
          <p className='comment'>
          <div className="container">
                <linksForm addLinks={addLink} />
                <div>
                  {links.map((links, index) => (
              
                        <linksRow
                          key={index}
                          index={index}
                          links={links}      
                        />
                  ))}
                </div>
              </div>
          </p>
        </div>
        <div className='container-add'>
      
          <Formik
           initialValues={{
            links: [],
            date: "",
            comment: "",
            
           }}
           onSubmit={(values, { resetForm })=>{
             values.links=links;
             values.comment=comment;
             resetForm();
             setFormsent(true);
             setTimeout(() => setFormsent(false), 2000);
             console.log(values);
        }}

        validate={(values) => {
          let errors = {};
          
           if (!values.links) errors.links = "Este campo es requerido";
           
           if (!values.comment) errors.comment = "Este campo es requerido";
          
          }}
           >
           
          <Form>  
            <p><strong>Agregar una entrega</strong>(máximo 5 enlaces )  </p>
             <label htmlFor='links'> </label>
              <input className='link' 
              type='url' 
              name='links'
              id='links'
              placeholder="Ingresa una URL válida -https://www.ejemplo.com"
              
              />
           
            <button className='btn-add'
             type='submit' 
             value='Agregar'
             name='Agregar'
             >Agregar</button> 
          <p className='msj'>Escriba un mensaje</p>
          <div >
              <label htmlFor="comment" ></label>
              <Field as="textarea" name="comment" id="comment" rows="20" col="3" placeholder="mensaje" className='textarea-comment' />
             
             <FiSend className='icon-send' type="submit"/>
             </div>
           
          </Form>
   
          </Formik>
        </div>
    </div>
  
    </>
  )
}

export default FeedbackProjects
