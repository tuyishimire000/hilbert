'use client';

import { useState, useEffect } from 'react';
import { FileText, X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVViewerEnhancedProps {
  cvUrl?: string;
  fileName?: string;
}

export default function CVViewerEnhanced({ 
  cvUrl = '/cv.pdf', 
  fileName = 'Hilbert-TUYISHIMIRE-CV.pdf' 
}: CVViewerEnhancedProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPdfSupported, setIsPdfSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if browser supports PDF viewing
    const checkPdfSupport = () => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      try {
        iframe.src = 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsO8DQoxIDAgb2JqDQo8PA0KL1R5cGUgL0NhdGFsb2cNCi9QYWdlcyAyIDAgUg0KPj4NCmVuZG9iag0KMiAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDANCi9LaWRzIFtdDQo+Pg0KZW5kb2JqDQp4cmVmDQowIDMNCjAwMDAwMDAwMDAgNjU1MzUgZiANCjAwMDAwMDAwMTAgMDAwMDAgbiANCjAwMDAwMDAwNzkgMDAwMDAgbiANCnRyYWlsZXINCjw8DQovU2l6ZSAzDQovUm9vdCAxIDAgUg0KL0luZm8gMyAwIFINCj4+DQpzdGFydHhyZWYNCjExMg0KJSVFT0Y=';
        
        setTimeout(() => {
          const canView = iframe.contentDocument && iframe.contentDocument.body;
          setIsPdfSupported(!!canView);
          document.body.removeChild(iframe);
        }, 100);
             } catch {
         setIsPdfSupported(false);
         document.body.removeChild(iframe);
       }
    };

    checkPdfSupport();

    // Cleanup function to restore body scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOpenCV = () => {
    setIsLoading(true);
    setIsOpen(true);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleCloseCV = () => {
    setIsOpen(false);
    setIsLoading(false);
    
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <>
      {/* View CV Button */}
      <button
        onClick={handleOpenCV}
        className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105 flex items-center justify-center"
      >
        <FileText className="mr-2 h-5 w-5" />
        View My CV
      </button>

      {/* CV Viewer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="cv-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
                         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={handleCloseCV}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
                             className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] relative overflow-hidden z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-yellow-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {fileName}
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleDownloadCV}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                    aria-label="Download CV"
                    title="Download CV"
                  >
                    <Download className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                  <button
                    onClick={handleOpenInNewTab}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                    aria-label="Open in new tab"
                    title="Open in new tab"
                  >
                    <ExternalLink className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                  <button
                    onClick={handleCloseCV}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                    aria-label="Close CV viewer"
                  >
                    <X className="h-6 w-6 text-gray-600 group-hover:text-gray-800" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer or Fallback */}
              <div className="h-full bg-gray-100 relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
                      <p className="text-gray-600">Loading CV...</p>
                    </div>
                  </div>
                )}
                
                {!isLoading && isPdfSupported && (
                  <iframe
                    src={`${cvUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                    className="w-full h-full border-0"
                    title="CV Viewer"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  />
                )}
                
                {!isLoading && !isPdfSupported && (
                  <div className="flex flex-col items-center justify-center h-full bg-white p-8">
                    <FileText className="h-16 w-16 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      PDF Viewer Not Available
                    </h3>
                                         <p className="text-gray-600 text-center mb-6 max-w-md">
                       Your browser doesn&apos;t support PDF viewing. You can download the CV or open it in a new tab.
                     </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleDownloadCV}
                        className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download CV
                      </button>
                      <button
                        onClick={handleOpenInNewTab}
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Open in New Tab
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>📄 PDF Document</span>
                    <span>•</span>
                    <span>Click outside to close</span>
                    {!isPdfSupported && (
                      <>
                        <span>•</span>
                        <span className="text-yellow-600">PDF viewer not supported</span>
                      </>
                    )}
                  </div>
                  <button
                    onClick={handleCloseCV}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
