<template lang="">
  <select
    :id="id"
    :value="modelValue"
    @input="updateValue"
    class="block w-28 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  >
    <option v-for="item in items" :key="item.key" :value="item.key">
      {{ item.name }}
    </option>
  </select>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  items: {
    type: [String, Number, Object],
    default: []
  },
  id: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
<style lang=""></style>
