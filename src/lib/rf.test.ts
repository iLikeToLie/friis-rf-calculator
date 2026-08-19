import { describe, expect, it } from 'vitest';
import { DEFAULT_STATE } from '../data/defaults';
import { calculateLink, calculatePlacements, distanceSweep, gainSweep } from './rf';

describe('Version 3 workbook parity', () => {
  it('matches the default calculator results', () => {
    const result = calculateLink(DEFAULT_STATE.inputs);
    expect(result.wavelengthM).toBeCloseTo(0.05168835482758621, 12);
    expect(result.fsplDb).toBeCloseTo(101.68795995797917, 10);
    expect(result.totalLossDb).toBe(6.5);
    expect(result.receivedPowerDbm).toBeCloseTo(-51.187959957979174, 10);
    expect(result.receivedPowerMw).toBeCloseTo(0.00000760683514248086, 16);
    expect(result.linkMarginDb).toBeCloseTo(33.812040042020826, 10);
    expect(result.interferenceMarginDb).toBeCloseTo(-13.812040042020826, 10);
    expect(result.status).toBe('Possible interference');
  });

  it('matches the first Version 3 distance-sweep point', () => {
    const [point] = distanceSweep(DEFAULT_STATE.inputs, DEFAULT_STATE.distanceSweep);
    expect(point.distanceM).toBe(10);
    expect(point.receivedPowerDbm).toBeCloseTo(-17.2085598712588, 10);
  });

  it('matches the corrected Version 3 gain sweep', () => {
    const [point] = gainSweep(DEFAULT_STATE.inputs, DEFAULT_STATE.gainSweep);
    expect(point.gainDbi).toBe(0);
    expect(point.receivedPowerDbm[0]).toBeCloseTo(-57.167360044699564, 10);
    expect(point.receivedPowerDbm[1]).toBeCloseTo(-63.187959957979174, 10);
    expect(point.receivedPowerDbm[2]).toBeCloseTo(-75.22915978453842, 10);
  });

  it('matches placement power, margin, rank, and status', () => {
    const rows = calculatePlacements(DEFAULT_STATE.inputs, DEFAULT_STATE.placements);
    expect(rows[0].receivedPowerDbm).toBeCloseTo(-39.667360044699564, 10);
    expect(rows[0].rank).toBe(1);
    expect(rows[0].status).toBe('Possible interference');
    expect(rows[3].rank).toBe(5);
    expect(rows[3].status).toBe('Acceptable link');
    expect(rows[4].status).toBe('Weak link');
    expect(rows[9].receivedPowerDbm).toBeCloseTo(-127.72915978453841, 10);
  });
});
