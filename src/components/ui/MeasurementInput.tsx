import React from 'react';

interface MeasurementInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
}

export const MeasurementInput = ({ 
  label, 
  value, 
  onChange, 
  unit,
  min = 0,
  max = 999 
}: MeasurementInputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const newValue = parseFloat(e.target.value) || 0;
            if (newValue >= min && newValue <= max) {
              onChange(newValue);
            }
          }}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          step="0.1"
          min={min}
          max={max}
        />
        {unit && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
};