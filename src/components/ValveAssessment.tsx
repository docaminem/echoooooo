import React from 'react';
import { AorticValveForm } from './forms/AorticValveForm';
import { MitralValveForm } from './forms/MitralValveForm';
import { TricuspidValveForm } from './forms/TricuspidValveForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';

export const ValveAssessment = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Valve Disease Assessment
      </h1>
      
      <Tabs defaultValue="aortic" className="w-full">
        <TabsList className="grid grid-cols-3 gap-4 mb-6">
          <TabsTrigger value="aortic">Aortic Valve</TabsTrigger>
          <TabsTrigger value="mitral">Mitral Valve</TabsTrigger>
          <TabsTrigger value="tricuspid">Tricuspid Valve</TabsTrigger>
        </TabsList>

        <TabsContent value="aortic">
          <AorticValveForm />
        </TabsContent>
        
        <TabsContent value="mitral">
          <MitralValveForm />
        </TabsContent>
        
        <TabsContent value="tricuspid">
          <TricuspidValveForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};