import { z } from 'zod'

export const Schema = z
  .object({
    firstName: z.string().trim().max(150),
    lastName: z.string().trim().max(150),
    email: z.string().trim().email({
      message: 'Invalid email address',
    }),
    message: z.string(),
  })
  .required()
  .strict()

export type SchemaType = z.infer<typeof Schema>
