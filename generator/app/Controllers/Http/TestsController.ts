// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Data from 'App/Models/Datum'
import Database from '@ioc:Adonis/Lucid/Database'

const { connection } = Database.manager.get('primary')

const cp = [
  {
    name: "Personal Docente",
    children: [
      { name: "Docentes a tiempo completo - DTC" },
      { name: "Docentes a tiempo parcial - DTP" },
    ]
  },
  {
    name: "Personal No Docente",
    children: [
      { name: "Persional Operativo (Sede - Filial)" },
      { name: "Personal Administrativo Back Office (Sede - Filial)" },
      { name: "Personal Administrativo (Back Office) Oficina Central" },
      { name: "Personal de Ventas (Back Office) - Oficina Central" },
    ]
  },
  {
    name: "Alquileres",
    children: [
      { name: "Alquileres de local" },
      { name: "Alquiler otros" },
    ]
  },
  {
    name: "Seguridad y vigilancia",
    children: [
      { name: "Seguridad y vigilancia" },
      { name: "Seguridad informática" },
    ]
  },
  {
    name: "Mantenimiento y limpieza",
    children: [
      { name: "Limpieza" },
      { name: "Mantenimiento de infraestructura física" },
      { name: "Mantenimiento de infraestructura tecnológica" },
    ]
  },
  {
    name: "Gastos bancarios",
    children: [
      { name: "Gastos bancarios" },
      { name: "Comisiones por pago con tarjetas" }
    ]
  },
  {
    name: "Marketing y relaciones públicas",
    children: [
      { name: "Marketing" },
      { name: "Relaciones públicas" }
    ]
  },
  {
    name: "Servicios básicos",
    children: [
      { name: "Internet" },
      { name: "Telefonía" },
      { name: "Electricidad" },
      { name: "Agua" },
      { name: "Otros servicios básicos" }
    ]
  },
  {
    name: "Asesoría y consultoría",
    children: [
      { name: "Asesoría legal y tributaria" },
      { name: "Asesoría administrativa y financiera" },
      { name: "Asesoría académica" },
      { name: "Otras asesorías" }
    ]
  },
  {
    name: "Otros servicios de terceros",
    children: [
      { name: "Transporte de carga" },
      { name: "Transporte de pasajeros" },
      { name: "Movilidad local" },
      { name: "Courier" },
      { name: "Alojamiento" },
      { name: "Alimentación" },
      { name: "Producción encargada a terceros" },
      { name: "Otros servicios" }

    ]
  },
  {
    name: "Licencias de software y aplicaciones",
    children: [
      { name: "Licencias de software y aplicaciones (Académico)" },
      { name: "Licencias de software y aplicaciones (No Académico)" }
    ]
  },
  {
    name: "Seguros",
    children: [
      { name: "Seguros estudiantiles" },
      { name: "Seguros varios" }
    ]
  },
  {
    name: "Suscripciones",
    children: [
      { name: "Suscripciones a plataformas tecnológicas" },
      { name: "Suscripciones a libros y revistas" },
      { name: "Suscripciones diversas" }
    ]
  },
  {
    name: "Suministros",
    children: [
      { name: "Material educativo" },
      { name: "Material de laboratorio" },
      { name: "Materiales de escritorio" },
      { name: "Otros suministros" }
    ]
  },
  {
    name: "Otros gastos de gestión",
    children: [
      { name: "Otros gastos de gestión" }
    ]
  },
  {
    name: "Tributos",
    children: [
      { name: "Impuesto predial" },
      { name: "Arbitrios municipales" },
      { name: "Otros tributos" }
    ]
  },
  {
    name: "Gastos financieros",
    children: [
      { name: "Gastos financieros" }
    ]
  },
  {
    name: "Depreciación y amortización",
    children: [
      { name: "Depreciación de propiedad, planta y equipo" },
      { name: "Amortización de intangibles" }
    ]
  },
  {
    name: "Propiedades, planta y equipo",
    children: [
      { name: "Terrenos" },
      { name: "Edificaciones" },
      { name: "Unidades de transporte" },
      { name: "Máquinas y equipos diversos" },
      { name: "Muebles y enseres" },
      { name: "Libros académicos" }
    ]
  },
  {
    name: "Intangibles",
    children: [
      { name: "Patentes y propiedad intelectual" },
      { name: "Desarrollo de software y aplicaciones" },
      { name: "Otros intangibles" }
    ]
  },
]
const cc = [
  {
    name: "Administración y Negocios Internacionales",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Arquitectura",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Ciencias Contables y Financieras",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Derecho y Ciencias Políticas",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Enfermería",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Estomatología",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Ingeniería Ambiental",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Ingeniería Civil",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Ingeniería de Sistemas e Informática",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Ingeniería Industrial",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Psicología Humana",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "Tecnología Médica en Terapia Física y Rehabilitación",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  },
  {
    name: "General",
    children: [
      { name: "Arequipa" },
      { name: "Chiclayo" },
      { name: "Lima - Jesús María" },
      { name: "Lima - Pueblo Libre" },
      { name: "Lima - La Victoria" },
      { name: "Piura" },
      { name: "Coronel Portillo" },
      { name: "General" },
    ]
  }
]

export default class TestsController {

  public async test() {
    console.log('xxx')
    let d = await Data.all();
    for (let i =0; i<d.length; i++) {
      console.log(d[i].actividadNivel3)
    }

  }

  public async etl() {
    for (let i = 1; i <= cp.length; i++) {
      for (let j = 1; j <= cp[i-1].children.length; j++) {
        for (let k = 1; k <= cc.length; k++) {
          for (let l = 1; l <= cc[k-1].children.length; l += Math.floor(Math.random()*2+1)) {
            for (let m = 1; m <= 8; m += Math.floor(Math.random()*2+1)) {
              for (let n = 1; n <= 6; n += Math.floor(Math.random()*2+1)) {
                for (let o = 1; o <= 5; o += Math.floor(Math.random()*2+1)) {
                  for (let p = 1; p <= 5; p += Math.floor(Math.random()*2+1)) {
                    for (let q = 1; q <= 5; q += Math.floor(Math.random()*2+1)) {
                      for (let r = 1; r <= 5; r += Math.floor(Math.random()*2+1)) {
                        for (let s = 1; s <= 5; s += Math.floor(Math.random()*2+1)) {
                          for (let t = 2023; t <= 2024; t++) {
                            for (let u = Math.floor(Math.random()*12+1); u <= 12; u += Math.floor(Math.random()*2+1)) {
                              if (Math.random() >= .9995) {

                                const data = new Data()
                                await data.fill({
                                  "categoriaNivel1": i.toString().padStart(2, '0') + ". " + cp[i - 1].name,
                                  "categoriaNivel2": i.toString().padStart(2, '0') + "." + j.toString().padStart(2, '0') + ". " + cp[i - 1].children[j - 1].name,
                                  "centroNivel1": k.toString().padStart(2, '0') + ". " + cc[k - 1].name,
                                  "centroNivel2": k.toString().padStart(2, '0') + "." + l.toString().padStart(2, '0') + ". " + cc[k - 1].children[l - 1].name,
                                  "actividadNivel1": "OBIP " + m.toString().padStart(2, '0'),
                                  "actividadNivel2": "Objetivo General " + m.toString().padStart(2, '0') + "."
                                                                         + n.toString().padStart(2, '0'),
                                  "actividadNivel3": "Objetivo Específico " + m.toString().padStart(2, '0') + "."
                                                                            + n.toString().padStart(2, '0') + "."
                                                                            + o.toString().padStart(2, '0'),
                                  "actividadNivel4": "Actividad " + m.toString().padStart(2, '0') + "."
                                                                  + n.toString().padStart(2, '0') + "."
                                                                  + o.toString().padStart(2, '0') + "."
                                                                  + p.toString().padStart(2, '0'),
                                  "actividadNivel5": "Sub-Actividad " + m.toString().padStart(2, '0') + "."
                                                                      + n.toString().padStart(2, '0') + "."
                                                                      + o.toString().padStart(2, '0') + "."
                                                                      + p.toString().padStart(2, '0') + "."
                                                                      + q.toString().padStart(2, '0'),
                                  "actividadNivel6": "Tarea " + m.toString().padStart(2, '0') + "."
                                                              + n.toString().padStart(2, '0') + "."
                                                              + o.toString().padStart(2, '0') + "."
                                                              + p.toString().padStart(2, '0') + "."
                                                              + q.toString().padStart(2, '0') + "."
                                                              + r.toString().padStart(2, '0'),
                                  "actividadNivel7": "Sub-Tarea " + m.toString().padStart(2, '0') + "."
                                                                  + n.toString().padStart(2, '0') + "."
                                                                  + o.toString().padStart(2, '0') + "."
                                                                  + p.toString().padStart(2, '0') + "."
                                                                  + q.toString().padStart(2, '0') + "."
                                                                  + r.toString().padStart(2, '0') + "."
                                                                  + s.toString().padStart(2, '0'),
                                  "date": new Date(t.toString() + "-" + u.toString() + "-01"),
                                  "monto": (Math.random() * 10000 + 1000).toFixed(2)
                                }).save()
                                /*
                                console.log({
                                  "categoriaNivel1": i.toString().padStart(2, '0') + ". " + cp[i - 1].name,
                                  "categoriaNivel2": i.toString().padStart(2, '0') + "." + j.toString().padStart(2, '0') + ". " + cp[i - 1].children[j - 1].name,
                                  "centroNivel1": k.toString().padStart(2, '0') + ". " + cc[k - 1].name,
                                  "centroNivel2": k.toString().padStart(2, '0') + "." + l.toString().padStart(2, '0') + ". " + cc[k - 1].children[l - 1].name,
                                  "actividadNivel1": "OBIP " + m.toString().padStart(2, '0'),
                                  "actividadNivel2": "Objetivo General " + m.toString().padStart(2, '0') + "."
                                                                         + n.toString().padStart(2, '0'),
                                  "actividadNivel3": "Objetivo Específico " + m.toString().padStart(2, '0') + "."
                                                                            + n.toString().padStart(2, '0') + "."
                                                                            + o.toString().padStart(2, '0'),
                                  "actividadNivel4": "Actividad " + m.toString().padStart(2, '0') + "."
                                                                  + n.toString().padStart(2, '0') + "."
                                                                  + o.toString().padStart(2, '0') + "."
                                                                  + p.toString().padStart(2, '0'),
                                  "actividadNivel5": "Sub-Actividad " + m.toString().padStart(2, '0') + "."
                                                                      + n.toString().padStart(2, '0') + "."
                                                                      + o.toString().padStart(2, '0') + "."
                                                                      + p.toString().padStart(2, '0') + "."
                                                                      + q.toString().padStart(2, '0'),
                                  "actividadNivel6": "Tarea " + m.toString().padStart(2, '0') + "."
                                                              + n.toString().padStart(2, '0') + "."
                                                              + o.toString().padStart(2, '0') + "."
                                                              + p.toString().padStart(2, '0') + "."
                                                              + q.toString().padStart(2, '0') + "."
                                                              + r.toString().padStart(2, '0'),
                                  "actividadNivel7": "Sub-Tarea " + m.toString().padStart(2, '0') + "."
                                                                  + n.toString().padStart(2, '0') + "."
                                                                  + o.toString().padStart(2, '0') + "."
                                                                  + p.toString().padStart(2, '0') + "."
                                                                  + q.toString().padStart(2, '0') + "."
                                                                  + r.toString().padStart(2, '0') + "."
                                                                  + s.toString().padStart(2, '0'),
                                  "date": new Date(t.toString() + "-" + u.toString() + "-01"),
                                  "monto": (Math.random() * 10000 + 1000).toFixed(2)
                                })

                                 */
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  public async actividades() {
    const data = await Database
      .query()  // 👈 gives an instance of select query builder
      .from('data')
      .select('id', 'actividad_nivel_7')
      .distinct('actividad_nivel_7')
  }
}
