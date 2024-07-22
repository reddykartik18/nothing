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
  { date: '2014-01', residential: 5, commercial: 3 },
  { date: '2014-02', residential: 7, commercial: 2 },
  { date: '2014-03', residential: 6, commercial: 4 },
  { date: '2014-04', residential: 8, commercial: 3 },
  { date: '2014-05', residential: 5, commercial: 5 },
  { date: '2014-06', residential: 9, commercial: 4 },
  { date: '2014-07', residential: 10, commercial: 3 },
  { date: '2014-08', residential: 6, commercial: 6 },
  { date: '2014-09', residential: 7, commercial: 5 },
  { date: '2014-10', residential: 5, commercial: 4 },
  { date: '2014-11', residential: 6, commercial: 3 },
  { date: '2014-12', residential: 8, commercial: 4 },
  { date: '2015-01', residential: 9, commercial: 5 },
  { date: '2015-02', residential: 7, commercial: 6 },
  { date: '2015-03', residential: 6, commercial: 4 },
  { date: '2015-04', residential: 8, commercial: 3 },
  { date: '2015-05', residential: 7, commercial: 5 },
  { date: '2015-06', residential: 9, commercial: 6 },
  { date: '2015-07', residential: 10, commercial: 7 },
  { date: '2015-08', residential: 11, commercial: 6 },
  { date: '2015-09', residential: 8, commercial: 5 },
  { date: '2015-10', residential: 7, commercial: 4 },
  { date: '2015-11', residential: 9, commercial: 5 },
  { date: '2015-12', residential: 10, commercial: 6 },
  { date: '2016-01', residential: 11, commercial: 7 },
  { date: '2016-02', residential: 8, commercial: 6 },
  { date: '2016-03', residential: 9, commercial: 5 },
  { date: '2016-04', residential: 10, commercial: 6 },
  { date: '2016-05', residential: 11, commercial: 7 },
  { date: '2016-06', residential: 9, commercial: 8 },
  { date: '2016-07', residential: 10, commercial: 7 },
  { date: '2016-08', residential: 11, commercial: 8 },
  { date: '2016-09', residential: 12, commercial: 9 },
  { date: '2016-10', residential: 11, commercial: 8 },
  { date: '2016-11', residential: 10, commercial: 7 },
  { date: '2016-12', residential: 9, commercial: 6 },
  { date: '2017-01', residential: 10, commercial: 7 },
  { date: '2017-02', residential: 11, commercial: 8 },
  { date: '2017-03', residential: 12, commercial: 9 },
  { date: '2017-04', residential: 13, commercial: 10 },
  { date: '2017-05', residential: 14, commercial: 9 },
  { date: '2017-06', residential: 12, commercial: 8 },
  { date: '2017-07', residential: 13, commercial: 7 },
  { date: '2017-08', residential: 14, commercial: 8 },
  { date: '2017-09', residential: 13, commercial: 7 },
  { date: '2017-10', residential: 12, commercial: 6 },
  { date: '2017-11', residential: 13, commercial: 7 },
  { date: '2017-12', residential: 14, commercial: 8 },
  { date: '2018-01', residential: 15, commercial: 9 },
  { date: '2018-02', residential: 14, commercial: 8 },
  { date: '2018-03', residential: 15, commercial: 7 },
  { date: '2018-04', residential: 16, commercial: 8 },
  { date: '2018-05', residential: 15, commercial: 9 },
  { date: '2018-06', residential: 14, commercial: 8 },
  { date: '2018-07', residential: 15, commercial: 7 },
  { date: '2018-08', residential: 16, commercial: 8 },
  { date: '2018-09', residential: 15, commercial: 9 },
  { date: '2018-10', residential: 14, commercial: 8 },
  { date: '2018-11', residential: 13, commercial: 7 },
  { date: '2018-12', residential: 14, commercial: 8 },
  { date: '2019-01', residential: 15, commercial: 9 },
  { date: '2019-02', residential: 16, commercial: 8 },
  { date: '2019-03', residential: 15, commercial: 7 },
  { date: '2019-04', residential: 14, commercial: 8 },
  { date: '2019-05', residential: 13, commercial: 9 },
  { date: '2019-06', residential: 14, commercial: 8 },
  { date: '2019-07', residential: 15, commercial: 7 },
  { date: '2019-08', residential: 16, commercial: 8 },
  { date: '2019-09', residential: 15, commercial: 9 },
  { date: '2019-10', residential: 14, commercial: 8 },
  { date: '2019-11', residential: 13, commercial: 7 },
  { date: '2019-12', residential: 12, commercial: 6 },
  { date: '2020-01', residential: 13, commercial: 7 },
  { date: '2020-02', residential: 14, commercial: 8 },
  { date: '2020-03', residential: 15, commercial: 9 },
  { date: '2020-04', residential: 16, commercial: 8 },
  { date: '2020-05', residential: 15, commercial: 7 },
  { date: '2020-06', residential: 14, commercial: 8 },
  { date: '2020-07', residential: 15, commercial: 9 },
  { date: '2020-08', residential: 16, commercial: 8 },
  { date: '2020-09', residential: 15, commercial: 7 },
  { date: '2020-10', residential: 14, commercial: 8 },
  { date: '2020-11', residential: 13, commercial: 7 },
  { date: '2020-12', residential: 12, commercial: 6 },
  { date: '2021-01', residential: 13, commercial: 7 },
  { date: '2021-02', residential: 14, commercial: 8 },
  { date: '2021-03', residential: 15, commercial: 9 },
  { date: '2021-04', residential: 16, commercial: 8 },
  { date: '2021-05', residential: 15, commercial: 7 },
  { date: '2021-06', residential: 14, commercial: 8 },
  { date: '2021-07', residential: 15, commercial: 7 },
  { date: '2021-08', residential: 16, commercial: 8 },
  { date: '2021-09', residential: 15, commercial: 9 },
  { date: '2021-10', residential: 14, commercial: 8 },
  { date: '2021-11', residential: 13, commercial: 7 },
  { date: '2021-12', residential: 12, commercial: 6 },
  { date: '2022-01', residential: 13, commercial: 7 },
  { date: '2022-02', residential: 14, commercial: 8 },
  { date: '2022-03', residential: 15, commercial: 9 },
  { date: '2022-04', residential: 16, commercial: 8 },
  { date: '2022-05', residential: 15, commercial: 7 },
  { date: '2022-06', residential: 14, commercial: 8 },
  { date: '2022-07', residential: 15, commercial: 7 },
  { date: '2022-08', residential: 16, commercial: 8 },
  { date: '2022-09', residential: 15, commercial: 9 },
  { date: '2022-10', residential: 14, commercial: 8 },
  { date: '2022-11', residential: 13, commercial: 7 },
  { date: '2022-12', residential: 12, commercial: 6 },
  { date: '2023-01', residential: 13, commercial: 7 },
  { date: '2023-02', residential: 14, commercial: 8 },
  { date: '2023-03', residential: 15, commercial: 9 },
  { date: '2023-04', residential: 16, commercial: 8 },
  { date: '2023-05', residential: 15, commercial: 7 },
  { date: '2023-06', residential: 14, commercial: 8 },
  { date: '2023-07', residential: 15, commercial: 9 },
  { date: '2023-08', residential: 16, commercial: 8 },
  { date: '2023-09', residential: 15, commercial: 7 },
  { date: '2023-10', residential: 14, commercial: 8 },
  { date: '2023-11', residential: 13, commercial: 7 },
  { date: '2023-12', residential: 12, commercial: 6 },
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
          <CardDescription>Showing monthly project completions for over a decade.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-residential)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-residential)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-commercial)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-commercial)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator='dot'
                />
              }
            />
            <Area
              dataKey='commercial'
              type='natural'
              fill='url(#fillMobile)'
              stroke='var(--color-commercial)'
              stackId='a'
            />
            <Area
              dataKey='residential'
              type='natural'
              fill='url(#fillDesktop)'
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
