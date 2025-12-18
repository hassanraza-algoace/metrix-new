"use client"

// import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
} from "./card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

export const description = "A donut chart"

const chartData = [
  { browser: "March", visitors: 275, fill: "#97A5EB" },
  { browser: "April", visitors: 200, fill: "#FFCC91" },
  { browser: "May", visitors: 187, fill: "#5570F1" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "March",
    color: "var(--chart-1)",
  },
  safari: {
    label: "April",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "May",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[220px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
