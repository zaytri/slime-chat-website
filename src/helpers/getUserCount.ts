import { cache } from 'react'
import prisma from '@/helpers/database'

export const revalidate = 300 // revalidate the data at most every 5 minutes

export const getUserCount = cache(async () => {
  return prisma.user.count()
})
