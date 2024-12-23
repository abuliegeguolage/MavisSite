<script setup lang="ts">
import { defineProps } from 'vue';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs';

const props = defineProps<{
    data: {
        img: string,
        name: string,
        desc: string,
        siteLink?: string,
        githubLink?: string,
        raderValue: number[]
    }
}>();

const hasSiteLink = Boolean(props.data?.siteLink);
const hasGithubLink = Boolean(props.data?.githubLink);

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const raderData = {
    labels: [
        '創意',
        '挑戰性',
        '耗時',
        '內容豐富',
        'UI'
    ],
    datasets: [
        {
            label: '數值',
            backgroundColor: 'rgba(75, 100, 100, .1)',
            borderColor: 'rgb(75, 100, 100)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: 'rgb(75, 100, 100)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 100, 100)',
            data: props.data.raderValue
        }
    ]
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            pointLabels: {
                font: {
                    size: 12
                }
            }
        }
    }
}

</script>

<template>
    <div class="wrapper">
        <h4>{{ props.data.name }}</h4>
        <div class="graph-box">
            <div class="frame" :style="{ backgroundImage: `url(${props.data.img})` }"></div>
            <div class="rader-box">
                <Radar :data="raderData" :options="options"></Radar>
            </div>
        </div>

        <div class="introduction">
            <section class="text">
                <p>{{ props.data.desc }}</p>
                <div v-if="hasSiteLink || hasGithubLink" class="link-box">
                    <a v-if="hasSiteLink" :href="props.data?.siteLink" class="link">→ 網站連結</a>
                    <a v-if="hasGithubLink" :href="props.data?.githubLink" class="link">→ github 連結</a>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {

    h4 {
        padding: 20px 0;
        font-size: x-large;
        color: var(--primary-color);
    }

    .graph-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
        width: 100%;

        @media screen and (max-width: 767px) {
            flex-direction: column;
        }

        .frame {
            width: 400px;
            max-width: 100%;
            height: 250px;
            background-size: 100%;
            background-position: center;
            border: 5px solid white;
            border-radius: 6px;
            box-shadow: 2px 2px 10px var(--primary-color);
            transition: .3s;

            &:hover {
                background-size: 120%;
            }

            @media screen and (max-width: 767px) {
                margin-bottom: 20px;
            }
        }

        .rader-box {
            max-height: 200px;
        }
    }

    .introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto 20px;

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 20px 0;
            min-height: 200px;
            color: var(--primary-color);

            .link-box {
                display: flex;
                flex-direction: column;
                padding: 5px;
                text-align: center;

                .link {
                    display: block;
                    margin: 5px;
                    color: var(--deeper-primary);
                    text-decoration: underline;
                    transition: .3s;

                    &:hover {
                        text-shadow: 0 0 6px var(--primary-color);
                    }
                }
            }
        }
    }
}
</style>