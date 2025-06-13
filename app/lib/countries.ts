import pool from '../../lib/db';

export async function getCountriesByContinent() {
  if (!pool) {
    throw new Error('Database connection is not available');
  }

  try {
    const result = await pool.query(`
      SELECT country_name, continent
      FROM countries
      ORDER BY continent, country_name
    `);

    const groupedByContinent = result.rows.reduce((acc, row) => {
      const { country_name, continent } = row;
      if (!acc[continent]) {
        acc[continent] = [];
      }
      acc[continent].push(country_name);
      return acc;
    }, {});

    return groupedByContinent;
  } catch (error) {
    console.error('Error fetching countries by continent:', error);
    throw error;
  }
} 