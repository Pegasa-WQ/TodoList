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
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
  color: #fff;
  background-color: rgba(103, 135, 183, 0.7);
  cursor: pointer;
  transition: all 0.3s ease 0s;
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
  border: none;
  cursor: pointer;
}
.select:focus-visible{
  outline: 1px solid rgb(0, 94, 184);
}
.select:hover {
  background-color: rgba(103, 135, 183, 0.5);
}
.select:active {
  outline: 1px solid rgb(0, 94, 184);
}
.all {
  margin-right: 10px;
}
</style>
