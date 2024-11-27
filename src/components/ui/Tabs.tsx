import React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({ defaultValue, children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ 
  value, 
  children,
  activeTab,
  setActiveTab 
}: { 
  value: string; 
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${activeTab === value 
          ? 'bg-blue-100 text-blue-700' 
          : 'text-gray-500 hover:text-gray-700'
        }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ 
  value, 
  children,
  activeTab 
}: { 
  value: string; 
  children: React.ReactNode;
  activeTab?: string;
}) => {
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};