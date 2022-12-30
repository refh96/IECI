import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleSubmit = async (event) => {
    //Para el evento submit
    event.preventDefault()

    //Paso el elemento que genera el evento (el formulario)
    let formulario = event.target; 
    //Creo un objeto con los datos del formulario.
    const data = {
      "nombre":formulario.nombre.value,
      "aforo":formulario.aforo.value,
      "tiempoMaximoDeArriendo":formulario.tiempoMaximoDeArriendo.value,
      "status":formulario.status.value
    }

    // paso el onjeto a formato Json
    const JSONdata = JSON.stringify(data)

    // direccion de la api para guardar
    const url = 'http://146.83.198.35:1095/api/Espacios/'

    // opciones de envio
    const options = {
      // Metodo post
      method: 'POST',
      // en formato JSON
      headers: {
        'Content-Type': 'application/json',
      },
      // El cuerpo(body) enviado es el objeto Json
      body: JSONdata,
    }

    // Envio infoirmacion y espero respuesta
    const response = await fetch(url, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result}`)
  }


    return (
      <>
        <Head>
          <title>Crear Espacio Comun</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="continer">
          <div className="card">
            <div className="card-header">
              <h3>Crear Espacio Común</h3>
            </div>
            <form  onSubmit={handleSubmit} > 
            <div className="card-body">           
              <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" name="nombre" className="form-control"/>
              </div>         
              <div className="mb-3">
                  <label className="form-label">Aforo Maximo</label>
                  <input type="text" name="aforo" className="form-control"/>
              </div>         
              <div className="mb-3">
                  <label className="form-label">Tiempo Máximo De Arriendo</label>
                  <input type="number" name="tiempoMaximoDeArriendo" className="form-control"/>
              </div>      
              <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select name="status" className="form-select">
                      <option>Disponible</option>
                      <option>En Mantenimiento</option>
                  </select>
              </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-success w-100" type="submit">Enviar</button>
            </div>
            </form>
          </div>
        </main>
      </>
    )
}