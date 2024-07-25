import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Component({
  name,
  description,
  content,
  footer,
}: {
  name?: string
  description?: string
  content?: React.ReactNode | string
  footer?: React.ReactNode | string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
