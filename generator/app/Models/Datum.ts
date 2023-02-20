import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Datum extends BaseModel {
  public static table = 'data'

  @column({ isPrimary: true })
  public id: number

  @column({columnName: "categoria_nivel_1"})
  public categoriaNivel1: string

  @column({columnName: "categoria_nivel_2"})
  public categoriaNivel2: string

  @column({columnName: "centro_nivel_1"})
  public centroNivel1: string

  @column({columnName: "centro_nivel_2"})
  public centroNivel2: string

  @column({columnName: "actividad_nivel_1"})
  public actividadNivel1: string

  @column({columnName: "actividad_nivel_2"})
  public actividadNivel2: string

  @column({columnName: "actividad_nivel_3"})
  public actividadNivel3: string

  @column({columnName: "actividad_nivel_4"})
  public actividadNivel4: string

  @column({columnName: "actividad_nivel_5"})
  public actividadNivel5: string

  @column({columnName: "actividad_nivel_6"})
  public actividadNivel6: string

  @column({columnName: "actividad_nivel_7"})
  public actividadNivel7: string

  @column({columnName: "date"})
  public date: Date

  @column({columnName: "monto"})
  public monto: number


}
