<template>
<div class="v-select">
<select key="selectedId" class="select" @change="onChange($event)">
<option class="options" v-for="option in options" :key="option.value"> {{ option.name }}</option>
</select>
</div>
</template>
<script>
export default {
  name: 'TodoSelect',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onChange (event) {
      this.$emit('select', event.target.value)
    }
  }
}
</script>
<style scoped>
.select {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.v-select {
  position: relative;
  width: 360px;
}
.options {
  position: absolute;
  top: 20px;
  right: 0;
  width: 100%;
  border: 1px solid gray;
}
.all {
  margin-right: 10px;
}
</style>
