'use client';

import { useState } from 'react';
import { Download, CheckCircle, AlertCircle, FileText, Calendar, User } from 'lucide-react';
import { cvConfig } from '@/config/cv';

interface CVDownloadAdvancedProps {
  showInfo?: boolean;
}

export default function CVDownloadAdvanced({ showInfo = true }: CVDownloadAdvancedProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const handleDownload = async (format: string = 'pdf') => {
    try {
      setIsDownloading(true);
      setDownloadStatus('idle');

      const formatConfig = cvConfig.formats.find(f => f.type === format);
      if (!formatConfig) {
        throw new Error('Format not supported');
      }

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = formatConfig.url;
      link.download = cvConfig.fileName.replace('.pdf', `.${format}`);
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate download time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setDownloadStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Downloading...
        </>
      );
    }

    if (downloadStatus === 'success') {
      return (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          Downloaded!
        </>
      );
    }

    if (downloadStatus === 'error') {
      return (
        <>
          <AlertCircle className="mr-2 h-4 w-4" />
          Download Failed
        </>
      );
    }

    return (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </>
    );
  };

  const getButtonClasses = () => {
    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";
    
    if (downloadStatus === 'success') {
      return `${baseClasses} bg-green-600 text-white hover:bg-green-700 hover:scale-105`;
    }
    
    if (downloadStatus === 'error') {
      return `${baseClasses} bg-red-600 text-white hover:bg-red-700 hover:scale-105`;
    }
    
    return `${baseClasses} bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105`;
  };

  return (
    <div className="space-y-4">
      {showInfo && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-black">Curriculum Vitae</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">{cvConfig.contact.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Updated: {cvConfig.lastUpdated}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Sections Included:</h4>
            <div className="flex flex-wrap gap-2">
              {cvConfig.sections.map((section, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                >
                  {section}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {cvConfig.formats.map((format) => (
            <button
              key={format.type}
              onClick={() => handleDownload(format.type)}
              disabled={isDownloading}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedFormat === format.type
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white/80 backdrop-blur-sm border border-white/20 text-black hover:bg-yellow-600 hover:text-white'
              }`}
            >
              <span>{format.icon}</span>
              <span>{format.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => handleDownload(selectedFormat)}
          disabled={isDownloading}
          className={getButtonClasses()}
        >
          {getButtonContent()}
        </button>
      </div>
    </div>
  );
}
