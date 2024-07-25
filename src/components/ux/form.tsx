'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema, SchemaType } from '@/schema'
import { send } from '@/app/action'
import { toast } from 'sonner'

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'all',
  })
  const processForm: SubmitHandler<SchemaType> = async (data) => {
    const result = await send(data)
    if (!result || result.error) {
      // console.log(result)
      toast.error('Something went wrong!')
      return
    }

    toast.success('Message sent!')
    // console.log(result)
    reset()
  }

  return (
    <form className='space-y-5' onSubmit={handleSubmit(processForm)}>
      <div className='flex flex-col gap-5 md:flex-row'>
        <fieldset disabled={isSubmitting}>
          <label htmlFor='firstName' className='flex flex-col space-y-1'>
            <span className='font-semibold'>First name</span>
            <input
              required
              type='text'
              id='firstName'
              placeholder='First name'
              className={`
              placeholder:text-muted-foreground p-2 outline-none border-2 
              ${errors.firstName ? 'border-destructive' : 'border-secondary-foreground/var(--opacity)'} bg-transparent rounded-md`}
              {...register('firstName', { required: true })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && <span className='text-sm text-destructive'>{errors.firstName.message}</span>}
          </label>
        </fieldset>
        <fieldset disabled={isSubmitting}>
          <label htmlFor='lastName' className='flex flex-col space-y-1'>
            <span className='font-semibold'>Last name</span>
            <input
              required
              type='text'
              id='lastName'
              placeholder='Last name'
              className={`
              placeholder:text-muted-foreground p-2 outline-none border-2 
              ${errors.lastName ? 'border-destructive' : 'border-secondary-foreground/var(--opacity)'} bg-transparent rounded-md`}
              {...register('lastName', { required: true })}
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && <span className='text-sm text-destructive'>{errors.lastName.message}</span>}
          </label>
        </fieldset>
      </div>
      <fieldset disabled={isSubmitting}>
        <label htmlFor='email' className='flex flex-col space-y-1'>
          <span className='font-semibold'>Email</span>
          <input
            required
            type='email'
            id='email'
            placeholder='you@domain.com'
            className={`
            placeholder:text-muted-foreground p-2 outline-none border-2 
            ${errors.email ? 'border-destructive' : 'border-secondary-foreground/var(--opacity)'} bg-transparent rounded-md`}
            {...register('email', { required: true })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <span className='text-sm text-destructive'>{errors.email.message}</span>}
        </label>
      </fieldset>
      <fieldset disabled={isSubmitting}>
        <label htmlFor='message' className='flex flex-col space-y-1'>
          <span className='font-semibold'>Message</span>
          <textarea
            required
            rows={5}
            cols={30}
            id='message'
            placeholder='Type your message here...'
            className={`
              placeholder:text-muted-foreground p-2 outline-none border-2 
              ${errors.message ? 'border-destructive' : 'border-secondary-foreground/var(--opacity)'} bg-transparent rounded-md
            `}
            {...register('message', { required: true })}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && <span className='text-sm text-destructive'>{errors.message.message}</span>}
        </label>
      </fieldset>
      <button
        disabled={isSubmitting}
        type='submit'
        className={`bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 p-5 rounded-md flex items-center justify-center font-semibold w-full disabled:select-none disabled:opacity-[0.8]`}
      >
        {isSubmitting ? 'Sending Message...' : 'Send message'}
      </button>
    </form>
  )
}
