import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../estilos/Contact/contact-us.css";
import { FormattedMessage,useIntl  } from "react-intl";



export function Contact() {
  
  const intl = useIntl();
 


  const nameMessage = intl.formatMessage({
    id: 'app.Name',
    defaultMessage: 'Name',
    style: { fontSize: '17px' },
  });

  const intl2 = useIntl();
 
  const emailMessage = intl2.formatMessage({
    id: 'app.Email',
    defaultMessage: 'Email',
    style: { fontSize: '17px' },
  });

  const intl3 = useIntl();
 
  const passMessage = intl3.formatMessage({
    id: 'app.Pass',
    defaultMessage: 'Password',
    style: { fontSize: '17px' },
  });
  const intl4 = useIntl();
 
  const numberMessage = intl4.formatMessage({
    id: 'app.Number',
    defaultMessage: 'Phone Number',
    style: { fontSize: '17px' },
  });

  const intl5 = useIntl();
 
  const mesMessage = intl5.formatMessage({
    id: 'app.Mes',
    defaultMessage: 'Message',
    style: { fontSize: '17px' },
  });
  return (
    <div className="Formulario">
      <strong>
        {" "}
        <h1 id="titulo"> 
        <FormattedMessage
        id="app.Contact"
        defaultMessage="Contact Us"
        />
        </h1>
      </strong>
      <div>
        <Form className="Formulario-form">
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Control type="text"  placeholder={nameMessage} style={{fontSize:"17px"}}   />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder={emailMessage} style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder={passMessage} style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder={numberMessage} style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className="form-select" aria-label="Default select example" style={{fontSize:"17px"}}>
              <option selected>
              <FormattedMessage
              id="app.As"
              defaultMessage="Subject"
              />

              </option>
              <option value="1">
              <FormattedMessage
              id="app.SI"
              defaultMessage="Request information"
              />
                </option>
              <option value="2">
              <FormattedMessage
              id="app.SR"
              defaultMessage="Request meeting"
              />
               </option>
              <option value="3">
              <FormattedMessage
              id="app.R"
              defaultMessage="Other"
              />
                </option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder={mesMessage} style={{fontSize:"17px"}}
            ></textarea>
          </Form.Group>

          <Button variant="primary" type="submit">

            <FormattedMessage
            id="app.csend"
            defaultMessage="Send"
            />
           
          </Button>
        </Form>
      </div>
    </div>
  );
}

export function Mapa() {
  return (
    <div className="map">
      <img
        className="imagen-mapa"
        src={require("../../imagenes/Mapa.png")}
        alt="Optmen"
      />
    </div>
  );
}
