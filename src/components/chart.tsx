import { HighchartsReact } from "highcharts-react-official";
import React from "react";
import { generateBarChartOptions } from "../helpers/chartHelpers";
import Highcharts from 'highcharts';
import { IChartProps } from "./chart.types";

const Chart: React.FC<IChartProps> = (props) => {
    const options = generateBarChartOptions(props.title);

    return (
        <div><HighchartsReact highcharts={Highcharts} options={options} /></div>
    );
}

export default Chart;