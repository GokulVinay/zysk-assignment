import React from 'react';
import TrialCTA from './TrialCTA';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer>
      <TrialCTA />
      <div className="max-w-7xl mx-auto px-4">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}