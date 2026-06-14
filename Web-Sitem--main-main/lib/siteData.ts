/**
 * Merkezi veri katmanı - Okuma/Yazma öncelik sırası:
 * 1. Supabase (kalıcı, tüm cihazlardan erişilebilir)
 * 2. Express API (/api/data) - localhost dev
 * 3. localStorage (tarayıcı fallback)
 */
import { supabase } from './supabase';

const LS_KEY = 'ex-donusum-data';
const SUPABASE_TABLE = 'site_data';
const SUPABASE_ROW_ID = 1;

export interface SiteData {
  partners?: unknown[];
  blogs?: unknown[];
  services?: unknown[];
  logo?: string;
  heroBg?: string;
  aboutImg?: string;
  [key: string]: unknown;
}

// ---------- localStorage ----------
function lsLoad(): SiteData {
  try { const r = localStorage.getItem(LS_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
}
function lsSave(data: SiteData) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch {}
}

// ---------- Supabase ----------
async function supabaseLoad(): Promise<SiteData | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from(SUPABASE_TABLE)
      .select('data')
      .eq('id', SUPABASE_ROW_ID)
      .single();
    if (error || !data) return null;
    return data.data as SiteData;
  } catch { return null; }
}

async function supabaseSave(patch: SiteData): Promise<boolean> {
  if (!supabase) return false;
  try {
    const current = await supabaseLoad() ?? {};
    const merged = { ...current, ...patch };
    const { error } = await supabase
      .from(SUPABASE_TABLE)
      .upsert({ id: SUPABASE_ROW_ID, data: merged }, { onConflict: 'id' });
    if (error) return false;
    lsSave(merged); // localStorage'ı da güncelle
    return true;
  } catch { return false; }
}

// ---------- Express API ----------
async function apiLoad(): Promise<SiteData | null> {
  try {
    const r = await fetch('/api/data');
    if (!r.ok) return null;
    return await r.json() as SiteData;
  } catch { return null; }
}

async function apiSave(patch: SiteData): Promise<boolean> {
  try {
    const r = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(patch),
    });
    return r.ok;
  } catch { return false; }
}

// ---------- Public API ----------
export async function loadSiteData(): Promise<SiteData> {
  // 1. Supabase
  const sbData = await supabaseLoad();
  if (sbData) { lsSave(sbData); return sbData; }

  // 2. Express API
  const apiData = await apiLoad();
  if (apiData) { lsSave(apiData); return apiData; }

  // 3. localStorage
  return lsLoad();
}

export async function saveSiteData(patch: SiteData): Promise<void> {
  // 1. Supabase
  const saved = await supabaseSave(patch);
  if (saved) return;

  // 2. Express API
  await apiSave(patch);

  // 3. localStorage (her zaman yedekle)
  const current = lsLoad();
  lsSave({ ...current, ...patch });
}
