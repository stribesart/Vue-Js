<template>
  <h1>About Page</h1>
  <hr>
  <!-- <h2>{{name}}</h2> -->
  <button @click="onChangeName">
    Cambiar Nombre
  </button>
</template>

<script>
export default {

  data(){
    return {
      name: 'Set'
    }
  },
  methods: {
    onChangeName(){
      console.log('Se cambiara el nombre a Melisa')
      this.name = 'Melisa'
    }
  },

  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('create')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdated')
  },
  updated(){
    console.log('updated')
  },
  activated(){
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  },
  errorCaptured(){
    console.log('errorCaptured')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  renderTriggered(){
    console.log('renderTrigered')
  }
}
</script>