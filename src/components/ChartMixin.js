
function hastaLimite(arr, limit) {
  let totalFiltered = [];
  arr.forEach(dict => {
    let filtered = {
      "name": dict.name,
      "type": dict.type,
      "data": []
    };
    for (let i = 0; i < dict.data.length; i++) {
      if (dict.data[i].date !== undefined) {
        if (dict.data[i].date > limit) {
            break
        }
        filtered.data.push(dict.data[i])
      }
    }
    totalFiltered.push(filtered)  
    });
  return totalFiltered
}
function ultimasSemanas(arr, numWeeks, limit) {
  arr = hastaLimite(arr, limit)
  let totalFiltered = []
  arr.forEach(dict => {
    let filtered = [];
    let found = new Set()
    for (let i = dict.data.length - 1; i>=0; i--) {
        found.add(dict.data[i].date)
        if (found.size > numWeeks) {
            break
        }
        filtered.push(dict.data[i])
    }
    filtered.reverse()
    totalFiltered.push(
      {
        "name": dict.name,
        "type": dict.type,
        "data": filtered,
      }
    )
  })
  return totalFiltered
}

export default {
  computed: {
    chartMeta: function() {
      return this.$store.getters.conseguirMeta(this.id)
    },
    fechaActual: function() {
        return this.$store.state.fechaActual
    },
    ultimasOchoSemanas: function() {
        return ultimasSemanas(this.chartData, 8, this.fechaActual)
    },
    ultimoAnio: function() {
        return ultimasSemanas(this.chartData, 52, this.fechaActual)
    }, 
    hastaLimite: function() {
        return hastaLimite(this.chartData, this.fechaActual)
    },
    fechaExacta: function() {
      return ultimasSemanas(this.chartData, 1, this.fechaActual)
    },
    columnas: function() {
      const meta = this.$store.getters.conseguirMeta(this.id)
      let cols = []
      for (var k in meta.columnas) {
        cols.push({
          "value": k,
          "text": meta.columnas[k],
        })
      }
      return cols
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
      this.$store.dispatch('updateData', this.id)
      }
    },
    mapFunction(x) {
        return x            
    }
  }
}