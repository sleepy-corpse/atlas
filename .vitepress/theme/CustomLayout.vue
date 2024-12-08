<!-- .vitepress/theme/CustomLayout.vue -->

<script setup lang="ts">
import { defineProps } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';

const { frontmatter } = useData()

console.log(frontmatter.value.layout)
</script>

<template>
    <DefaultTheme.Layout v-if="frontmatter.layout === 'doc'"  :layout="frontmatter.layout">
        <template #aside-outline-after>
            <div class="legend">
                <h4 class="legend__header">Легенда</h4>
                <div class="legend__block">
                    <h5 class="legend__block__header">Частота возникновения детальной причины от 1 до 5(1 - наиболее частая, 5 - редкая)</h5>
                    <div class="legend__block__content">
                        <div class="legend__block__content__item">
                            <img src="/assets/freq_1.svg" alt="1" /> - 1
                        </div>
                        <div class="legend__block__content__item">
                            <img src="/assets/freq_2.svg" alt="2" /> - 2
                        </div>
                        <div class="legend__block__content__item">
                            <img src="/assets/freq_3.svg" alt="3" /> - 3
                        </div>
                        <div class="legend__block__content__item">
                            <img src="/assets/freq_4.svg" alt="4" /> - 4
                        </div>
                        <div class="legend__block__content__item">
                            <img src="/assets/freq_5.svg" alt="5" /> - 5
                        </div>
                    </div>
                </div>

                <div class="legend__block">
                    <h5 class="legend__block__header">Категория корневой причины по способу возникновения</h5>
                    <div class="legend__block__content">
                        <div class="legend__block__content__item legend__block__content__item_category">
                            <img src="/assets/category_1.svg" alt="1" /><span>- технология</span>
                        </div>
                        <div class="legend__block__content__item legend__block__content__item_category">
                            <img src="/assets/category_2.svg" alt="2" /><span> - сырье</span>
                        </div>
                        <div class="legend__block__content__item legend__block__content__item_category">
                            <img src="/assets/category_3.svg" alt="3" /><span> - оборудование</span>
                        </div>
                        <div class="legend__block__content__item legend__block__content__item_category">
                            <img src="/assets/category_4.svg" alt="4" /><span> - организация</span>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </DefaultTheme.Layout>
    <DefaultTheme.Layout v-else :layout="frontmatter.layout" />
</template>

<style lang="scss">
.legend {
    margin-top: 50px;
    &__header {
        color: #3c3c43;
        font-weight: 600;
        font-size: 1rem;
    }
    &__block {
        margin-top: 10px;
        &__header {
            color: #3c3c43;
            font-weight: 600;
            font-size: 14px;
        }
        &__content {
            &__item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 3.5rem;
                color: #3c3c43;
                font-weight: 600;
                font-size: 14px;
                margin-top: 5px;
                &_category {
                    width: 10rem;
                    justify-content: start;
                    gap: 5px;
                }
                img {
                    display: inline-block;
                    height: 2rem;
                }
            }
        }
    }
}
</style>
