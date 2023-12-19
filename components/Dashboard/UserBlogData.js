import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserBlogData = () => {
    const options = {
        title:{
            text: "Users"
        },
        axisY :{
            includeZero: false,
            suffix: "K"
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 13
        },
        data: [
          {
              type: "splineArea",
              name: "CurrentMonth",
              showInLegend: true,
              markerSize: 0,
              dataPoints: [
                  {x:0, y:5},
                  {x: 5, y: 9 },
                  {x: 6, y: 9 },
                  {x: 7, y: 11 },
                  {x: 10, y: 10 },
                  {x: 12, y: 13 },
                  {x: 15, y: 15 },
                  {x: 17, y: 11 },
              ]
          },
          {
            type: "splineArea",
            name: "PastMonth",
            markerSize: 0,
            showInLegend: true,
            dataPoints: [
                {x:0, y:2},
                {x: 4, y: 3 },
                {x: 5, y: 4 },
                {x: 6, y: 3 },
                {x: 11, y: 4 },
                {x: 13, y: 5 },
                {x: 15, y: 2 },
                {x: 17, y: 1 },
            ]
        }
      ]
  }

  const pieChartOptions = {
    animationEnabled: true,
	title: {
		text: "Users by Device"
	},
	data: [{
		type: "pie",
		startAngle: 240,
        showInLegend: true,
		dataPoints: [
			{y: 69, label: "Desktop"},
			{y: 23, label: "Tablet"},
			{y: 8, label: "Mobile"}
		]
	}]
  }

    return (
        <div className='user-blog-chart display-flex'>
            <div className="user-report">
                <CanvasJSChart options = {options}/>
            </div>
            <div className='user-device'>
                <CanvasJSChart options = {pieChartOptions}/>
            </div>
        </div>
    )
}

export default UserBlogData;