'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { year: '2014', residential: 70, commercial: 50 },
  { year: '2015', residential: 100, commercial: 90 },
  { year: '2016', residential: 80, commercial: 40 },
  { year: '2017', residential: 120, commercial: 30 },
  { year: '2018', residential: 73, commercial: 52 },
  { year: '2019', residential: 45, commercial: 70 },
  { year: '2020', residential: 74, commercial: 82 },
  { year: '2021', residential: 102, commercial: 69 },
  { year: '2022', residential: 108, commercial: 68 },
  { year: '2023', residential: 120, commercial: 106 },
]
const chartConfig = {
  projects: {
    label: 'Projects Completed',
  },
  residential: {
    label: 'Residential',
    color: 'hsl(var(--chart-1))',
  },
  commercial: {
    label: 'Commercial',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 text-center sm:text-left'>
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>Showing yearly project completions for over a decade.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <AreaChart accessibilityLayer data={chartData} margin={{left:12, right:12,}}>
            <defs>
              <linearGradient id='fillResidential' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-residential)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-residential)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillCommercial' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-commercial)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-commercial)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='year'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  year: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent indicator='dot' />
              }
            />
            <Area
              dataKey='commercial'
              type='natural'
              fill='var(--color-commercial)'
              fillOpacity={0.4}
              stroke='var(--color-commercial)'
              stackId='a'
            />
            <Area
              dataKey='residential'
              type='natural'
              fill='var(--color-residential)'
              fillOpacity={0.4}
              stroke='var(--color-residential)'
              stackId='a'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

