import { LineChart, BarChart } from "react-native-chart-kit";

const chartConfig =  {
    backgroundGradientFrom: "#9C2D91",
    // backgroundGradientFromOpacity: 0.25,
    backgroundGradientTo: "#2A018C",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
};


const BarGraph = (data) => {
    return (
        <BarChart
            style={{marginVertical: 15}}
            data={data}
            width={380}
            height={220}
            yAxisSuffix="km"
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero
        />
    );
};

const LineGraph = (data) => {
    return (
        <LineChart
            data={data}
            width={380}
            height={256}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            yAxisSuffix="L"
            bezier
        />
    )
}

export {BarGraph, LineGraph};