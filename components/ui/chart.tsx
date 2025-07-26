"use client"

import type * as React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
} from "recharts"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

// Define a type for the chart components
type ChartComponent = typeof LineChart | typeof BarChart | typeof PieChart | typeof RadialBarChart | typeof AreaChart

// Define a map for chart components
const chartComponents: { [key: string]: ChartComponent } = {
  LineChart,
  BarChart,
  PieChart,
  RadialBarChart,
  AreaChart,
}

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
  data: Record<string, any>[]
  chartType: keyof typeof chartComponents
  series: {
    dataKey: string
    type: "line" | "bar" | "area" | "pie" | "radialBar"
    stroke?: string
    fill?: string
    name?: string
  }[]
  categoryDataKey?: string // For charts that need a category axis (e.g., LineChart, BarChart, AreaChart)
  valueDataKey?: string // For charts that need a value axis (e.g., PieChart, RadialBarChart)
}

export function Chart({
  config,
  data,
  chartType,
  series,
  categoryDataKey,
  valueDataKey,
  className,
  ...props
}: ChartProps) {
  const ChartComponent = chartComponents[chartType]

  if (!ChartComponent) {
    console.error(`Unknown chart type: ${chartType}`)
    return null
  }

  return (
    <ChartContainer config={config} className={cn("min-h-[200px] w-full", className)} {...props}>
      <ChartComponent data={data}>
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        {series.map((s, index) => {
          if (s.type === "line") {
            return (
              <Line
                key={index}
                dataKey={s.dataKey}
                stroke={s.stroke || `hsl(var(--chart-${index + 1}))`}
                fill={s.fill || `hsl(var(--chart-${index + 1}))`}
                name={s.name || s.dataKey}
              />
            )
          } else if (s.type === "bar") {
            return (
              <Bar
                key={index}
                dataKey={s.dataKey}
                stroke={s.stroke || `hsl(var(--chart-${index + 1}))`}
                fill={s.fill || `hsl(var(--chart-${index + 1}))`}
                name={s.name || s.dataKey}
              />
            )
          } else if (s.type === "area") {
            return (
              <Area
                key={index}
                dataKey={s.dataKey}
                stroke={s.stroke || `hsl(var(--chart-${index + 1}))`}
                fill={s.fill || `hsl(var(--chart-${index + 1}))`}
                name={s.name || s.dataKey}
              />
            )
          } else if (s.type === "pie") {
            return (
              <Pie
                key={index}
                dataKey={s.dataKey}
                name={s.name || s.dataKey}
                outerRadius={80}
                fill={`hsl(var(--chart-${index + 1}))`}
                label
              />
            )
          } else if (s.type === "radialBar") {
            return (
              <RadialBar key={index} dataKey={s.dataKey} name={s.name || s.dataKey} background clockWise data={data} />
            )
          }
          return null
        })}
      </ChartComponent>
    </ChartContainer>
  )
}
