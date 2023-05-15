'use client'

import { Card, Color, Metric, Subtitle, Text } from "@tremor/react";

type Props = {
  title: string;
  subtitle?: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, subtitle, metric, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Subtitle>{subtitle}</Subtitle>
      <></>
      <Metric>{metric}</Metric>
    </Card>
  )
}

export default StatCard;
