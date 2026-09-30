export type BatchStatus = 'PENDING' | 'TESTING' | 'VERIFIED' | 'MONITOR' | 'FLAGGED' | 'QUARANTINED' | 'RECALLED';

export interface FeedBatch {
  id: string;
  batch_id: string; // The MF-XXXX ID
  feed_type: string;
  manufacturer_id: string;
  production_date: string;
  quantity_kg: number;
  status: BatchStatus;
  current_owner_id: string;
  last_tested_at?: string;
  risk_level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface QualityMeasurement {
  id: string;
  batch_id: string;
  parameter: string;
  value: number | string;
  unit: string;
  source: 'LABORATORY' | 'PORTABLE_DEVICE' | 'IOT_SENSOR' | 'MANUAL_ENTRY' | 'INSPECTION';
  method: string;
  tested_by: string;
  tested_at: string;
  confidence: 'VALIDATED' | 'OBSERVED' | 'PREDICTED';
}

export interface StorageRecord {
  id: string;
  batch_id: string;
  temperature_c: number;
  humidity_percent: number;
  recorded_at: string;
  source: 'IOT_SENSOR' | 'MANUAL_ENTRY';
}

export interface Incident {
  id: string;
  batch_id: string;
  issue: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'INVESTIGATION' | 'ACTION_TAKEN' | 'RESOLVED';
  affected_farms_count: number;
  created_at: string;
}
