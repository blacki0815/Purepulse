# 🌿 PUREPULSE Natur Pur — Website

> **„Wach ohne Crash."** — Offizielle Website zum Marketingkonzept für PUREPULSE Natur Pur, Citrus Mint.

![Status](https://img.shields.io/badge/Status-Ready-4A8C42?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Lizenz](https://img.shields.io/badge/Lizenz-Privat-lightgrey?style=flat-square)

---

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#-über-das-projekt)
- [Seitenübersicht](#-seitenübersicht)
- [Dateistruktur](#-dateistruktur)
- [Design & Farben](#-design--farben)
- [Fonts](#-fonts)
- [Anpassungen](#-anpassungen)
- [Browser-Kompatibilität](#-browser-kompatibilität)

---

## 🍃 Über das Projekt

Diese Website begleitet die **Business-Präsentation** für PUREPULSE Natur Pur, Citrus Mint – ein koffeinfreies, natürliches Erfrischungsgetränk mit Vitamin-B-Komplex, klimaneutraler Produktion und 100 % recycelter PET-Verpackung.

Die Site ist als **statische Mehrseiten-Website** gebaut – kein Framework, kein Build-Tool, kein Server notwendig. Einfach im Browser öffnen.

**Produktkern:**
- 0 % Koffein · Natürlicher Fokus · Kein Crash-Effekt
- Vitamin-B-Komplex (B2, B3, B5, B6, B12)
- 100 % recyceltes rPET · Klimaneutrale Produktion
- CO₂-Transparenz per QR-Code
- Zielpreis: **2,49 € / 0,33l**

---

## 📄 Seitenübersicht

| Datei | Seite | Inhalt |
|---|---|---|
| `index.html` | **Home** | Hero, USPs, Marktchance, CTA |
| `produkt.html` | **Produkt** | Inhaltsstoffe, Verpackung, Preisstrategie |
| `zielgruppe.html` | **Zielgruppe** | LOHAS-Analyse, Persona „Jonas", Werte |
| `marketing.html` | **Marketing** | SMART-Ziele, 4Ps, Kampagnen, Timeline |
| `kontakt.html` | **Kontakt** | Kontaktformular, Unternehmensinfos |

---

## 📁 Dateistruktur

```
purepulse-website/
│
├── index.html          # Startseite
├── produkt.html        # Produktseite
├── zielgruppe.html     # Zielgruppenanalyse
├── marketing.html      # Marketingkonzept
├── kontakt.html        # Kontaktseite
│
├── style.css           # Komplettes Stylesheet (CSS-Variablen, alle Komponenten)
├── main.js             # Interaktionen (Nav, Scroll-Reveal, Animationen)
│
└── README.md           # Diese Datei
```

---

## 🎨 Design & Farben

Das Design folgt dem Farbschema der PowerPoint-Präsentation.  
Alle Farben sind als CSS-Variablen in `style.css` definiert und können zentral angepasst werden.

```css
:root {
  --mint:        #C5E0B4;   /* Primäre Hintergrundfarbe */
  --mint-light:  #E4F2DC;   /* Helle Mint-Variante */
  --mint-deep:   #A8D19C;   /* Tiefes Mint */
  --green-dark:  #2E5E29;   /* Primäre Akzentfarbe, Überschriften */
  --green-mid:   #4A8C42;   /* Mittleres Grün, Buttons */
  --green-sage:  #6BA362;   /* Salbeigrün, Tags & Labels */
  --green-pale:  #F0F8EC;   /* Sehr helles Grün, Hintergründe */
  --white:       #FFFFFF;
  --off-white:   #F8FCF5;   /* Seitenhintergrund */
  --gray-dark:   #2D3B2A;   /* Footer-Hintergrund */
  --text:        #263323;   /* Fließtext */
  --text-light:  #5E7258;   /* Sekundärer Text */
}
```

---

## 🔤 Fonts

Die Website verwendet zwei Google Fonts, die automatisch geladen werden:

| Font | Verwendung | Gewichte |
|---|---|---|
| **Playfair Display** | Headlines, Display-Text, Zahlen | 400, 700, 900 (inkl. Italic) |
| **DM Sans** | Fließtext, Labels, Navigation | 300, 400, 500, 600 |

> Bei Offline-Nutzung oder ohne Internetverbindung fallen die Fonts auf `Georgia` (Display) und `system-ui` (Body) zurück.

---

## ⚙️ Anpassungen

### Texte ändern
Alle Inhalte stehen direkt im jeweiligen HTML. Einfach den gewünschten Text austauschen – keine Build-Prozesse notwendig.

### Farben anpassen
Zentral in `style.css` unter `:root { ... }` — eine Änderung wirkt sich auf die gesamte Website aus.

### Neue Seite hinzufügen
1. Eine bestehende HTML-Datei als Vorlage kopieren
2. Oben die Navigation anpassen (`class="active"` an den richtigen Link)
3. Link in der Navigation aller anderen Seiten ergänzen

### Navigation erweitern
In **allen** HTML-Dateien die `<nav>`-Sektion und `<div class="mobile-menu">` anpassen:

```html
<ul class="nav__links">
  <!-- Neuen Eintrag hier hinzufügen -->
  <li><a href="neue-seite.html">Neue Seite</a></li>
</ul>
```

---

## 🌐 Browser-Kompatibilität

| Browser | Unterstützung |
|---|---|
| Chrome 90+ | ✅ Vollständig |
| Firefox 88+ | ✅ Vollständig |
| Safari 14+ | ✅ Vollständig |
| Edge 90+ | ✅ Vollständig |
| IE 11 | ❌ Nicht unterstützt |

> Das Design nutzt `CSS Grid`, `CSS Custom Properties`, `backdrop-filter` und `IntersectionObserver` — alle modernen Browser werden unterstützt.

---

## 📦 Abhängigkeiten

Keine npm-Pakete, kein Build-Tool, kein Framework.

| Ressource | Typ | Quelle |
|---|---|---|
| Playfair Display | Font | Google Fonts (CDN) |
| DM Sans | Font | Google Fonts (CDN) |

Alles andere ist reines HTML, CSS und Vanilla JavaScript.

---

## 📝 Lizenz

Dieses Projekt ist ein nicht-öffentliches Konzeptprojekt.  
Alle Inhalte, Texte und das Design sind Eigentum der **PUREPULSE GmbH**.  
Nicht zur Weitergabe oder Veröffentlichung ohne ausdrückliche Genehmigung bestimmt.
Schulprojekt nur zu Demozwecken für den Wirtschaftunterricht.

---

*PUREPULSE Natur Pur · Citrus Mint · „Wach ohne Crash." · © 2026 PUREPULSE GmbH*
