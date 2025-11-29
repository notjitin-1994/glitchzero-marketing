'use client';
import { useContext, useState, useEffect, ReactNode, Children } from 'react';
import { LanguageContext } from '@/components/language-context';
import { translateLandingPageContent } from '@/ai/flows/translate-landing-page-content';
import { Skeleton } from './ui/skeleton';

export function TranslatableText({ children }: { children: ReactNode }) {
  const originalText = Children.toArray(children).join('');
  const { language } = useContext(LanguageContext);
  const [translatedText, setTranslatedText] = useState(originalText);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (language.toLowerCase() === 'en') {
      setTranslatedText(originalText);
      return;
    }

    if (!originalText.trim()) return;

    let isMounted = true;
    const translate = async () => {
      setIsLoading(true);
      try {
        const result = await translateLandingPageContent({ text: originalText, targetLanguage: language });
        if (isMounted) {
          setTranslatedText(result.translatedText);
        }
      } catch (error) {
        console.error('Translation failed:', error);
        if (isMounted) {
          setTranslatedText(originalText); // Fallback to original text on error
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    translate();

    return () => {
      isMounted = false;
    };
  }, [language, originalText]);

  if (isLoading) {
    // Render a skeleton loader that approximates the text length
    return <Skeleton className="h-6 w-full max-w-[80%] inline-block" style={{ width: `${Math.min(80, originalText.length/1.5)}%`}} />;
  }

  return <>{translatedText}</>;
}
