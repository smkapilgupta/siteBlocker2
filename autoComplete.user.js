
 // ==UserScript==
 // @name         Auto-complete
 // @namespace    local-autocomplete
 // @version      1.0.1
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
         'Kapil Gupta','smkapilgupta@gmail.com','P@5c@1ine','Naukri','07','2021','2013',
       'Full-stack developer responsible for designing, developing, and maintaining distributed tools and services powering grocery inbound processes, integrating LLM-based AI across the development lifecycle, and driving technical leadership, talent development, onboarding, and process and operational excellence initiatives.',
       'Developed ML-driven automation to optimize team productivity, built graphical data visualization tools, and engineered simulation software for time-intensive hardware testing while optimizing low-level code in 5G Radio Access Network (RAT) systems.',
          'Kapil',
       'Gupta',
       'https://www.linkedin.com/in/smkapilgupta/','19th cross road, Pragathi Layout, Doddanekundi','560037','SDE II','SDE','Samsung','Amazon','8400070599','India','Bangalore'
     ];

     const MAX_RESULTS = 8;

     let activeField = null;
     let selectedIndex = 0;
     let matches = [];

     // 2. Create the floating overlay.
     const overlay = document.createElement('div');
     overlay.id = 'tm-autocomplete-overlay';

     Object.assign(overlay.style, {
         position: 'fixed',
         zIndex: '2147483647',
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

         if (!q) return ITEMS.slice(0, MAX_RESULTS);

         return ITEMS
             .map((item, index) => {
                 const s = item.toLowerCase();
                 let score = Infinity;

                 if (s === q) score = 0;
                 else if (s.startsWith(q)) score = 1;
                 else if (s.includes(q)) score = 2;
                 else {
                     // Fuzzy match: allow small typing mistakes.
                     const distance = levenshtein(q, s);
                     const threshold = Math.max(
                         2, Math.floor(q.length * 0.4)
                     );

                     if (distance <= threshold) score = 3 + distance;
                 }

                 return { item, index, score };
             })
             .filter(x => Number.isFinite(x.score))
             .sort((a, b) =>
                 a.score - b.score || a.index - b.index
             )
             .slice(0, MAX_RESULTS)
             .map(x => x.item);
     }

     function levenshtein(a, b) {
         let prev = Array.from(
             { length: b.length + 1 }, (_, i) => i
         );

         for (let i = 1; i <= a.length; i++) {
             const curr = [i];

             for (let j = 1; j <= b.length; j++) {
                 curr[j] = Math.min(
                     curr[j - 1] + 1,
                     prev[j] + 1,
                     prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
                 );
             }

             prev = curr;
         }

         return prev[b.length];
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
         } else if (event.key === 'Escape') {
             overlay.style.display = 'none';
         }
     }, true);

     window.addEventListener('scroll', positionOverlay, true);
     window.addEventListener('resize', positionOverlay);

     // Recreate the overlay if the page replaces the document body.
     // Normal SPA updates do not require this.
 })();
