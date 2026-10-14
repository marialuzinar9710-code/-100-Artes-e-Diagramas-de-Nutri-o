import fs from 'fs';

const code = fs.readFileSync('/app/applet/tmp/reference.js', 'utf8');
console.log('Code size:', code.length);

// Find all text strings that look like section titles or main features
const titles = code.match(/["'`][^"'`]{5,80}["'`]/g) || [];
const interesting = titles.filter(t => 
  t.includes('Nutri') || 
  t.includes('Plano') || 
  t.includes('Básico') || 
  t.includes('Premium') ||
  t.includes('Diagrama') ||
  t.includes('12,90') ||
  t.includes('19,90') ||
  t.includes('wiapy') ||
  t.includes('pvc') ||
  t.includes('player')
);
console.log('Interesting matches count:', interesting.length);
console.log('Sample interesting:', [...new Set(interesting)].slice(0, 30));

// Find checkout links
const links = code.match(/https?:\/\/[^\s"'`\)]+/g) || [];
console.log('All links:', [...new Set(links)]);
