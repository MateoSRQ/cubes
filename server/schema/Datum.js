cube(`Datum`, {
  sql: `SELECT * FROM dbo.datum`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    Actividad: {
      sql: `${CUBE}.actividad_id = ${Actividad}.id`,
      relationship: `belongsTo`
    },
    
    Categoria: {
      sql: `${CUBE}.categoria_id = ${Categoria}.id`,
      relationship: `belongsTo`
    },
    
    Centro: {
      sql: `${CUBE}.centro_id = ${Centro}.id`,
      relationship: `belongsTo`
    },
    
    Fecha: {
      sql: `${CUBE}.fecha_id = ${Fecha}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, monto]
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
    
    monto: {
      sql: `monto`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
