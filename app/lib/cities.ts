// app/lib/cities.ts
import pool from '../..//lib/db';

export async function getCityData(cityName: string) {
  if (!pool) {
    throw new Error('Database connection is not available');
  }

  try {
    const result = await pool.query(
      'SELECT * FROM cities WHERE LOWER(city) = LOWER($1)',
      [cityName]
    );
    
    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error;
  }
}

export async function getActivityData(activityTitle: string) {
  if (!pool) {
    throw new Error('Database connection is not available');
  }

  try {
    // Convert URL-friendly format back to spaces
    const formattedTitle = activityTitle.replace(/-/g, ' ');
    
    const result = await pool.query(
      'SELECT * FROM activities WHERE LOWER(building_name) = LOWER($1)',
      [formattedTitle]
    );
    
    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching activity data:', error);
    throw error;
  }
}