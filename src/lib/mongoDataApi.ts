import { NextResponse } from 'next/server';

type DataApiAction =
  | 'find'
  | 'insertOne';

interface DataApiConfig {
  url: string;
  apiKey: string;
  dataSource: string;
  database: string;
}

const REQUIRED_VARS = ['MONGODB_DATA_API_URL', 'MONGODB_DATA_API_KEY', 'MONGODB_DATA_SOURCE', 'MONGODB_DATA_API_DATABASE'];

export function hasDataApiConfig() {
  return REQUIRED_VARS.every((key) => !!process.env[key]);
}

export function getDataApiConfig(): DataApiConfig {
  const url = process.env.MONGODB_DATA_API_URL;
  const apiKey = process.env.MONGODB_DATA_API_KEY;
  const dataSource = process.env.MONGODB_DATA_SOURCE;
  const database = process.env.MONGODB_DATA_API_DATABASE;

  if (!url || !apiKey || !dataSource || !database) {
    throw new Error('MongoDB Data API configuration is missing. Please set MONGODB_DATA_API_URL, MONGODB_DATA_API_KEY, MONGODB_DATA_SOURCE, and MONGODB_DATA_API_DATABASE.');
  }

  return { url, apiKey, dataSource, database };
}

async function dataApiFetch<T>(action: DataApiAction, body: Record<string, unknown>): Promise<T> {
  const config = getDataApiConfig();

  const response = await fetch(`${config.url}/action/${action}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': config.apiKey,
    },
    body: JSON.stringify({
      dataSource: config.dataSource,
      database: config.database,
      ...body,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Data API ${action} failed: ${response.status} ${text}`);
  }

  return response.json() as Promise<T>;
}

export async function dataApiFind(collection: string, sort: Record<string, number> = { createdAt: -1 }) {
  return dataApiFetch<{ documents: any[] }>('find', {
    collection,
    sort,
  });
}

export async function dataApiInsertOne(collection: string, document: Record<string, unknown>) {
  return dataApiFetch<{ insertedId: string }>('insertOne', {
    collection,
    document,
  });
}

export function badConfigResponse() {
  return NextResponse.json(
    {
      message: 'MongoDB Data API configuration missing',
      required: REQUIRED_VARS,
    },
    { status: 500 },
  );
}

