import { useState, useEffect, useCallback } from 'react';

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

interface SpeechRecognitionAlternative {
  transcript: string;
}

interface SpeechRecognitionResult extends ArrayLike<SpeechRecognitionAlternative> {
  0: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResults extends ArrayLike<SpeechRecognitionResult> {
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResults;
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionState {
  transcript: string;
  isListening: boolean;
  isSupported: boolean;
  error: string | null;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export function useSpeechRecognition(): {
  transcript: string;
  isListening: boolean;
  isSupported: boolean;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
} {
  const [state, setState] = useState<SpeechRecognitionState>({
    transcript: '',
    isListening: false,
    isSupported: false,
    error: null,
  });

  const [recognition, setRecognition] = useState<SpeechRecognitionInstance | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      const RecognitionConstructor = window.SpeechRecognition ?? window.webkitSpeechRecognition;

      if (RecognitionConstructor) {
        const recognitionInstance = new RecognitionConstructor();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = 'en-US';

        recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setState(prev => ({ ...prev, transcript }));
        };

        recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
          setState(prev => ({
            ...prev,
            error: `Error occurred in recognition: ${event.error}`,
            isListening: false,
          }));
        };

        recognitionInstance.onend = () => {
          setState(prev => ({ ...prev, isListening: false }));
        };

        setRecognition(recognitionInstance);
        setState(prev => ({ ...prev, isSupported: true }));
      } else {
        setState(prev => ({ ...prev, isSupported: false }));
      }
    }
  }, [mounted]);

  const startListening = useCallback(() => {
    if (recognition && state.isSupported) {
      try {
        recognition.start();
        setState(prev => ({ ...prev, isListening: true, error: null }));
      } catch {
        setState(prev => ({
          ...prev,
          error: 'Failed to start speech recognition',
          isListening: false,
        }));
      }
    }
  }, [recognition, state.isSupported]);

  const stopListening = useCallback(() => {
    if (recognition && state.isListening) {
      recognition.stop();
      setState(prev => ({ ...prev, isListening: false }));
    }
  }, [recognition, state.isListening]);

  const resetTranscript = useCallback(() => {
    setState(prev => ({ ...prev, transcript: '' }));
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    resetTranscript,
  };
}