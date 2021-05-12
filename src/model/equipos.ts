import {Schema, model } from 'mongoose'

// Definimos el Schema de la colección equipos

const equiposSchema = new Schema({
    _id: Number,
    Nombre: String,
    Entrenador: {
        NickName: String,
        Nombre: String,
        Apellido: String,
        Edad: Number,
        Pais: String,
    },
    Patrocinado: Boolean,
    Patrocinador: Array,
    })

    export const Equipos = model('equipos',equiposSchema)