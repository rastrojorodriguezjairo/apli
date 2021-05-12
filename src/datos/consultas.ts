/* 1:  Queremos que se nos muestre por pantalla el NickName de cada jugador junto al equipo que pertenece y el NickName del entrenador que
tienen asignado 
db.jugadores.aggregate([
    {
        $lookup:
        {
            from: "equipos",
            localField: "Equipo",
            foreignField: "Nombre",
            as: "Entrenador"
        }
    },
    {
        $project: {
            Invocador: "$NickName",
            Equipo: "$Equipo",
            Entrenador: "$Entrenador.Entrenador.NickName"
        }
    }
]).pretty()

/* 2:  ¿Cuantas victorias ha tenido cada equipo en total en lo que llevamos de temporada?
db.partidas.aggregate([
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
]).pretty()

/* 3: Para Valorar y comparar las estadísticas generales de los equipos, queremos la media del kda de cada equipo y el acumulado de los asesinatos, muertes y asistencias, ademas nos interesa saber que la edad del jugador más viejo y el más joven
db.jugadores.aggregate([
    {
        $unwind: "$Total"
    },
    {
        
        $group: {
            _id: "$Equipo",
            Media_Kda: {$avg: "$KDA"},
            Mas_Viejo: {$max: "$Edad"},
            Mas_Joven: {$min: "$Edad"},
            T_Asesinatos: {$sum: "$Total.Asesinatos"},
            T_Muertes: {$sum: "$Total.Muertes"},
            T_Asistencias: {$sum: "$Total.Asistencias"}
        }
    },
    {
        $project: {
            _id:0,
            Equipo: "$_id",
            Media_KDA: {$round: ["$Media_Kda", 2]},
            Jugador_Veterano: "$Mas_Viejo",
            Jugador_Novel: "$Mas_Joven",
            Total_Asesinatos: "$T_Asesinatos",
            Total_Muertes: "$T_Muertes",
            Total_Asistencias: "$T_Asistencias"
        }
    }
]).pretty()

/* 4:  Cada jugador tiene sus campeones preferidos a la hora de jugar, pero segun dichos gustos y preferencias, ¿qué campeones son los más jugados o elegidos como mejores opciones?

db.jugadores.aggregate([
    {
        $unwind: "$Campeones_destacados"
    },
    {
        $group: {
            _id: "$Campeones_destacados",
            Veces_jugadas: {$sum: 1}
        }
    },
    {
        $sort: {
            Veces_jugadas: -1
        }
    }
]).pretty()*/