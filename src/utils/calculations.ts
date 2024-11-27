import { 
  AorticValveMeasurements, 
  MitralValveMeasurements, 
  TricuspidValveMeasurements,
  Severity 
} from '../types/valve-measurements';

export const calculateAorticStenosis = (measurements: AorticValveMeasurements): Severity => {
  const { peakVelocity, meanGradient, valveArea } = measurements;
  
  if (peakVelocity > 4 && meanGradient > 40 && valveArea < 1.0) {
    return 'severe';
  } else if (peakVelocity >= 3 && meanGradient >= 20 && valveArea <= 1.5) {
    return 'moderate';
  }
  return 'mild';
};

export const calculateMitralStenosis = (measurements: MitralValveMeasurements): Severity => {
  const { meanGradient, valveArea, eroa } = measurements;
  
  if (meanGradient > 12 && valveArea < 1.0 && eroa >= 0.4) {
    return 'severe';
  } else if (meanGradient >= 5 && valveArea <= 1.5 && eroa >= 0.2) {
    return 'moderate';
  }
  return 'mild';
};

export const calculateTricuspidSeverity = (measurements: TricuspidValveMeasurements): Severity => {
  const { tricuspidRegurgitation, rVol } = measurements;
  
  if (tricuspidRegurgitation > 2.8 && rVol >= 45) {
    return 'severe';
  } else if (tricuspidRegurgitation > 2.1 && rVol >= 30) {
    return 'moderate';
  }
  return 'mild';
};