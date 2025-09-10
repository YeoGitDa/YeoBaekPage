"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "January", completed: 186, pending: 80 },
  { month: "February", completed: 305, pending: 200 },
  { month: "March", completed: 237, pending: 120 },
  { month: "April", completed: 73, pending: 190 },
  { month: "May", completed: 209, pending: 130 },
  { month: "June", completed: 214, pending: 140 },
]

const chartConfig = {
  completed: {
    label: "Completed",
    color: "hsl(var(--primary))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig

export function LabChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer>
        <BarChart data={chartData} accessibilityLayer>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis
             tickLine={false}
             tickMargin={10}
             axisLine={false}
             stroke="hsl(var(--muted-foreground))"
             fontSize={12}
             tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
          <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
