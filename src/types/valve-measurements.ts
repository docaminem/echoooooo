export interface BaseValveMeasurements {
  ejectionFraction: number;
  lvef: number;
}

export interface AorticValveMeasurements extends BaseValveMeasurements {
  peakVelocity: number;
  meanGradient: number;
  valveArea: number;
  velocityRatio: number;
  strokeVolume: number;
}

export interface MitralValveMeasurements extends BaseValveMeasurements {
  meanGradient: number;
  valveArea: number;
  eroa: number;
  regurgitantVolume: number;
  veenaContracta: number;
}

export interface TricuspidValveMeasurements extends BaseValveMeasurements {
  tricuspidRegurgitation: number;
  pisa: number;
  rVol: number;
  tapse: number;
}

export type Severity = 'mild' | 'moderate' | 'severe';