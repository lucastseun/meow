<template>
    <div class="btn-wrap" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        type: {
            type: String,
            default: () => 'primary',
            validator: (value) => ['primary', 'danger'].includes(value)
        }
    })

    const color = ref(props.type === 'primary' ? '#1890ff' : '#ff4d4f')
    
    const emit = defineEmits([
        'click'
    ])

    const handleClick = (e) => {
        emit('click', e)
    }
</script>

<style scoped>
.btn-wrap{
    background: v-bind(color);
    border-radius: 5px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    user-select: none
}
</style>