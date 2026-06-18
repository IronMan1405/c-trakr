import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1a1d27",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#1a1d27",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(150, 150, 150, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.6,
    useShadowColorFromDataset: false,
    propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "#4ade80"
    },
    propsForBackgroundLines: {
        stroke: "#2a2d36",
        strokeWidth: 0.5,
    }
};

const BarGraph = (data) => {
    return (
        <BarChart
            style={{ marginVertical: 10, borderRadius: 12 }}
            data={data}
            width={screenWidth - 48}
            height={200}
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
            width={screenWidth - 48}
            height={200}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            yAxisSuffix="L"
            bezier
            style={{ borderRadius: 12 }}
        />
    );
};

export { BarGraph, LineGraph };