'use client';

import { useState, useEffect } from 'react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  placeholder?: string;
  className?: string;
}

export default function VoiceInput({ onTranscript, placeholder = "Click to speak", className = "" }: VoiceInputProps) {
  const [mounted, setMounted] = useState(false);
  const { transcript, isListening, isSupported, error, startListening, stopListening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
      if (transcript) {
        onTranscript(transcript);
        resetTranscript();
      }
    } else {
      resetTranscript();
      startListening();
    }
  };

  const handleAddTranscript = () => {
    if (transcript) {
      onTranscript(transcript);
      resetTranscript();
    }
  };

  if (!mounted || !isSupported) {
    return (
      <div className={`flex items-center ${className}`}>
        <button
          type="button"
          className="p-2 rounded-full bg-gray-700 text-gray-300"
          disabled
          title={mounted ? "Voice input not supported in this browser" : "Loading voice input..."}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
        </button>
        {mounted && (
          <span className="text-xs text-gray-400 ml-2">
            Voice input not supported
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handleToggleListening}
          className={`p-2 rounded-full transition-all duration-300 ${
            isListening
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          title={isListening ? "Stop recording" : "Start voice input"}
        >
          {isListening ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        {isListening && (
          <span className="text-sm text-yellow-400 animate-pulse">
            Listening...
          </span>
        )}
        
        {transcript && !isListening && (
          <button
            type="button"
            onClick={handleAddTranscript}
            className="px-2 py-1 text-xs bg-yellow-400 text-black rounded hover:bg-yellow-300 transition-colors"
          >
            Add Text
          </button>
        )}
      </div>
      
      {error && (
        <div className="text-xs text-red-400">
          {error}
        </div>
      )}
      
      {transcript && (
        <div className="p-2 bg-gray-800 rounded text-sm text-gray-300">
          {transcript}
        </div>
      )}
      
      {!isListening && !transcript && (
        <div className="text-xs text-gray-400">
          {placeholder}
        </div>
      )}
    </div>
  );
}