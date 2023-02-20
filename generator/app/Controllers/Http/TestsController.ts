// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Data from 'App/Models/Datum'


export default class TestsController {

  public async index() {
    for (let i = 1; i <= 5; i += Math.floor(Math.random()*3+1)) {
      for (let j = 1; j <= 5; j += Math.floor(Math.random()*3+1)) {
        for (let k = 1; k <= 5; k += Math.floor(Math.random()*3+1)) {
          for (let l = 1; l <= 5; l += Math.floor(Math.random()*3+1)) {
            for (let m = 1; m <= 5; m += Math.floor(Math.random()*3+1)) {
              for (let n = 1; n <= 5; n += Math.floor(Math.random()*3+1)) {
                for (let o = 1; o <= 5; o += Math.floor(Math.random()*3+1)) {
                  for (let p = 1; p <= 5; p += Math.floor(Math.random()*3+1)) {
                    for (let q = 1; q <= 5; q += Math.floor(Math.random()*3+1)) {
                      for (let r = 1; r <= 5; r += Math.floor(Math.random()*3+1)) {
                        for (let s = 1; s <= 5; s += Math.floor(Math.random()*3+1)) {
                          for (let t = 2023; t <= 2024; t++) {
                            for (let u = Math.floor(Math.random()*12+1); u <= 12; u += Math.floor(Math.random()*2+1)) {
                              const data = new Data()
                              await data.fill({
                                "categoriaNivel1": "Categoria " + i,
                                "categoriaNivel2": "Categoria " + i + "." + j,
                                "centroNivel1": "Centro " + k,
                                "centroNivel2": "Centro " + k + "." + l,
                                "actividadNivel1": "Actividad " + m,
                                "actividadNivel2": "Actividad " + m + "." + n,
                                "actividadNivel3": "Actividad " + m + "." + n + "." + o,
                                "actividadNivel4": "Actividad " + m + "." + n + "." + o + "." + p,
                                "actividadNivel5": "Actividad " + m + "." + n + "." + o + "." + p + "." + q,
                                "actividadNivel6": "Actividad " + m + "." + n + "." + o + "." + p + "." + q + "." + r,
                                "actividadNivel7": "Actividad " + m + "." + n + "." + o + "." + p + "." + q + "." + r + "." +s,
                                "date": new Date(t.toString() + "-" + u.toString() + "-01") ,
                                "monto": (Math.random()*10000 + 1000).toFixed(2)
                              }).save()
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
