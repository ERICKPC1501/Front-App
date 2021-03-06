import * as React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  Pane,
  Dialog,
  Popover,
  Position,
  Menu,
  EditIcon,
  TrashIcon,
} from "evergreen-ui";

const Ropa = () => {
  const [isShown, setIsShown] = React.useState(false);

   /** informacion de la donacion de ropa **/
   const [data_ropa, actualizar_data_ropa] = React.useState([]);
   const [inf_data_ropa, cambiar_inf_data_ropa] = React.useState([]);
 
   React.useEffect(() => {
     fetch("http://localhost:1337/articulos-ropas")
       .then((response) => response.json())
       .then((data) => actualizar_data_ropa(data));
   }, []);
 
  return (
    <main>
      <Pane
        className=""
        elevation={0}
        float="center"
        width={1220}
        height={550}
        margin={20}
        display="flex"
        justifyContent="right"
        alignItems="center"
        flexDirection="column"
      >
        <div>
        <Table striped bordered hover>
            {data_ropa.length &&
              data_ropa.map((item, key) => (
                <>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre del donante</th>
                      <th>Información</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{key + 1}</td>
                      <td>name</td>
                      <td>
                        <Button
                          onClick={() => {
                            setIsShown(true);
                            cambiar_inf_data_ropa(item);
                          }}
                        >
                          Ver Información
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
          </Table>
          <Pane>
            <Dialog
              isShown={isShown}
              title="Donante 1"
              onCloseComplete={() => setIsShown(false)}
              hasFooter={false}
            >
              <div>
                <div>
                  <b>Género</b>
                </div>
                <div className="aws">{inf_data_ropa.genero} </div>
                <div>
                  <b>Tipo</b>
                </div>
                <div className="aws">{inf_data_ropa.tipo}</div>
                <div>
                  <b>Talla</b>
                </div>
                <div className="aws">{inf_data_ropa.talla}</div>
                <div>
                  <b>Cantidad</b>
                </div>
                <div className="aws">{inf_data_ropa.cantidad}</div>
              </div>
            </Dialog>
          </Pane>
          <h1>654654</h1>
          
        </div>
      </Pane>
    </main>
  );
};

export default Ropa;
