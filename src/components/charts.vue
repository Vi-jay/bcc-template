<template>
        <div ref="main" class="charts-main"></div>
</template>

<script>
    import echarts from "echarts";
    import {extend} from "UTILS/utils";
    export default {
        props: {
            //如果父级元素传递的是option则会整体刷新表图
            option: Object,
            //如果是个回调函数则会使用默认的表图
            callback: Function
        },
        data () {
            return {
                chartInstance: {},
                defaultOption: {
                    pie: {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                        },
                        series: [
                            {
                                name:'访问来源',
                                type:'pie',
                                selectedMode: 'single',
                                radius: [0, '30%'],

                                label: {
                                    normal: {
                                        position: 'inner'
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data:[
                                    {value:335, name:'直达', selected:true},
                                    {value:679, name:'营销广告'},
                                    {value:1548, name:'搜索引擎'}
                                ]
                            },
                            {
                                name:'访问来源',
                                type:'pie',
                                radius: ['40%', '55%'],

                                data:[
                                    {value:335, name:'直达'},
                                    {value:310, name:'邮件营销'},
                                    {value:234, name:'联盟广告'},
                                    {value:135, name:'视频广告'},
                                    {value:1048, name:'百度'},
                                    {value:251, name:'谷歌'},
                                    {value:147, name:'必应'},
                                    {value:102, name:'其他'}
                                ]
                            }
                        ]
                    },
                    line:{
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        legend: {
                            data: ['销量']
                        },
                        xAxis: {
                            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
                    }
                }
            }
        },
        methods: {
            async initChart(callback){
                this.chartInstance = echarts.init(this.$refs.main);
                let param = await callback(),
                    chartType = param.chartType,
                    option = this.defaultOption[chartType];
                extend(true, param, option);
                this.chartInstance.setOption(param);
            }
        },
        created(){
            this.$nextTick(() => {
                this.initChart(this.callback);
            })
        },
        watch: {
            option(newOption, oldOption) {
                this.chartInstance.setOption(newOption);
            }
        },
        computed: {}
    }
</script>

<style lang="less" scoped>
    body {
        font-size: 0.16rem;
        .charts-main {
            width: 600px;
            height: 300px;
        }
    }
</style>
