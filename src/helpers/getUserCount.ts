import prisma from '@/helpers/database'

export const revalidate = 300 // revalidate the data at most every 5 minutes

export async function getUserCount() {
  return prisma.user.count()
}
