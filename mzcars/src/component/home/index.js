import React,{Component} from 'react'
import {Card} from  'antd'
import ReactEcharts from 'echarts-for-react';
 
// render echarts option.

class Home extends Component{

  componentWillUpdate(){
    console.log('页面将要更新')
  }
  componentDidUpdate(){
    console.log('页面已经更新')
  }
  render(){
    return(
      <Card className='home-box'>
        <Card>
          <ReactEcharts option={{
            title : {
                text: '客户趋势',
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['首次客流','非首次客流']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ["2019-09-21","2019-09-28","2019-10-03","2019-10-10","2019-10-24"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'首次客流',
                    type:'bar',
                    data:["30","20","90","40","60"],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'非首次客流',
                    type:'bar',
                    data:["10","30","40","20","50"],
                    markPoint : {
                        data : [
                            {name : '最高'},
                            {name : '最低'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
          }} />
        </Card>
      </Card>

    )
  }
}
export default Home