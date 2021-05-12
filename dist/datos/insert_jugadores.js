"use strict";
/*db.jugadores.drop()
db.jugadores.insertMany([
    {
        _id: 1,
        NickName:"Flakked",
        Nombre: "Victor",
        Apellido:"Lirola",
        Edad: 19,
        País: "España",
        Posición: "ADC",
        KDA: 6.9,
        Total: [
            {
                Asesinatos: 76
            },
            {
                Muertes: 41
            },
            {
                Asistencias: 164
            }],
        Campeones_destacados: ["Kai'sa","Aphelios","Jhin"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 2,
        NickName:"Hades",
        Nombre: "Maik",
        Apellido:"Jonker",
        Edad: 21,
        País: "Amsterdan",
        Posición: "JUNGLER",
        KDA: 6.3,
        Total: [
            {
                Asesinatos: 79
            },
            {
                Muertes: 26
            },
            {
                Asistencias: 100
            }],
        Campeones_destacados: ["Kha'zix","Olaf", "Hecarim"],
        Equipo: "UCAM Esports Club",
    },
    {
        _id: 3,
        NickName:"Baca",
        Nombre: "João",
        Apellido:"Novais",
        Edad: 20,
        País: "Portugal",
        Posición: "MID",
        KDA: 8,
        Total: [
            {
                Asesinatos: 76
            },
            {
                Muertes: 44
            },
            {
                Asistencias: 179
            }],
        Campeones_destacados: ["Orianna","Sylas","Azir"],
        Equipo: "UCAM Esports Club",
    },
    {
        _id: 4,
        NickName:"NJI",
        Nombre: "Contoursna",
        Apellido:"An",
        Edad: 21,
        País: "Francia",
        Posición: "JUNGLER",
        KDA: 4.8,
        Total: [
            {
                Asesinatos: 22
            },
            {
                Muertes: 26
            },
            {
                Asistencias: 113
            }],
        Campeones_destacados: ["Udyr","Skarner"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 5,
        NickName:"Rafitta",
        Nombre: "Rafa",
        Apellido:"Ayllón",
        Edad: 21,
        País: "España",
        Posición: "ADC",
        KDA: 8.2,
        Total: [
            {
                Asesinatos: 133
            },
            {
                Muertes: 51
            },
            {
                Asistencias: 123
            }],
        Campeones_destacados: ["Kai'sa","Tristana","Caitlyn"],
        Equipo: "UCAM Esports Club",
    },
    {
        _id: 6,
        NickName:"Viketox",
        Nombre: "Victor",
        Apellido:"Navarro",
        Edad: 21,
        País: "España",
        Posición: "SUPPORT",
        KDA: 4.9,
        Total: [
            {
                Asesinatos: 7
            },
            {
                Muertes: 12
            },
            {
                Asistencias: 52
            }],
        Campeones_destacados: ["Morgana", "Leona", "Seraphine"],
        Equipo: "BCN Squad",
    },
    {
        _id: 7,
        NickName:"Koldo",
        Nombre: "Luis",
        Apellido:"Pérez",
        Edad: 20,
        País: "España",
        Posición: "JUNGLER",
        KDA: 3.4,
        Total: [
            {
                Asesinatos: 64
            },
            {
                Muertes: 42
            },
            {
                Asistencias: 136
            }],
        Campeones_destacados: ["Hecarim", "Nidalee", "Gragas"],
        Equipo: "G2 Arctic",
    },
    {
        _id: 8,
        NickName:"Attila",
        Nombre: "Amadeu",
        Apellido:"Carvalho",
        Edad: 25,
        País: "Portugal",
        Posición: "ADC",
        KDA: 4.6,
        Total: [
            {
                Asesinatos: 141
            },
            {
                Muertes: 52
            },
            {
                Asistencias: 104
            }],
        Campeones_destacados: ["Kai'sa","Jhin", "Tristana"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 9,
        NickName:"Lebron",
        Nombre: "Dimitar",
        Apellido:"Kostadinov",
        Edad: 21,
        País: "Bulgaria",
        Posición: "JUNGLER",
        KDA: 4.5,
        Total: [
            {
                Asesinatos: 116
            },
            {
                Muertes: 65
            },
            {
                Asistencias: 166
            }],
        Campeones_destacados: ["Lillia","Shaco","Kayn"],
        Equipo: "Cream Real Betis",
    },
    {
        _id: 10,
        NickName:"Nata",
        Nombre: "Nataniel",
        Apellido:"Fikrisellasie",
        Edad: 20,
        País: "Dinamaka",
        Posición: "ADC",
        KDA: 4.3,
        Total: [
            {
                Asesinatos: 59
            },
            {
                Muertes: 38
            },
            {
                Asistencias: 104
            }],
        Campeones_destacados: ["Kai'sa","Ezreal", "Senna"],
        Equipo: "eMonkeyz Club",
    },
    {
        _id: 11,
        NickName:"Frendras",
        Nombre: "Carlos",
        Apellido:"Lloret",
        Edad: 21,
        País: "Español",
        Posición: "SUPPORT",
        KDA: 4.3,
        Total: [
            {
                Asesinatos: 14
            },
            {
                Muertes: 39
            },
            {
                Asistencias: 155
            }],
        Campeones_destacados: ["Alistar", "Leona", "Nautilus"],
        Equipo: "eMonkeyz Club",
    },
    {
        _id: 12,
        NickName:"Javier",
        Nombre: "Javier",
        Apellido:"Carmona",
        Edad: 20,
        País: "España",
        Posición: "MID",
        KDA: 4.2,
        Total: [
            {
                Asesinatos: 56
            },
            {
                Muertes: 35
            },
            {
                Asistencias: 91
            }],
        Campeones_destacados: ["Azir", "Galio", "Viktor"],
        Equipo: "eMonkeyz Club",
    },
    {
        _id: 13,
        NickName:"Sacre",
        Nombre: "Toni",
        Apellido:"Sabalic",
        Edad: 24,
        País: "Croacia",
        Posición: "TOP",
        KDA: 4.1,
        Total: [
            {
                Asesinatos: 37
            },
            {
                Muertes: 34
            },
            {
                Asistencias: 102
            }],
        Campeones_destacados: ["Renekton", "Gnar", "Camille"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 14,
        NickName:"Knighter",
        Nombre: "Jonas",
        Apellido:"Bryder",
        Edad: 22,
        País: "Dinamarca",
        Posición: "MID",
        KDA: 4.1,
        Total: [
            {
                Asesinatos: 52
            },
            {
                Muertes: 39
            },
            {
                Asistencias: 109
            }],
        Campeones_destacados: ["Orianna","Azir","Ekko"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 15,
        NickName:"Nixerino",
        Nombre: "Nicolás",
        Apellido:"Colocho",
        Edad: 22,
        País: "Español",
        Posición: "ADC",
        KDA: 4,
        Total: [
            {
                Asesinatos: 93
            },
            {
                Muertes: 41
            },
            {
                Asistencias: 70
            }],
        Campeones_destacados: ["Samira", "Senna","Kai'sa"],
        Equipo: "S2V Esports",
    },
    {
        _id: 16,
        NickName:"Dreedy",
        Nombre: "Jakub",
        Apellido:"Vicenik",
        Edad: 20,
        País: "Republica Checa",
        Posición: "TOP",
        KDA: 3.8,
        Total: [
            {
                Asesinatos: 69
            },
            {
                Muertes: 61
            },
            {
                Asistencias: 169
            }],
        Campeones_destacados: ["Gnar", "Kayle", "Aatrox"],
        Equipo: "UCAM Esports Club",
    },
    {
        _id: 17,
        NickName:"Miniduke",
        Nombre: "Ismael",
        Apellido:"Martínez",
        Edad: 23,
        País: "España",
        Posición: "MID",
        KDA: 3.3,
        Total: [
            {
                Asesinatos: 72
            },
            {
                Muertes: 66
            },
            {
                Asistencias: 188
            }],
        Campeones_destacados: ["Seraphine", "Cassiopeia", "Nocturne"],
        Equipo: "Cream Real Betis",
    },
    {
        _id: 18,
        NickName:"Rayito",
        Nombre: "Michael",
        Apellido:"Curtet",
        Edad: 20,
        País: "Español",
        Posición: "ADC",
        KDA: 2.9,
        Total: [
            {
                Asesinatos: 61
            },
            {
                Muertes: 45
            },
            {
                Asistencias: 108
            }],
        Campeones_destacados: ["Kai'sa", "Tristana", "Jinx"],
        Equipo: "Movistar Riders",
    },
    {
        _id: 19,
        NickName:"Fresskowy",
        Nombre: "Bartlomiej",
        Apellido:"Przewoznik",
        Edad: 21,
        País: "Polonia",
        Posición: "MID",
        KDA: 3.1,
        Total: [
            {
                Asesinatos: 77
            },
            {
                Muertes: 52
            },
            {
                Asistencias: 116
            }],
        Campeones_destacados: ["Yone", "Syndra", "Yasuo"],
        Equipo: "G2 Arctic",
    },
    {
        _id: 20,
        NickName:"JaVaaa",
        Nombre: "Javier",
        Apellido:"Martínez",
        Edad: 24,
        País: "España",
        Posición: "ADC",
        KDA: 3.9,
        Total: [
            {
                Asesinatos: 85
            },
            {
                Muertes: 52
            },
            {
                Asistencias: 106
            }],
        Campeones_destacados: ["Xayah", "Tristana", "Kalista"],
        Equipo: "Team Queso",
    },
    {
        _id: 21,
        NickName:"Maxlore",
        Nombre: "Nubar",
        Apellido:"Sarafian",
        Edad: 24,
        País: "Reino Unido",
        Posición: "Jungler",
        KDA: 3.9,
        Total: [
            {
                Asesinatos: 72
            },
            {
                Muertes: 55
            },
            {
                Asistencias: 130
            }],
        Campeones_destacados: ["Lillia", "Hecarim", "Phanteon"],
        Equipo: "Movistar Riders",
    },
    {
        _id: 22,
        NickName:"Eckas",
        Nombre: "Edgaras",
        Apellido:"Strazdauskas",
        Edad: 19,
        País: "Lituania",
        Posición: "JUNGLER",
        KDA: 3.6,
        Total: [
            {
                Asesinatos: 32
            },
            {
                Muertes: 25
            },
            {
                Asistencias: 59
            }],
        Campeones_destacados: ["Taliyah", "Lillia", "Olaf"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 23,
        NickName:"DahVys",
        Nombre: "David",
        Apellido:"Casco",
        Edad: 21,
        País: "España",
        Posición: "JUNGLER",
        KDA: 2.4,
        Total: [
            {
                Asesinatos: 72
            },
            {
                Muertes: 58
            },
            {
                Asistencias: 135
            }],
        Campeones_destacados: ["Olaf", "Gragas", "Hecarim"],
        Equipo: "Team Queso",
    },
    {
        _id: 24,
        NickName:"Supa",
        Nombre: "David",
        Apellido:"Martinez",
        Edad: 20,
        País: "España",
        Posición: "ADC",
        KDA: 3.6,
        Total: [
            {
                Asesinatos: 83
            },
            {
                Muertes: 50
            },
            {
                Asistencias: 92
            }],
        Campeones_destacados: ["Ezreal", "Senna", "Aphelios"],
        Equipo: "G2 Arctic",
    },
    {
        _id: 25,
        NickName:"Ronaldo",
        Nombre: "Paul",
        Apellido:"Betea",
        Edad: 22,
        País: "Rumania",
        Posición: "MID",
        KDA: 3,
        Total: [
            {
                Asesinatos: 62
            },
            {
                Muertes: 61
            },
            {
                Asistencias: 153
            }],
        Campeones_destacados: ["Syndra", "Seraphine", "Azir"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 26,
        NickName:"Jackspektra",
        Nombre: "Jakob",
        Apellido:"Kepple",
        Edad: 20,
        País: "Reino Unido",
        Posición: "ADC",
        KDA: 3.4,
        Total: [
            {
                Asesinatos: 91
            },
            {
                Muertes: 50
            },
            {
                Asistencias: 79
            }],
        Campeones_destacados: ["Miss Fortune", "Caitlyn", "Senna"],
        Equipo: "BCN Squad",
    },
    {
        _id: 27,
        NickName:"Xkenzuke",
        Nombre: "Serkan",
        Apellido:"Atilgan",
        Edad: 21,
        País: "Alemania",
        Posición: "MID",
        KDA: 2.9,
        Total: [
            {
                Asesinatos: 76
            },
            {
                Muertes: 56
            },
            {
                Asistencias: 114
            }],
        Campeones_destacados: ["Lucian", "Sylas", "Zoe"],
        Equipo: "Movistar Riders",
    },
    {
        _id: 28,
        NickName:"Rubi0o",
        Nombre: "Antonio",
        Apellido:"Cruz",
        Edad: 20,
        País: "España",
        Posición: "TOP",
        KDA: 3.8,
        Total: [
            {
                Asesinatos: 48
            },
            {
                Muertes: 68
            },
            {
                Asistencias: 179
            }],
        Campeones_destacados: ["Sion", "Gnar", "Renekton"],
        Equipo: "Cream Real Betis",
    },
    {
        _id: 29,
        NickName:"Nyx",
        Nombre: "Óscar",
        Apellido:"Ruiz",
        Edad: 21,
        País: "España",
        Posición: "JUNGLER",
        KDA: 3.3,
        Total: [
            {
                Asesinatos: 50
            },
            {
                Muertes: 46
            },
            {
                Asistencias: 100
            }],
        Campeones_destacados: ["Hecarim", "Graves", "Dr.Mundo"],
        Equipo: "eMonkeyz Club",
    },
    {
        _id: 30,
        NickName:"Oscure",
        Nombre: "Victor",
        Apellido:"Guzmán",
        Edad: 20,
        País: "España",
        Posición: "SUPPORT",
        KDA: 2.1,
        Total: [
            {
                Asesinatos: 12
            },
            {
                Muertes: 43
            },
            {
                Asistencias: 130
            }],
        Campeones_destacados: ["Alistar", "Rell", "Rakan"],
        Equipo: "Team Queso",
    },
    {
        _id: 31,
        NickName:"Plasma",
        Nombre: "Pedro",
        Apellido:"Ribeiro",
        Edad: 21,
        País: "Portugal",
        Posición: "SUPPORT",
        KDA: 3.6,
        Total: [
            {
                Asesinatos: 24
            },
            {
                Muertes: 83
            },
            {
                Asistencias: 247
            }],
        Campeones_destacados: ["Braum", "Rell", "Lulu"],
        Equipo: "UCAM Esports Club",
    },
    {
        _id: 32,
        NickName:"Namex",
        Nombre: "Mikael Axelsson",
        Apellido:"Guzmán",
        Edad: 22,
        País: "Suecia",
        Posición: "ADC",
        KDA: 3.5,
        Total: [
            {
                Asesinatos: 117
            },
            {
                Muertes: 77
            },
            {
                Asistencias: 133
            }],
        Campeones_destacados: ["Kai'sa", "Xayah", "Tristana"],
        Equipo: "Cream Real Betis",
    },
    {
        _id: 33,
        NickName:"Efias",
        Nombre: "Oleksandr",
        Apellido:"Yankovich",
        Edad: 22,
        País: "Ucrania",
        Posición: "SUPPORT",
        KDA: 2.1,
        Total: [
            {
                Asesinatos: 9
            },
            {
                Muertes: 58
            },
            {
                Asistencias: 168
            }],
        Campeones_destacados: ["Gragas", "Tahm Kench", "Thresh"],
        Equipo: "G2 Arctic",
    },
    {
        _id: 34,
        NickName:"Whiteinn",
        Nombre: "Alexznduu",
        Apellido:"Kolozsvari",
        Edad: 20,
        País: "Rumania",
        Posición: "SUPPORT",
        KDA: 3.2,
        Total: [
            {
                Asesinatos: 31
            },
            {
                Muertes: 84
            },
            {
                Asistencias: 230
            }],
        Campeones_destacados: ["Alistar", "Rell", "Nautilus"],
        Equipo: "Cream Real Betis",
    },
    {
        _id: 35,
        NickName:"Alexx",
        Nombre: "Alexander",
        Apellido:"Österlind",
        Edad: 22,
        País: "Suecia",
        Posición: "SUPPORT",
        KDA: 3.1,
        Total: [
            {
                Asesinatos: 52
            },
            {
                Muertes: 48
            },
            {
                Asistencias: 98
            }],
        Campeones_destacados: ["Udyr", "Nidalee", "Lillia"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 36,
        NickName:"Aesenar",
        Nombre: "Luis",
        Apellido:"Calderón",
        Edad: 24,
        País: "España",
        Posición: "SUPPORT",
        KDA: 3,
        Total: [
            {
                Asesinatos: 9
            },
            {
                Muertes: 42
            },
            {
                Asistencias: 116
            }],
        Campeones_destacados: ["Bardo", "Nautilus", "Rell"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 37,
        NickName:"Tonerre",
        Nombre: "Scott",
        Apellido:"Menard",
        Edad: 23,
        País: "Francia",
        Posición: "MID",
        KDA: 3,
        Total: [
            {
                Asesinatos: 53
            },
            {
                Muertes: 52
            },
            {
                Asistencias: 101
            }],
        Campeones_destacados: ["Viktor", "Ryze", "Azir"],
        Equipo: "BCN Squad",
    },
    {
        _id: 38,
        NickName:"Siler",
        Nombre: "Ernesto",
        Apellido:"Castañeda",
        Edad: 23,
        País: "España",
        Posición: "MID",
        KDA: 1.8,
        Total: [
            {
                Asesinatos: 73
            },
            {
                Muertes: 60
            },
            {
                Asistencias: 107
            }],
        Campeones_destacados: ["Qiyana", "Ryze", "Zoe"],
        Equipo: "Team Queso",
    },
    {
        _id: 39,
        NickName:"Robocop",
        Nombre: "Ondrej",
        Apellido:"Sklenicka",
        Edad: 20,
        País: "Republica Checa",
        Posición: "TOP",
        KDA: 2.9,
        Total: [
            {
                Asesinatos: 31
            },
            {
                Muertes: 43
            },
            {
                Asistencias: 93
            }],
        Campeones_destacados: ["Sett", "Gragas", "Malphite"],
        Equipo: "eMonkeyz Club",
    },
    {
        _id: 40,
        NickName:"Special",
        Nombre: "Joran",
        Apellido:"Scheffer",
        Edad: 23,
        País: "Paises Bajos",
        Posición: "MID",
        KDA: 2.8,
        Total: [
            {
                Asesinatos: 52
            },
            {
                Muertes: 50
            },
            {
                Asistencias: 87
            }],
        Campeones_destacados: ["Orianna", "Ryze", "Akali"],
        Equipo: "S2V Esports",
    },
    {
        _id: 41,
        NickName:"Th3Antonio",
        Nombre: "Antonio",
        Apellido:"Espinosa",
        Edad: 22,
        País: "España",
        Posición: "TOP",
        KDA: 2.8,
        Total: [
            {
                Asesinatos: 57
            },
            {
                Muertes: 68
            },
            {
                Asistencias: 134
            }],
        Campeones_destacados: ["Urgot", "Gangplank", "Ornn"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 42,
        NickName:"Kamilius",
        Nombre: "Kamil",
        Apellido:"Kosfal",
        Edad: 20,
        País: "Eslovaquia",
        Posición: "SUPPORT",
        KDA: 2.6,
        Total: [
            {
                Asesinatos: 5
            },
            {
                Muertes: 83
            },
            {
                Asistencias: 224
            }],
        Campeones_destacados: ["Alistar", "Tahm Kench", "Thresh"],
        Equipo: "Vodafone Giants",
    },
    {
        _id: 43,
        NickName:"Jervo",
        Nombre: "Javier",
        Apellido:"Ruiz",
        Edad: 21,
        País: "España",
        Posición: "TOP",
        KDA: 2.7,
        Total: [
            {
                Asesinatos: 10
            },
            {
                Muertes: 11
            },
            {
                Asistencias: 20
            }],
        Campeones_destacados: ["Gragas", "Sion"],
        Equipo: "S2V Esports",
    },
    {
        _id: 44,
        NickName:"Kasing",
        Nombre: "Raymond",
        Apellido:"Tsang",
        Edad: 27,
        País: "Reino Unido",
        Posición: "SUPPORT",
        KDA: 1.8,
        Total: [
            {
                Asesinatos: 14
            },
            {
                Muertes: 68
            },
            {
                Asistencias: 158
            }],
        Campeones_destacados: ["Nautilus", "Rakan", "Karma"],
        Equipo: "Movistar Riders",
    },
    {
        _id: 45,
        NickName:"Marky",
        Nombre: "Pedro",
        Apellido:"Serrano",
        Edad: 18,
        País: "España",
        Posición: "TOP",
        KDA: 2,
        Total: [
            {
                Asesinatos: 53
            },
            {
                Muertes: 64
            },
            {
                Asistencias: 110
            }],
        Campeones_destacados: ["Camille", "Sett", "Gnar"],
        Equipo: "Movistar Riders",
    },
    {
        _id: 46,
        NickName:"Oscarinin",
        Nombre: "Oscar",
        Apellido:"Muñoz",
        Edad: 17,
        País: "España",
        Posición: "TOP",
        KDA: 1.2,
        Total: [
            {
                Asesinatos: 49
            },
            {
                Muertes: 67
            },
            {
                Asistencias: 105
            }],
        Campeones_destacados: ["Ryze", "Gangplank", "Gnar"],
        Equipo: "G2 Arctic",
    },
    {
        _id: 47,
        NickName:"Sawyor",
        Nombre: "Jiri",
        Apellido:"Libansky",
        Edad: 21,
        País: "Republica Checa",
        Posición: "JUNGLER",
        KDA: 2.2,
        Total: [
            {
                Asesinatos: 7
            },
            {
                Muertes: 13
            },
            {
                Asistencias: 21
            }],
        Campeones_destacados: ["Hecarim", "Lillia"],
        Equipo: "S2V Esports",
    },
    {
        _id: 48,
        NickName:"Homi",
        Nombre: "Adrian",
        Apellido:"Moldes",
        Edad: 27,
        País: "España",
        Posición: "SUPPORT",
        KDA: 2.2,
        Total: [
            {
                Asesinatos: 13
            },
            {
                Muertes: 54
            },
            {
                Asistencias: 105
            }],
        Campeones_destacados: ["Rell", "Gragas", "Thresh"],
        Equipo: "S2V Esports",
    },
    {
        _id: 49,
        NickName:"Simpy",
        Nombre: "Sergi",
        Apellido:"Ruiz",
        Edad: 23,
        País: "España",
        Posición: "SUPPORT",
        KDA: 2.2,
        Total: [
            {
                Asesinatos: 8
            },
            {
                Muertes: 48
            },
            {
                Asistencias: 98
            }],
        Campeones_destacados: ["Galio", "Seraphine", "Lux"],
        Equipo: "BCN Squad",
    },
    {
        _id: 50,
        NickName:"Duall",
        Nombre: "Ángel",
        Apellido:"Fernandez",
        Edad: 23,
        País: "España",
        Posición: "SUPPORT",
        KDA: 2.2,
        Total: [
            {
                Asesinatos: 3
            },
            {
                Muertes: 17
            },
            {
                Asistencias: 35
            }],
        Campeones_destacados: ["Galio", "Alistar", "Rell"],
        Equipo: "MAD Lions Madrid",
    },
    {
        _id: 51,
        NickName:"Karakal Jr",
        Nombre: "Carlos",
        Apellido:"Lopez",
        Edad: 20,
        País: "España",
        Posición: "SUPPORT",
        KDA: 2.1,
        Total: [
            {
                Asesinatos: 6
            },
            {
                Muertes: 25
            },
            {
                Asistencias: 46
            }],
        Campeones_destacados: ["Rell", "Taric", "Alistar"],
        Equipo: "Team Queso",
    },
    {
        _id: 52,
        NickName:"Gavan",
        Nombre: "Robert",
        Apellido:"Scenavi",
        Edad: 19,
        País: "Suecia",
        Posición: "JUNGLER",
        KDA: 2.1,
        Total: [
            {
                Asesinatos: 32
            },
            {
                Muertes: 50
            },
            {
                Asistencias: 74
            }],
        Campeones_destacados: ["Dr.Mundo", "Pantheon", "Lillia"],
        Equipo: "S2V Esports",
    },
    {
        _id: 53,
        NickName:"Send0o",
        Nombre: "Rosendo",
        Apellido:"Fuentes",
        Edad: 25,
        País: "Alemania",
        Posición: "TOP",
        KDA: 1.5,
        Total: [
            {
                Asesinatos: 49
            },
            {
                Muertes: 78
            },
            {
                Asistencias: 110
            }],
        Campeones_destacados: ["Cho'gath", "Urgot", "Gnar"],
        Equipo: "Team Queso",
    },
    {
        _id: 54,
        NickName:"Jaeger",
        Nombre: "Lennart",
        Apellido:"Warkus",
        Edad: 24,
        País: "Alemania",
        Posición: "TOP",
        KDA: 1.9,
        Total: [
            {
                Asesinatos: 26
            },
            {
                Muertes: 72
            },
            {
                Asistencias: 109
            }],
        Campeones_destacados: ["Gnar", "Rell", "Volibear"],
        Equipo: "S2V Esports",
    },
    {
        _id: 55,
        NickName:"WidowMaker",
        Nombre: "Iyán",
        Apellido:"Fernandez",
        Edad: 21,
        País: "España",
        Posición: "JUNGLER",
        KDA: 1.8,
        Total: [
            {
                Asesinatos: 40
            },
            {
                Muertes: 85
            },
            {
                Asistencias: 116
            }],
        Campeones_destacados: ["Lillia", "Olaf", "Hecarim"],
        Equipo: "BCN Squad",
    },
    {
        _id: 56,
        NickName:"IceBreaker",
        Nombre: "Dimitris",
        Apellido:"Xatzitsompanis",
        Edad: 21,
        País: "Grecia",
        Posición: "TOP",
        KDA: 1.6,
        Total: [
            {
                Asesinatos: 34
            },
            {
                Muertes: 79
            },
            {
                Asistencias: 89
            }],
        Campeones_destacados: ["Sett", "Gragas", "Cho'gath"],
        Equipo: "BCN Squad",
    },
])*/ 
