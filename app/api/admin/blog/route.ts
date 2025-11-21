import { NextRequest, NextResponse } from 'next/server'

// In production, this would connect to a database
let articles: any[] = []

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    data: articles,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newArticle = {
      id: Date.now().toString(),
      ...body,
      author: {
        id: '1',
        name: 'Admin User',
        avatar: '/images/authors/default.jpg',
        bio: 'Content creator',
      },
      readTime: Math.ceil(body.content.split(' ').length / 200),
      publishedAt: body.status === 'published' ? new Date().toISOString() : null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    articles.push(newArticle)

    return NextResponse.json({
      success: true,
      data: newArticle,
      message: 'Article created successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create article',
      },
      { status: 500 }
    )
  }
}
