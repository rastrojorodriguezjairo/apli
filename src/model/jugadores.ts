import {Schema, model } from 'mongoose'

// Definimos el Schema de la colección jugadores

const jugadoresSchema = new Schema({
    _id: Number,
    NickName: String,
    Nombre: String,
    Apellido: String,
    Edad: Number,
    Pais: String,
    Posicion: String,
    KDA: Number,
    Total: {
      Asesinatos: Number,
      Muertes: Number,
      Asistencias: Number,
    },
    Campeones_Destacados: Array,
    Equipo: String
    })
    
    export const Jugadores = model('jugadores',jugadoresSchema)