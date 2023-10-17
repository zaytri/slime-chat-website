import prisma from '@/helpers/database'
import { NextRequest, NextResponse } from 'next/server'
import { providerPathValidator } from '../../auth'
import { createAuth } from '../../authProvider'

// use clientToken (key) to get accessToken
export async function GET(request: NextRequest, { params }: AuthOptions) {
  try {
    const authorization = request.headers.get('Authorization')
    const provider = providerPathValidator.parse(params.provider)

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw Error('Invalid Authorization')
    }

    const key = authorization.split(' ')[1] // remove 'Bearer '

    const { id, refreshToken, accessToken, scope } =
      await prisma.user.findUniqueOrThrow({
        where: { clientToken: key, clientTokenExpires: { gt: new Date() } },
        select: {
          id: true,
          refreshToken: true,
          accessToken: true,
          scope: true,
        },
      })

    const newTokens = await createAuth(provider).refreshTokens({
      refreshToken,
      accessToken,
      scope,
    })

    const { accessToken: newAccessToken } = await prisma.user.update({
      where: { id },
      data: {
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
        scope: newTokens.scope,
      },
      select: { accessToken: true },
    })

    const headers = new Headers()
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'GET')
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    return NextResponse.json({ token: newAccessToken }, { headers })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: '400 Bad Request' }, { status: 400 })
  }
}
