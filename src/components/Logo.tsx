/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string; // Standard React class support for width, height, etc.
  showText?: boolean; // Toggle to render only the center illustration or the full emblem
}

export default function Logo({ className = "w-16 h-16", showText = true }: LogoProps) {
  // Rich Forest Green and Cute Pet Colors from original image
  const brandGreen = "#235848";
  const bgLightTeal = "#E7F5F1";
  const goldTone = "#FFB01F";

  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`${className} transition-transform duration-300`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Curved text paths */}
        {/* Top path for the main brand name "NACHIS PUPIS" (Clockwise to keep upright at the top) */}
        <path 
          id="logoTextTopPath" 
          d="M 26,100 A 74,74 0 0,1 174,100" 
          fill="none" 
        />
        {/* Bottom path for the slogan "ESTÉTICA CANINA Y FELINA" (Clockwise and going left to right, adjusted so text is upright) */}
        {/* We want the text to go nicely across the bottom curve left-to-right upright. */}
        {/* Using sweep-flag=0 (counter-clockwise) from right to left places the text bottom-curve, reading upright */}
        <path 
          id="logoTextBottomPath" 
          d="M 174,100 A 74,74 0 0,1 26,100" 
          fill="none" 
        />
      </defs>

      {showText && (
        <>
          {/* Outer circle border (Concentric Ring 1) */}
          <circle 
            cx="100" 
            cy="100" 
            r="94" 
            stroke={brandGreen} 
            strokeWidth="3" 
            fill="none" 
          />
          
          {/* Inner thin circle border (Concentric Ring 2) */}
          <circle 
            cx="100" 
            cy="100" 
            r="88" 
            stroke={brandGreen} 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="4 2"
            opacity="0.75"
          />

          {/* Slogan & brand name text overlays */}
          <text fill={brandGreen} className="font-sans font-black tracking-[0.03em] uppercase text-[20px]">
            <textPath 
              href="#logoTextTopPath" 
              startOffset="50%" 
              textAnchor="middle"
            >
              NACHIS PUPIS
            </textPath>
          </text>

          <text fill={brandGreen} className="font-sans font-extrabold tracking-[0.04em] uppercase text-[10.5px]">
            <textPath 
              href="#logoTextBottomPath" 
              startOffset="50%" 
              textAnchor="middle"
            >
              ESTÉTICA CANINA Y FELINA
            </textPath>
          </text>

          {/* Cute side paw-prints / dots decor */}
          <g fill={brandGreen} opacity="0.85">
            {/* Left paw mark */}
            <circle cx="28" cy="90" r="1.5" />
            <circle cx="33" cy="88" r="1.5" />
            <circle cx="33" cy="94" r="1.5" />
            <circle cx="38" cy="92" r="1.5" />
            <ellipse cx="33" cy="91" rx="2.5" ry="2" />

            {/* Right paw mark */}
            <circle cx="162" cy="90" r="1.5" />
            <circle cx="167" cy="88" r="1.5" />
            <circle cx="167" cy="94" r="1.5" />
            <circle cx="172" cy="92" r="1.5" />
            <ellipse cx="167" cy="91" rx="2.5" ry="2" />
          </g>
        </>
      )}

      {/* Central Illustration Area with beautiful cute pets inside their bath */}
      {/* Background Circle container */}
      <circle 
        cx="100" 
        cy="100" 
        r="63" 
        fill={bgLightTeal} 
        stroke={brandGreen} 
        strokeWidth="2.5" 
      />

      {/* Bubbles Floating in the background */}
      <g stroke={brandGreen} strokeWidth="1.2" fill="white" opacity="0.7">
        <circle cx="106" cy="67" r="4.5" />
        <circle cx="120" cy="74" r="6.5" />
        <circle cx="84" cy="71" r="3.5" />
        {/* Bubble shines */}
        <path d="M 104.5 65.5 A 2 2 0 0 1 107 65.5" stroke="white" strokeWidth="0.8" fill="none" />
        <path d="M 118 71.5 A 3 3 0 0 1 122 71.5" stroke="white" strokeWidth="1" fill="none" />
      </g>

      {/* 1. THE ADORABLE DOGGY (Beige brown with white muzzle) */}
      <g id="illustration-dog">
        {/* Left floppy brown ear */}
        <path 
          d="M 52,90 C 44,98 48,114 56,118 C 60,114 62,98 59,92 Z" 
          fill="#C49B7A" 
          stroke={brandGreen} 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />
        {/* Right brown ear */}
        <path 
          d="M 100,88 C 104,96 102,112 94,116 C 90,112 88,96 91,90 Z" 
          fill="#C49B7A" 
          stroke={brandGreen} 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />
        {/* Head base */}
        <circle 
          cx="76" 
          cy="99" 
          r="21" 
          fill="#E7D2BD" 
          stroke={brandGreen} 
          strokeWidth="2" 
        />
        {/* Left eye spot (cute patch) */}
        <ellipse 
          cx="83" 
          cy="94" 
          rx="5" 
          ry="6" 
          fill="#C49B7A" 
          opacity="0.9" 
        />
        {/* Shiny Black Eyes */}
        <circle cx="69" cy="95" r="2.8" fill={brandGreen} />
        <circle cx="68" cy="94" r="0.8" fill="white" />
        <circle cx="83" cy="95" r="2.8" fill={brandGreen} />
        <circle cx="82" cy="94" r="0.8" fill="white" />
        
        {/* Cute blushing cheeks */}
        <ellipse cx="64" cy="101" rx="2" ry="1.2" fill="#FFA5A5" opacity="0.6" />
        <ellipse cx="88" cy="101" rx="2" ry="1.2" fill="#FFA5A5" opacity="0.6" />

        {/* White dog snout */}
        <ellipse 
          cx="76" 
          cy="104" 
          rx="9" 
          ry="7.5" 
          fill="white" 
          stroke={brandGreen} 
          strokeWidth="1.8" 
        />
        {/* Dog nose */}
        <ellipse 
          cx="76" 
          cy="101.5" 
          rx="4" 
          ry="3" 
          fill={brandGreen} 
        />
        {/* Smiling mouth curve */}
        <path 
          d="M 72.5,105.5 C 74,107 76,107.5 76,105.5 C 76,107.5 78,107 79.5,105.5" 
          stroke={brandGreen} 
          strokeWidth="1.8" 
          fill="none" 
          strokeLinecap="round" 
        />
        {/* Playful Pink Tongue hanging out */}
        <path 
          d="M 74.5,106.5 C 74.5,111 77.5,111 77.5,106.5 Z" 
          fill="#FF7468" 
          stroke={brandGreen} 
          strokeWidth="1.5" 
        />
        {/* Collar */}
        <path 
          d="M 60,115 C 65,123 85,123 90,115" 
          stroke="#4AA89C" 
          strokeWidth="3.5" 
          fill="none" 
          strokeLinecap="round" 
        />
        {/* Gold pendant tag with paw emblem */}
        <circle 
          cx="75" 
          cy="123" 
          r="5.5" 
          fill={goldTone} 
          stroke={brandGreen} 
          strokeWidth="1.5" 
        />
        <circle cx="75" cy="123" r="1.2" fill={brandGreen} />
        <circle cx="73" cy="121" r="0.7" fill={brandGreen} />
        <circle cx="75" cy="120" r="0.7" fill={brandGreen} />
        <circle cx="77" cy="121" r="0.7" fill={brandGreen} />
      </g>

      {/* 2. THE CUTE KITTEN CAT (Orange tab) */}
      <g id="illustration-cat">
        {/* Left triangle ear */}
        <path 
          d="M 103,96 L 105,80 Q 112,85 116,92 Z" 
          fill="#E68A45" 
          stroke={brandGreen} 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />
        {/* Left ear pink inside */}
        <path 
          d="M 106,92 L 107.5,83 Q 111.5,86 113.5,90 Z" 
          fill="#FFB5B0" 
        />
        {/* Right triangle ear */}
        <path 
          d="M 139,96 L 137,80 Q 130,85 126,92 Z" 
          fill="#E68A45" 
          stroke={brandGreen} 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />
        {/* Right ear pink inside */}
        <path 
          d="M 136,92 L 134.5,83 Q 130.5,86 128.5,90 Z" 
          fill="#FFB5B0" 
        />
        {/* Cat head base */}
        <circle 
          cx="121" 
          cy="102" 
          r="17" 
          fill="#F59F5D" 
          stroke={brandGreen} 
          strokeWidth="2" 
        />
        
        {/* Cute ginger cat forehead stripes */}
        <path d="M 118,87 L 119,92 M 121,86 L 121,92 M 124,87 L 123,92" stroke="#D36F23" strokeWidth="1.5" strokeLinecap="round" />

        {/* Shiny Black cat eyes */}
        <circle cx="114" cy="99" r="2.5" fill={brandGreen} />
        <circle cx="113.5" cy="98.2" r="0.6" fill="white" />
        <circle cx="128" cy="99" r="2.5" fill={brandGreen} />
        <circle cx="127.5" cy="98.2" r="0.6" fill="white" />

        {/* Blushing cheeks */}
        <ellipse cx="110" cy="103" rx="1.8" ry="1" fill="#FFA5A5" opacity="0.6" />
        <ellipse cx="132" cy="103" rx="1.8" ry="1" fill="#FFA5A5" opacity="0.6" />

        {/* Cat muzzle / chin area */}
        <path 
          d="M 117,105 C 117,107 121,107 121,105 C 121,107 125,107 125,105" 
          stroke={brandGreen} 
          strokeWidth="1.8" 
          fill="none" 
          strokeLinecap="round" 
        />
        {/* Little triangle rose nose */}
        <polygon 
          points="119.5,102.5 122.5,102.5 121,104" 
          fill="#FF8077" 
          stroke={brandGreen} 
          strokeWidth="0.8" 
        />
        {/* Cat whiskers */}
        <path d="M 109,103 L 102,102 M 109,105 L 101,105" stroke={brandGreen} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 133,103 L 140,102 M 133,105 L 141,105" stroke={brandGreen} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* 3. SOAP SPUN & BUBBLE BATH BASIN OVERLAY */}
      <g id="illustration-bathtub">
        {/* Soapy rich bubbles foam sitting over the rim */}
        <path 
          d="M 44,124 C 44,118 52,116 57,120 C 62,112 70,112 75,117 C 80,111 88,110 94,115 C 99,108 107,108 111,114 C 116,109 123,109 129,113 C 134,107 142,107 146,113 C 151,113 158,117 156,124 Z" 
          fill="#FFFFFF" 
          stroke={brandGreen} 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />
        <circle cx="51" cy="120" r="4" fill="white" stroke={brandGreen} strokeWidth="1.5" />
        <circle cx="68" cy="115" r="5" fill="white" stroke={brandGreen} strokeWidth="1.5" />
        <circle cx="86" cy="113" r="5" fill="white" stroke={brandGreen} strokeWidth="1.5" />
        <circle cx="106" cy="111" r="5.5" fill="white" stroke={brandGreen} strokeWidth="1.5" />
        <circle cx="124" cy="111" r="5" fill="white" stroke={brandGreen} strokeWidth="1.5" />
        <circle cx="140" cy="114" r="4.5" fill="white" stroke={brandGreen} strokeWidth="1.5" />

        {/* Spa Bowl Tub */}
        <path 
          d="M 46,124 Q 44,124 48,131 C 55,148 145,148 152,131 Q 156,124 154,124 Z" 
          fill="#5EBAB0" 
          stroke={brandGreen} 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
        {/* Tub visual decoration line (highlights) */}
        <path 
          d="M 52,131 C 58,143 142,143 148,131" 
          stroke="#ADE5DF" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
        />
        
        {/* Bubbles Overflowing on the tub body */}
        <circle cx="48" cy="129" r="3" fill="white" stroke={brandGreen} strokeWidth="1.2" />
        <circle cx="149" cy="131" r="3.5" fill="white" stroke={brandGreen} strokeWidth="1.2" />
        <circle cx="68" cy="138" r="2.5" fill="white" stroke={brandGreen} strokeWidth="1" />
        <circle cx="128" cy="137" r="2.5" fill="white" stroke={brandGreen} strokeWidth="1" />
      </g>

      {/* Decorative tiny stars around */}
      <g fill={goldTone}>
        {/* Left top star */}
        <path d="M 42,76 L 43.5,79 L 46.5,79.5 L 44,82 L 45,85 L 42,83.5 L 39,85 L 40,82 L 37.5,79.5 L 40.5,79 Z" opacity="0.9" />
        {/* Right top star */}
        <path d="M 158,76 L 159.5,79 L 162.5,79.5 L 160,82 L 161,85 L 158,83.5 L 155,85 L 156,82 L 153.5,79.5 L 156.5,79 Z" opacity="0.9" />
      </g>
    </svg>
  );
}
