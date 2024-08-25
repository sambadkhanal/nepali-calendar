<template lang="">
  <div
    class="absolute w-80 h-auto min-h-40 shadow-lg p-4 bg-blue-50 z-10 bottom-full rounded-md text-gray-700 space-y-4"
  >
    <div space-y-1>
      <div class="flex justify-between">
        <h3 class="text-base">{{ nepaliDate }}</h3>
        <X @click.stop="onClose" />
      </div>
      <h3 class="text-xs">{{ engDate }}</h3>
    </div>
    <div class="text-sm">{{ item.tithi }}</div>
    <div class="rounded-md p-2 bg-blue-200" v-if="item.event != '--'">
      {{ item.event }}
    </div>
  </div>
</template>
<script setup>
import { X } from 'lucide-vue-next'
const props = defineProps({
  nepaliDate: String,
  engDate: String,
  item: Object
})

const emit = defineEmits(['close'])

const onClose = () => {
  console.log('close')
  emit('close')
}
</script>
<style lang=""></style>
