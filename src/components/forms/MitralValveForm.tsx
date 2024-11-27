import React, { useState } from 'react';
import { calculateMitralStenosis } from '../../utils/calculations';
import { MitralValveMeasurements, Severity } from '../../types/valve-measurements';
import { MeasurementInput } from '../ui/MeasurementInput';
import { ResultCard } from '../ui/ResultCard';

export const MitralValveForm = () => {
  const [measurements, setMeasurements] = useState<MitralValveMeasurements>({
    ejectionFraction: 0,
    lvef: 0,
    meanGradient: 0,
    valveArea: 0,
    eroa: 0,
    regurgitantVolume: 0,
    veenaContracta: 0
  });

  const handleChange = (name: keyof MitralValveMeasurements) => (value: number) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const severity: Severity = calculateMitralStenosis(measurements);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <MeasurementInput
          label="Mean Gradient (mmHg)"
          value={measurements.meanGradient}
          onChange={handleChange('meanGradient')}
          unit="mmHg"
        />
        <MeasurementInput
          label="Valve Area (cm²)"
          value={measurements.valveArea}
          onChange={handleChange('valveArea')}
          unit="cm²"
        />
        <MeasurementInput
          label="EROA (cm²)"
          value={measurements.eroa}
          onChange={handleChange('eroa')}
          unit="cm²"
        />
        <MeasurementInput
          label="Regurgitant Volume (mL)"
          value={measurements.regurgitantVolume}
          onChange={handleChange('regurgitantVolume')}
          unit="mL"
        />
      </div>

      <ResultCard
        title="Mitral Valve Assessment"
        severity={severity}
        measurements={measurements}
      />
    </div>
  );
};