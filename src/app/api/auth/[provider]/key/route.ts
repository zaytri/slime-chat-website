import { NextResponse, NextRequest } from 'next/server'
import {
  generateClientToken,
  getAuthenticatedUser,
  providerPathValidator,
} from '../../auth'
import prisma from '@/helpers/database'

// create new clientToken (key)
export async function POST(request: NextRequest, { params }: AuthOptions) {
  try {
    const provider = providerPathValidator.parse(params.provider)

    const { id, providerAccountId } = await getAuthenticatedUser(
      request,
      provider,
    )

    const { clientToken, clientTokenExpires } = await prisma.user.update({
      where: { id },
      data: { ...generateClientToken(provider, providerAccountId) },
      select: { clientToken: true, clientTokenExpires: true },
    })

    return NextResponse.json<AuthKeyResponse>({
      key: clientToken!,
      keyExpiration: clientTokenExpires ? clientTokenExpires.toString() : null,
    })
  } catch (error) {
    console.error(error)
    // token expired
    return NextResponse.json({ error: '400 Bad Request' }, { status: 400 })
  }
}
