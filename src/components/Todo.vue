<template>
<ul>
<li>
Привет!
</li>
</ul>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          todos: [
            {
              id: 0,
              title: 'Finish Vue',
              completed: false
            },
            {
              id: 1,
              title: 'Take',
              completed: false
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
