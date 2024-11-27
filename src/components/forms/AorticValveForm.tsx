import React, { useState } from 'react';
import { calculateAorticStenosis } from '../../utils/calculations';
import { AorticValveMeasurements, Severity } from '../../types/valve-measurements';
import { MeasurementInput } from '../ui/MeasurementInput';
import { ResultCard } from '../ui/ResultCard';

export const AorticValveForm = () => {
  const [measurements, setMeasurements] = useState<AorticValveMeasurements>({
    ejectionFraction: 0,
    lvef: 0,
    peakVelocity: 0,
    meanGradient: 0,
    valveArea: 0,
    velocityRatio: 0,
    strokeVolume: 0
  });

  const handleChange = (name: keyof AorticValveMeasurements) => (value: number) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const severity: Severity = calculateAorticStenosis(measurements);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <MeasurementInput
          label="Peak Velocity (m/s)"
          value={measurements.peakVelocity}
          onChange={handleChange('peakVelocity')}
        />
        <MeasurementInput
          label="Mean Gradient (mmHg)"
          value={measurements.meanGradient}
          onChange={handleChange('meanGradient')}
        />
        <MeasurementInput
          label="Valve Area (cm²)"
          value={measurements.valveArea}
          onChange={handleChange('valveArea')}
        />
        <MeasurementInput
          label="LVEF (%)"
          value={measurements.lvef}
          onChange={handleChange('lvef')}
        />
      </div>

      <ResultCard
        title="Aortic Valve Assessment"
        severity={severity}
        measurements={measurements}
      />
    </div>
  );
};