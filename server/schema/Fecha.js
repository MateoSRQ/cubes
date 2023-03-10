cube(`Fecha`, {
  sql: `SELECT * FROM dbo.fecha`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    anyo: {
      sql: `anyo`,
      type: `string`
    },
    
    mes: {
      sql: `mes`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
