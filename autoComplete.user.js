
 // ==UserScript==
 // @name         Auto-complete
 // @namespace    local-autocomplete
 // @version      1.0.9
 // @description  Show matching hardcoded suggestions on focused input fields
 // @match        *://*/*
 // @run-at       document-idle
 // @grant        none
 // @updateURL    https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/autoComplete.user.js?v=1
 // @downloadURL  https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/autoComplete.user.js?v=1
 // @icon         data:image/png;base64,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
 // ==/UserScript==

 (() => {
     'use strict';

     // 1. Hardcoded suggestions — customize this list.
     const ITEMS = [
         'Kapil','smkapilgupta@gmail.com','smkapilgupta@hotmail.com','P@5c@1ine','Naukri','07','2021','2013',
       'Full-stack developer responsible for designing, developing, and maintaining distributed tools and services powering grocery inbound processes, integrating LLM-based AI across the development lifecycle, and driving technical leadership, talent development, onboarding, and process and operational excellence initiatives.',
       'Developed ML-driven automation to optimize team productivity, built graphical data visualization tools, and engineered simulation software for time-intensive hardware testing while optimizing low-level code in 5G Radio Access Network (RAT) systems.',
          'Gupta',
       'Kapil Gupta',
       'Motilal National Institute of Technology',
       'Bachelor of Technology',
       'Electronics and Communication',
      '2500000 PA','2000000 PA','500000 PA', '3000000+ PA',
       'https://www.linkedin.com/in/smkapilgupta/','19th cross road, Pragathi Layout, Doddanekundi','560037','SDE II','SDE','Samsung R&D Institute India','Amazon Development Center','8400070599','9164623180','India','Bangalore'
     ];

     const MAX_RESULTS = 3;

     let activeField = null;
     let selectedIndex = 0;
     let matches = [];

     // 2. Create the floating overlay.
     const overlay = document.createElement('div');
     overlay.id = 'tm-autocomplete-overlay';

     Object.assign(overlay.style, {
         position: 'fixed',
         zIndex: '100000000000000000000000000000',
         display: 'none',
         minWidth: '240px',
         maxWidth: 'min(500px, 90vw)',
         maxHeight: '280px',
         overflowY: 'auto',
         background: '#ffffff',
         color: '#222222',
         border: '1px solid #cbd5e1',
         borderRadius: '8px',
         boxShadow: '0 6px 24px rgba(0,0,0,.18)',
         padding: '4px',
         font: '14px/1.5 system-ui, sans-serif',
         boxSizing: 'border-box'
     });

     // Keep the overlay outside page containers to avoid clipping.
     document.documentElement.appendChild(overlay);

     function isSupportedField(el) {
         if (!el || el.nodeType !== 1) return false;
         if (el.isContentEditable) return true;

         if (el.tagName === 'TEXTAREA') {
             return !el.disabled && !el.readOnly;
         }

         if (el.tagName !== 'INPUT') return false;

         const allowed = [
             'text', 'search', 'email', 'url', 'tel',
             'password', 'number'
         ];

         return allowed.includes((el.type || 'text').toLowerCase())
             && !el.disabled && !el.readOnly;
     }

     function getText(el) {
         return el.isContentEditable ? el.textContent : el.value;
     }

     function setText(el, value) {
         el.focus();

         if (el.isContentEditable) {
             // Replace the editable field's contents.
             el.textContent = value;
             el.dispatchEvent(new InputEvent('input', {
                 bubbles: true,
                 inputType: 'insertText',
                 data: value
             }));
             return;
         }

         // Use the native setter so React-controlled inputs are more
         // likely to recognize the change.
         const proto = el.tagName === 'TEXTAREA'
             ? HTMLTextAreaElement.prototype
             : HTMLInputElement.prototype;

         const setter = Object.getOwnPropertyDescriptor(
             proto, 'value'
         )?.set;

         if (setter) setter.call(el, value);
         else el.value = value;

         el.dispatchEvent(new InputEvent('input', {
             bubbles: true,
             inputType: 'insertText',
             data: value
         }));

         el.dispatchEvent(new Event('change', { bubbles: true }));

         // Place the caret at the end when supported.
         try {
             el.setSelectionRange(value.length, value.length);
         } catch (_) {}
     }

     // 3. Rank suggestions by how closely they match the query.
     function rankItems(query) {
         const q = query.trim().toLowerCase();

         if (!q) return [];

         return ITEMS
             .map((item, index) => {
                 const s = item.toLowerCase();
                 let score = Infinity;

                 if (s === q) score = 0;
                 else if (s.startsWith(q)) score = 1;
                 else if (s.includes(q)) score = 2;

                 return { item, index, score };
             })
             .filter(x => Number.isFinite(x.score))
             .sort((a, b) =>
                 a.score - b.score || a.index - b.index
             )
             .slice(0, MAX_RESULTS)
             .map(x => x.item);
     }

     // 4. Position the overlay beneath the focused field.
     function positionOverlay() {
         if (!activeField || overlay.style.display === 'none') return;

         const rect = activeField.getBoundingClientRect();

         let left = Math.max(
             8, Math.min(rect.left, window.innerWidth - 320)
         );

         let top = rect.bottom + 6;

         if (top + overlay.offsetHeight > window.innerHeight - 8) {
             top = Math.max(8, rect.top - overlay.offsetHeight - 6);
         }

         overlay.style.left = `${left}px`;
         overlay.style.top = `${top}px`;
         overlay.style.minWidth = `${Math.min(
             Math.max(rect.width, 240), window.innerWidth - 16
         )}px`;
     }

     function render() {
         if (!activeField || !overlay.isConnected) return;

         matches = rankItems(getText(activeField) || '');
         selectedIndex = 0;
         overlay.replaceChildren();

         if (!matches.length) {
             overlay.style.display = 'none';
             return;
         }

         matches.forEach((item, index) => {
             const row = document.createElement('div');
             row.textContent = item;

             Object.assign(row.style, {
                 padding: '7px 10px',
                 borderRadius: '5px',
                 cursor: 'pointer',
                 overflowWrap: 'anywhere',
                 background: index === selectedIndex
                     ? '#e8f0fe' : '#ffffff',
                 color: '#222222'
             });

             row.addEventListener('mouseenter', () => {
                 selectedIndex = index;
                 updateHighlight();
             });

             // mousedown preserves the active input long enough
             // to accept the suggestion.
             row.addEventListener('mousedown', event => {
                 event.preventDefault();
                 choose(index);
             });

             overlay.appendChild(row);
         });

         overlay.style.display = 'block';
         positionOverlay();
     }

     function updateHighlight() {
         [...overlay.children].forEach((row, i) => {
             row.style.background = i === selectedIndex
                 ? '#e8f0fe' : '#ffffff';
         });

         overlay.children[selectedIndex]?.scrollIntoView({
             block: 'nearest'
         });
     }

     function choose(index) {
         if (!activeField || !matches[index]) return;

         const value = matches[index];
         const field = activeField;

         setText(field, value);
         overlay.style.display = 'none';
         matches = [];
         activeField = field;
     }

     // 5. Show suggestions when a supported field receives focus.
     document.addEventListener('focusin', event => {
         if (!isSupportedField(event.target)) {
             activeField = null;
             overlay.style.display = 'none';
             return;
         }

         activeField = event.target;
         render();
     }, true);

     document.addEventListener('input', event => {
         if (event.target === activeField) render();
     }, true);

     // 6. Keyboard controls.
     document.addEventListener('keydown', event => {
         if (!activeField || overlay.style.display === 'none') return;

         if (event.key === 'ArrowDown' && matches.length) {
             event.preventDefault();
             selectedIndex = (selectedIndex + 1) % matches.length;
             updateHighlight();
         } else if (event.key === 'ArrowUp' && matches.length) {
             event.preventDefault();
             selectedIndex =
                 (selectedIndex - 1 + matches.length) % matches.length;
             updateHighlight();
         } else if (event.key === 'Enter' && matches.length) {
             event.preventDefault();
             event.stopImmediatePropagation();
             choose(selectedIndex);
         } else if (event.key === 'Escape'||event.key==='Control') {
             overlay.style.display = 'none';
         }
     }, true);

     window.addEventListener('scroll', positionOverlay, true);
     window.addEventListener('resize', positionOverlay);

     // Recreate the overlay if the page replaces the document body.
     // Normal SPA updates do not require this.
 })();
