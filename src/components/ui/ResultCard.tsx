import React from 'react';
import { Severity } from '../../types/valve-measurements';

interface ResultCardProps {
  title: string;
  severity: Severity;
  measurements: Record<string, number>;
}

const severityColors = {
  mild: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  severe: 'bg-red-100 text-red-800'
};

export const ResultCard = ({ title, severity, measurements }: ResultCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${severityColors[severity]}`}>
          {severity.charAt(0).toUpperCase() + severity.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(measurements).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-sm text-gray-500">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </span>
            <span className="text-sm font-medium text-gray-900">
              {value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};