// app/api/cities/route.ts
import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  if (!pool) {
    return NextResponse.json(
      { error: 'Database connection is not available' },
      { status: 500 }
    );
  }

  try {
    const result = await pool.query(
      'SELECT id, city, country, state, activity_count FROM cities WHERE LOWER(country) = LOWER($1) ORDER BY city',
      [country]
    );
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    );
  }
}