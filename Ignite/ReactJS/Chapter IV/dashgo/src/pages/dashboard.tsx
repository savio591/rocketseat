import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T05:30:00.000Z",
      "2021-03-19T05:30:00.000Z",
      "2021-03-20T05:30:00.000Z",
      "2021-03-21T05:30:00.000Z",
      "2021-03-22T05:30:00.000Z",
      "2021-03-23T05:30:00.000Z",
      "2021-03-24T05:30:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 20, 61],
  },
];

export default function Dashboard(): JSX.Element {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" align="flex-start">
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Inscritos da Semana
            </Text>
            <Chart series={series} options={options} />
          </Box>
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Taxa de abertura
            </Text>
            <Chart series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
