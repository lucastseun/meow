<template>
    <button 
        type="button" 
        class="switch"
        :class="checkedCls"
        @click="handleChange"
    >
        <span class="switch-inner">{{checked ? checkedText : unCheckedText }}</span>
    </button>
</template>

<script setup>
    import { ref, computed } from 'vue'
    const props = defineProps({
        checked: {
            type: Boolean,
            default: true
        },
        checkedText: String,
        unCheckedText: String
    });

    const checked = ref(props.checked);

    const checkedCls = computed(() => checked.value ? 'switch-checked' : '');

    const bgColor = computed(() => checked.value ? '#1890ff' : 'rgba(0,0,0,.25)');

    const marginLeft = computed(() => checked.value ? '6px' : '24px');

    const marginRight = computed(() => checked.value ? '24px' : '6px');

    const emit = defineEmits(['change']);

    const handleChange = () => {
        checked.value = !checked.value;
        emit('change', checked.value);
    }
</script>

<style scoped>
.switch{
    margin: 0;
    padding: 0;
    background-color: v-bind(bgColor);
    font-size: 14px;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 20px;
    border: 1px solid transparent;
    border-radius: 100px;
    transition: all .36s;
    user-select: none;
    cursor: pointer;
    position: relative;
}
.switch:after{
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    transition: all .36s cubic-bezier(.78,.14,.15,.86);
    content: " ";
}
.switch-checked:after {
    left: 100%;
    margin-left: -1px;
    transform: translateX(-100%);
}
.switch-inner{
    color: #fff;
    font-size: 12px;
    display: block;
    margin-right: v-bind(marginRight);
    margin-left: v-bind(marginLeft);
}
</style>