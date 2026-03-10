import { creativeProductionData } from './creative-production';
import { brandingDesignData } from './branding-design';
import { performanceMarketingData } from './performance-marketing';
import { digitalMarketingData } from './digital-marketing';
import { conversionFunnelData } from './conversion-funnel';

export const serviceData = {
  'creative-production': creativeProductionData,
  'branding-design': brandingDesignData,
  'performance-marketing': performanceMarketingData,
  'digital-marketing': digitalMarketingData,
  'conversion-funnel': conversionFunnelData
};

export const getServiceData = (slug) => {
  return serviceData[slug] || null;
};

export const getAllServices = () => {
  return Object.values(serviceData);
};
