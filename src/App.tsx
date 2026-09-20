/**
 * BluePeak Fitness Studio - Multi-Page Application
 * Alternate Name: Third Space Soho
 * London W1F 9US | +44 20 7439 6333 | Rated 4.8/5 (1,501 Reviews)
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from './config/studioConfig';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClassesPage } from './pages/ClassesPage';
import { TrainingPage } from './pages/TrainingPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'classes',
        'training',
        'reviews',
        'faq',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll for "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (topic?: string) => {
    setEnquiryTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryTopic(undefined);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white font-body">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => handleOpenEnquiry()}
              />
            )}
            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {currentPage === 'classes' && (
              <ClassesPage
                onNavigate={handleNavigate}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {currentPage === 'training' && (
              <TrainingPage
                onNavigate={handleNavigate}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {currentPage === 'reviews' && (
              <ReviewsPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => handleOpenEnquiry()}
              />
            )}
            {currentPage === 'faq' && (
              <FaqPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => handleOpenEnquiry()}
              />
            )}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Quick Enquiry / Get Started Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        preselectedService={enquiryTopic}
      />

      {/* Mobile Floating Call Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex gap-2">
        <a
          id="mobile-floating-call-btn"
          href={STUDIO_CONFIG.phoneTel}
          className="flex-1 py-3 px-4 rounded-xl bg-blue-600 active:bg-blue-500 text-white font-bold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-xl shadow-black/80 border border-blue-400/40"
        >
          <Phone className="w-4 h-4" />
          <span>Call {STUDIO_CONFIG.phone}</span>
        </a>
        <button
          id="mobile-floating-enquire-btn"
          onClick={() => handleOpenEnquiry()}
          className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-bold font-display uppercase"
        >
          Enquire
        </button>
      </div>

      {/* Back To Top Floating Action */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl transition-all hover:scale-110"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
