// app/api/activities/[id]/route.ts
import { NextResponse } from 'next/server';
import { getActivityData } from '../../../lib/cities';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const activityTitle = params.id;

  if (!activityTitle) {
    return NextResponse.json(
      { error: 'Activity title is required' },
      { status: 400 }
    );
  }

  try {
    const activity = await getActivityData(activityTitle);
    
    if (!activity) {
      return NextResponse.json(
        { error: 'Activity not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(activity);
  } catch (error) {
    console.error('Error fetching activity:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch activity' },
      { status: 500 }
    );
  }
}