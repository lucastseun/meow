<template >
    <div class="input-wrap">
        <input 
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength"
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
        maxlength: {
            type: [String, Number]
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

<style scoped>
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