import {Equipos} from './model/equipos'
import {Jugadores} from './model/jugadores'
import {Partidas} from './model/partidas'
import { db } from './database/database'
import {Request, Response} from 'express'
import express from 'express'
const app = express()
const port = 3000

//La cabecera será la página primera que se vera y a partir de la cual se podrá acceder a las consultas

const cabecera = async (req: Request, res: Response) => {
   res.send("Proyecto 3º Trimestre: Liga Española de League Of Legends")
}
app.listen(process.env.PORT || port);
//Esta primera consulta llamada "primera", nos mostrará la media de asesinatos, muertes y asistencia de los ADC de los equipos, para saber cual equipo tiene las mejores estadisticas en la posición de ADC

const primera = async (req: Request, res: Response) => {
    await db.conectarBD()
 .then(
    async (mensaje) => {
        console.log(mensaje)
        const query = await Jugadores.aggregate([
    {
       $match: {"Posición":"ADC"}
    },
    {
      $unwind: "$Total"
    },
    {
      $group: {
        _id: "$Equipo",
        Media_Asesinatos: {$avg: "$Total.Asesinatos"},
        Media_Muertes: {$avg: "$Total.Muertes"},
        Media_Asistencias: {$avg: "$Total.Asistencias"}
      }
    }
    ])
        res.json(query)
    })
    .catch(
      (mensaje) => {
        res.send(mensaje)
        console.log(mensaje)
    })
    db.desconectarBD()
  } 

// En la segunda consulta queremos saber que equipo va primero en la liga, es decir que equipo ha ganado más partidas, sin contar el torneo

const segunda = async (req: Request, res: Response) => {
    await db.conectarBD()
  .then(
    async (mensaje) => {
        console.log(mensaje)
        const query = await Partidas.aggregate([
        {
          $match:{ 
            $expr: { $lt: [ { $month: "$Fecha" }, 3 ] } }
        },
        {
       $group: {
           _id:"$Ganador",
           Total_Victorias: {$sum:1}
       }
    },
    {
        $sort: {
            Total_Victorias: -1
        }
    }
    ])
        res.json(query)
    })
    .catch(
      (mensaje) => {
        res.send(mensaje)
        console.log(mensaje)
    })
    db.desconectarBD()
  }


app.get('/', cabecera)
app.get('/primera', primera)
app.get('/segunda', segunda)
app.listen(3000)