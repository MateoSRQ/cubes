cube(`Data`, {
  sql: `SELECT * FROM dbo.data`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, actividadNivel1, actividadNivel2, actividadNivel3, actividadNivel4, actividadNivel5, actividadNivel6, actividadNivel7, date]
    },
    totalAmount: {
      sql: `monto`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    categoriaNivel1: {
      sql: `categoria_nivel_1`,
      type: `string`,
      title: `Categoria Nivel 1`
    },
    
    categoriaNivel2: {
      sql: `categoria_nivel_2`,
      type: `string`,
      title: `Categoria Nivel 2`
    },
    
    centroNivel1: {
      sql: `centro_nivel_1`,
      type: `string`,
      title: `Centro Nivel 1`
    },
    
    centroNivel2: {
      sql: `centro_nivel_2`,
      type: `string`,
      title: `Centro Nivel 2`
    },
    
    actividadNivel1: {
      sql: `actividad_nivel_1`,
      type: `string`,
      title: `Actividad Nivel 1`
    },
    
    actividadNivel2: {
      sql: `actividad_nivel_2`,
      type: `string`,
      title: `Actividad Nivel 2`
    },
    
    actividadNivel3: {
      sql: `actividad_nivel_3`,
      type: `string`,
      title: `Actividad Nivel 3`
    },
    
    actividadNivel4: {
      sql: `actividad_nivel_4`,
      type: `string`,
      title: `Actividad Nivel 4`
    },
    
    actividadNivel5: {
      sql: `actividad_nivel_5`,
      type: `string`,
      title: `Actividad Nivel 5`
    },
    
    actividadNivel6: {
      sql: `actividad_nivel_6`,
      type: `string`,
      title: `Actividad Nivel 6`
    },
    
    actividadNivel7: {
      sql: `actividad_nivel_7`,
      type: `string`,
      title: `Actividad Nivel 7`
    },
    
    monto: {
      sql: `monto`,
      type: `string`
    },
    
    date: {
      sql: `date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
