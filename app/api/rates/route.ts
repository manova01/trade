
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=18&convert=USD',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY as string,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch rates from CoinMarketCap');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API] Error fetching rates:', error);
    return NextResponse.json(
      { error: 'Failed to load cryptocurrency rates.' },
      { status: 500 }
    );
  }
}
