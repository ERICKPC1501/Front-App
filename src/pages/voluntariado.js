import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import {
  Pane,
  Textarea,
  Text,
  TextInputField,
  Button,
  Autocomplete,
} from "evergreen-ui";

import Footer from "../components/Footer";
import imgvol from "../images/voluntariado.jpg";

const Voluntariado = () => {
 
  const [data, cambiar_data] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    cedula: "",
    celular: "",
    profesion: "",
  });
  
  console.log(data);
  const enviarFormulario = () => {
    fetch("http://localhost:1337/voluntarios", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.alert("gracias");
      })
      .catch((error) => window.alert(error));
  };
  return (
    <main>
      <NavbarComponent />
      <div className="cont-Volu">
        <Pane clearfix>
          <Pane
            className="form-vol"
            elevation={1}
            float="left"
            backgroundColor="white"
            width={550}
            height={720}
            margin={24}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <div className="titu-form">
              <Text size={500}>Registro de Voluntarios</Text>
            </div>
            <div>
              <TextInputField
                onChange={(e) =>
                  cambiar_data({ ...data, nombre: e.target.value })
                }
                width={400}
                label="Nombres"
              />
              <Text nombre="text-input-name" />
            </div>
            <div>
              <TextInputField
                onChange={(e) =>
                  cambiar_data({ ...data, apellido: e.target.value })
                }
                width={400}
                label="Apellidos"
              />
              <Text apellido="text-input-lastname" />
            </div>
            <div>
              <TextInputField
                onChange={(e) =>
                  cambiar_data({ ...data, email: e.target.value })
                }
                width={400}
                label="Correo Electrónico"
              />
              <Text correo="text-input-email" />
            </div>
            <div>
              <TextInputField
                onChange={(e) =>
                  cambiar_data({ ...data, cedula: e.target.value })
                }
                width={400}
                label="Cédula de identidad"
              />
              <Text cedula="text-input-cedula" />
            </div>
            <div>
              <TextInputField
                onChange={(e) =>
                  cambiar_data({ ...data, celular: e.target.value })
                }
                width={400}
                label="Número Celular"
              />
              <Text celular="text-input-numero" />
            </div>
            <div>
              <Autocomplete
                title="profesion"
                onChange={(changedItem) =>
                  cambiar_data({ ...data, profesion: changedItem })
                }
                items={[
                  "Doctor",
                  "Enfermero",
                  "psicologo",
                  "Paramedico",
                  "Ingeniero",
                ]}
              >
                {(props) => {
                  const { getInputProps, getRef, inputValue } = props;
                  return (
                    <TextInputField
                      width={400}
                      value={inputValue}
                      ref={getRef}
                      {...getInputProps()}
                      label="Profesión"
                    />
                  );
                }}
              </Autocomplete>
            </div>

            <Button
              onClick={enviarFormulario}
              appearance="primary"
              className="boton-ayuda"
            >
              Enviar
            </Button>
          </Pane>

          <Pane
            className="img-form"
            elevation={1}
            float="left"
            width={550}
            height={620}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img className="imgvol" src={imgvol} />
          </Pane>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Voluntariado;
