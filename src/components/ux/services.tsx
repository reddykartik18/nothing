import Card from '@/components/ux/card'
import Image from 'next/image'

export default function Services() {
  return (
    <section id='services' className='space-y-10'>
      <main>
        <div className='max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
          <h1 className='font-extrabold text-4xl lg:text-6xl tracking-tight text-center bg-clip-text bg-gradient-to-b from-primary to-foreground text-transparent py-2'>
            Comprehensive Construction Services
          </h1>
          <h4 className='mt-5 text-lg text-center max-w-3xl mx-auto'>
            Delivering Excellence in Every Phase, from Concept to Completion
          </h4>
        </div>
      </main>
      <div className='grid place-items-center gap-[8px] md:grid-cols-2'>
        <Card
          name='Architectural Design'
          description='Innovative and sustainable designs that reflect your vision and needs.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/4.jpg'}
                alt='architectural design'
                fill={true}
                placeholder='blur'
                blurDataURL={'/4.jpg'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        />
        <Card
          name='Engineering Solutions'
          description='Cutting-edge engineering services ensuring structural integrity and safety.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/3.jpg'}
                alt='Engineering Solutions'
                fill={true}
                placeholder='blur'
                blurDataURL={'/3.jpg'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        />
        <Card
          name='Interior Design'
          description='Creating functional and beautiful interior spaces tailored to your lifestyle.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/1.png'}
                alt='interior design'
                fill={true}
                placeholder='blur'
                blurDataURL={'/1.png'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        />
        <Card
          name='Renovation and Remodeling'
          description='Modernizing and enhancing existing structures to meet contemporary standards.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/2.png'}
                alt='Renovation and Remodeling'
                fill={true}
                placeholder='blur'
                blurDataURL={'/2.png'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        />
      </div>

      <main>
        <div className='max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
          <h1 className='font-extrabold text-4xl lg:text-6xl tracking-tight text-center bg-clip-text bg-gradient-to-b from-primary to-foreground text-transparent py-2'>
            Groundbreaking Projects: Pioneering Innovation in Construction
          </h1>
          <h4 className='mt-5 text-lg text-center max-w-3xl mx-auto'>
            Discover our portfolio of unique and space-efficient designs that redefine modern living and working spaces.
          </h4>
        </div>
      </main>

      <div className='grid place-items-center gap-[8px] md:grid-cols-2'>
        <Card
          name='Enchanted Cave Dwelling'
          description='A mesmerizing cave house integrated into the natural landscape, blending ancient craftsmanship with modern amenities.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/5.jfif'}
                alt='cave house'
                fill={true}
                placeholder='blur'
                blurDataURL={'/5.jfif'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
          footer={
            <div>
              <h4 className='font-semibold leading-none tracking-tight'>Mystic Mountain Ridge</h4>
              <span className='text-sm text-muted-foreground'>May 2018</span>
            </div>
          }
        />
        <Card
          name='Whispering Wood Treehouse'
          description='A magical treehouse nestled in the canopy, constructed from enchanted timber, offering a serene escape in harmony with nature.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/6.jfif'}
                alt='tree house'
                fill={true}
                placeholder='blur'
                blurDataURL={'/6.jfif'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
          footer={
            <div>
              <h4 className='font-semibold leading-none tracking-tight'>Enchanted Forest Glade</h4>
              <span className='text-sm text-muted-foreground'>August 2017</span>
            </div>
          }
        />
        <Card
          name='Tiny Haven Retreat'
          description='A luxurious tiny house with innovative design, maximizing space and comfort while promoting sustainable living. Its super space efficient.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/7.jfif'}
                alt='tiny house'
                fill={true}
                placeholder='blur'
                blurDataURL={'/7.jfif'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
          footer={
            <div>
              <h4 className='font-semibold leading-none tracking-tight'>Hidden Urban Oasis</h4>
              <span className='text-sm text-muted-foreground'>October 2019</span>
            </div>
          }
        />
        <Card
          name='Lakeside Dream Cottage'
          description='A picturesque lakeside house designed to blend seamlessly with its surroundings, offering stunning views and a peaceful living experience.'
          content={
            <div className='block h-40 min-[375px]:h-48 min-[425px]:h-52 lg:h-72 border border-input relative'>
              <Image
                src={'/8.jfif'}
                alt='lakeside house'
                fill={true}
                placeholder='blur'
                blurDataURL={'/8.jfif'}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{
                  width: '100%',
                  borderRadius: '0.25rem',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
          footer={
            <div>
              <h4 className='font-semibold leading-none tracking-tight'>Tranquil Lakeshore Town</h4>
              <span className='text-sm text-muted-foreground'>June 2020</span>
            </div>
          }
        />
      </div>
    </section>
  )
}
