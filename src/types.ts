export type ScreeningStatus =
  | 'Possible interference'
  | 'Acceptable link'
  | 'Weak link'
  | 'Below interference threshold'
  | 'Invalid input';

export interface LinkInputs {
  scenarioName: string;
  txId: string;
  rxId: string;
  transmitPowerDbm: number;
  txGainDbi: number;
  rxGainDbi: number;
  frequencyGhz: number;
  distanceM: number;
  txLossDb: number;
  rxLossDb: number;
  polarizationLossDb: number;
  obstructionLossDb: number;
  otherLossDb: number;
  sensitivityDbm: number;
  interferenceThresholdDbm: number;
  fadeMarginTargetDb: number;
}

export interface DistanceSweepSettings {
  minDistanceM: number;
  maxDistanceM: number;
  stepM: number;
}

export interface GainSweepSettings {
  gainToSweep: 'tx' | 'rx';
  minGainDbi: number;
  maxGainDbi: number;
  stepDb: number;
  distancesM: [number, number, number];
}

export interface PlacementScenario {
  id: string;
  name: string;
  distanceM: number;
  txGainDbi: number;
  rxGainDbi: number;
  txLossDb: number;
  rxLossDb: number;
  polarizationLossDb: number;
  obstructionLossDb: number;
  otherLossDb: number;
}

export interface AppState {
  inputs: LinkInputs;
  distanceSweep: DistanceSweepSettings;
  gainSweep: GainSweepSettings;
  placements: PlacementScenario[];
}
