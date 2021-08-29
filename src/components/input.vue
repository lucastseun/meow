<template >
    <div class="input-wrap">
        <input 
            :type="type"
            :placeholder="placeholder"
            @input="handleInput"
        >
    </div>
</template>

<script setup>
    defineProps({
        type: {
            type: String,
            default: () => 'text',
            validator: (value) => ['text', 'password', 'tel', 'number'].includes(value)
        },
        placeholder: {
            type: String
        },
        modelValue: String
    })

    const emit = defineEmits([
        'update:modelValue'
    ])

    const handleInput = ($event) => {
        emit('update:modelValue',  $event.target.value)
    }
</script>

<style>
.input-wrap{
    background: #fff;
    border-radius: 5px;
    border: 1px solid #dddfe2;
}
.input-wrap input{
    width: 330px;
    height: 22px;
    color: #1d2129;
    font-size: 18px;
    padding: 14px 16px;
}
</style>