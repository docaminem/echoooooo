import React, { useState } from 'react';
import { TricuspidValveMeasurements } from '../../types/valve-measurements';
import { MeasurementInput } from '../ui/MeasurementInput';
import { ResultCard } from '../ui/ResultCard';

export const TricuspidValveForm = () => {
  const [measurements, setMeasurements] = useState<TricuspidValveMeasurements>({
    ejectionFraction: 0,
    lvef: 0,
    tricuspidRegurgitation: 0,
    pisa: 0,
    rVol: 0,
    tapse: 0
  });

  const handleChange = (name: keyof TricuspidValveMeasurements) => (value: number) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  // Temporary severity calculation
  const severity = measurements.tricuspidRegurgitation > 2.8 ? 'severe' 
    : measurements.tricuspidRegurgitation > 2.1 ? 'moderate' 
    : 'mild';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <MeasurementInput
          label="Tricuspid Regurgitation (m/s)"
          value={measurements.tricuspidRegurgitation}
          onChange={handleChange('tricuspidRegurgitation')}
          unit="m/s"
        />
        <MeasurementInput
          label="PISA Radius (mm)"
          value={measurements.pisa}
          onChange={handleChange('pisa')}
          unit="mm"
        />
        <MeasurementInput
          label="Regurgitant Volume"
          value={measurements.rVol}
          onChange={handleChange('rVol')}
          unit="mL"
        />
        <MeasurementInput
          label="TAPSE"
          value={measurements.tapse}
          onChange={handleChange('tapse')}
          unit="mm"
        />
      </div>

      <ResultCard
        title="Tricuspid Valve Assessment"
        severity={severity}
        measurements={measurements}
      />
    </div>
  );
};