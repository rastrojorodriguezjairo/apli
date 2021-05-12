import {Schema, model } from 'mongoose'

// Definimos el Schema de la colección partidas

const partidasSchema = new Schema({
    _id: Number,
    Jornada: String,
    Equipo1: String,
    Equipo2: String,
    Resultado: String,
    Fecha: Date,
    Ganador: String
    })
    
    export const Partidas = model('partidas',partidasSchema)