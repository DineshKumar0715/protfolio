
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const sort = searchParams.get('sort') || 'updated';
  const per_page = searchParams.get('per_page') || '6';

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add optional GITHUB_TOKEN if available in environment variables
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${per_page}`, {
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json({ error: errorData.message }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
