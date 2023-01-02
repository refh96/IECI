import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

function Page({ data }) {
  const router = useRouter();
  const id = router.query.id;

  const handleSubmit = async (event) => {
    //Para el evento submit
    event.preventDefault();

    //Paso el elemento que genera el evento (el formulario)
    let formulario = event.target;
    //Creo un objeto con los datos del formulario.
    const data = {
      fecha_inicio: formulario.fecha_inicio.value,
      fecha_fin: formulario.fecha_fin.value,
      arrendatario: formulario.arrendatario.value,
      espacio: formulario.espacio.value
    };

    // paso el onjeto a formato Json
    const JSONdata = JSON.stringify(data);

    // direccion de la api para guardar
    const url = "http://146.83.198.35:1095/api/arriendos/update/" + id;

    // opciones de envio
    const options = {
      // Metodo post
      method: "PUT",
      // en formato JSON
      headers: {
        "Content-Type": "application/json",
      },
      // El cuerpo(body) enviado es el objeto Json
      body: JSONdata,
    };

    // Envio infoirmacion y espero respuesta
    const response = await fetch(url, options);


    const result = await response.json();
    alert(`Is this your full name: ${result}`);
    router.back();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="continer">
        <div className="card">
          <div className="card-header">
            <h3>Crear arriendos</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">fecha Inicio</label>
                <input
                  type="date"
                  name="fecha_inicio"
                  className="form-control"
                  defaultValue={data.fecha_inicio}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">fecha Fin</label>
                <input
                  type="date"
                  name="fecha_fin"
                  className="form-control"
                  defaultValue={data.fecha_fin}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Arrendatario</label>
                <input
                  type="Schema.ObjectId"
                  name="arrendatario"
                  className="form-control"
                  defaultValue={data.arrendatario}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Espacio</label>
                <input
                  type="Schema.ObjectId"
                  name="espacio"
                  className="form-control"
                  defaultValue={data.espacio}
                />
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-success w-100" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  // direccion de la api para guardar
  const url = "http://146.83.198.35:1095/api/arriendos/search/" + id;

  // opciones de envio
  const options = {
    // Metodo post
    method: "GET",
    // en formato JSON
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Envio infoirmacion y espero respuesta
  const response = await fetch(url, options);


  const data = await response.json();
  return { props: { data } };
}

export default Page;