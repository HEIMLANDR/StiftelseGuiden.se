"use client";

import { useState, useEffect } from 'react';

interface CalculationResult {
  requiredCapital: number;
  annualDistribution: number;
  annualCosts: number;
  annualReturn: number;
  years: number[];
  capitalValues: number[];
}

export default function CapitalCalculator() {
  // Input state
  const [targetDistribution, setTargetDistribution] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(4);
  const [annualCosts, setAnnualCosts] = useState<number>(20000);
  const [inflationRate, setInflationRate] = useState<number>(2);
  const [years, setYears] = useState<number>(20);
  
  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);
  
  // Calculate on input change
  useEffect(() => {
    calculateCapital();
  }, [targetDistribution, expectedReturn, annualCosts, inflationRate, years]);
  
  const calculateCapital = () => {
    // Adjust return rate for inflation
    const realReturnRate = (expectedReturn - inflationRate) / 100;
    
    // Calculate required capital to generate target distribution + cover costs
    const totalAnnualNeed = targetDistribution + annualCosts;
    const requiredCapital = totalAnnualNeed / realReturnRate;
    
    // Generate projection data for chart
    const yearsArray = Array.from({ length: years + 1 }, (_, i) => i);
    const capitalValues = yearsArray.map(year => {
      // Simple projection assuming constant real return and distribution
      return requiredCapital * Math.pow(1 + realReturnRate - (totalAnnualNeed / requiredCapital), year);
    });
    
    setResult({
      requiredCapital,
      annualDistribution: targetDistribution,
      annualCosts,
      annualReturn: expectedReturn,
      years: yearsArray,
      capitalValues
    });
  };
  
  // Format number as SEK
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('sv-SE', { 
      style: 'currency', 
      currency: 'SEK',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-primary-700">Kapitalberäknare för stiftelser</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-6">
            Använd denna kalkylator för att beräkna hur mycket kapital din stiftelse behöver för att uppnå dina mål för utdelning över tid.
          </p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Önskad årlig utdelning
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={targetDistribution}
                  onChange={(e) => setTargetDistribution(Number(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-gray-700 font-medium min-w-[120px]">
                  {formatCurrency(targetDistribution)}
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Förväntad årlig avkastning (%)
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-gray-700 font-medium min-w-[120px]">
                  {expectedReturn.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Årliga administrativa kostnader
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={annualCosts}
                  onChange={(e) => setAnnualCosts(Number(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-gray-700 font-medium min-w-[120px]">
                  {formatCurrency(annualCosts)}
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Förväntad inflation (%)
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-gray-700 font-medium min-w-[120px]">
                  {inflationRate.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tidshorisont (år)
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-gray-700 font-medium min-w-[120px]">
                  {years} år
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Resultat</h3>
          
          {result && (
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Rekommenderat startkapital:</p>
                <p className="text-3xl font-bold text-primary-800">
                  {formatCurrency(Math.ceil(result.requiredCapital / 10000) * 10000)}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Årlig utdelning:</p>
                  <p className="text-lg font-semibold">{formatCurrency(result.annualDistribution)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Administrativa kostnader:</p>
                  <p className="text-lg font-semibold">{formatCurrency(result.annualCosts)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Real avkastning:</p>
                  <p className="text-lg font-semibold">{(result.annualReturn - inflationRate).toFixed(1)}%</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Kapitalutveckling:</p>
                  <p className="text-lg font-semibold">
                    {result.capitalValues[result.capitalValues.length - 1] > result.requiredCapital 
                      ? "Ökande" 
                      : "Minskande"}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-2">Antaganden:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Beräkningen tar hänsyn till inflation</li>
                  <li>• Konstant real avkastning över tid</li>
                  <li>• Konstant utdelningsnivå (justerat för inflation)</li>
                  <li>• Administrativa kostnader ökar med inflationen</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-md border border-primary-100 mt-4">
                <p className="text-sm text-primary-700">
                  <strong>Tips:</strong> För långsiktig hållbarhet bör den reala avkastningen (efter inflation) 
                  vara högre än den årliga utdelningen i procent av kapitalet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}