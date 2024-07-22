import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"

export default function About() {
  return <section id="about" className="space-y-20 px-3">
    <main>
      <div className='max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
        <h1 className='font-extrabold text-4xl lg:text-6xl tracking-tight text-center bg-clip-text bg-gradient-to-b from-primary to-foreground text-transparent py-2'>
          Transforming Spaces, One Building at a Time
        </h1>
        <h4 className='mt-5 text-lg text-center max-w-3xl mx-auto'>
          We turn your vision into reality with innovative architectural design and precise engineering solutions.
          Our dedicated team delivers exceptional service and quality for every residential, commercial, and industrial project.
        </h4>
      </div>
    </main>
    <div className="grid place-items-center gap-5 px-5 py-2 sm:grid-cols-2">
      <Testimonials 
        name="Samantha Lee"
        description="Interior Designer"
        content="
        Working with Nothing was a game-changer for my projects.
        Their attention to detail and creativity brought our designs to life in ways we hadn't imagined.
        "
      /> 
      <Testimonials 
        name="David Martinez"
        description="Small Business Owner"
        content="
        The contruction team at nothing was outstanding. They handled everything with professionalism and delivered a top-notch product.
        Our new shop looks incredible!
        "
      /> 
      <Testimonials 
        name="Laura Chen"
        description="Corporate Executive"
        content="
        Our new office was completed on time and exceeded our expectations.
        nothing's ability to blend functionality with style is impressive.
        "
      /> 
      <Testimonials 
        name="Ryan Adams"
        description="Real Estate Investor"
        content="
        The transformation of our property by nothing was phenomenal.
        They approached the project with precision and care, making the entire experience smooth and satisfying.
        "
      /> 
    </div>
  </section>
}

const Testimonials = ({ name, description, content }: {
  name: string; description: string; content: string;
}) => {
  return (
  <Card>
    <CardHeader>
      <CardTitle>
        {name}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        {content}
      </p>
    </CardContent>
  </Card>
  )
}

