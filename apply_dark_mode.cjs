const fs = require('fs');
const glob = require('glob');

const replacements = [
  { regex: /(?<!dark:)bg-white/g, replacement: 'bg-white dark:bg-[#020A1A]' },
  { regex: /(?<!dark:)bg-gray-50/g, replacement: 'bg-gray-50 dark:bg-[#0A1128]' },
  { regex: /(?<!dark:)bg-gray-100/g, replacement: 'bg-gray-100 dark:bg-[#131B33]' },
  { regex: /(?<!dark:)text-primary-dark-blue/g, replacement: 'text-primary-dark-blue dark:text-white' },
  { regex: /(?<!dark:)text-gray-900/g, replacement: 'text-gray-900 dark:text-gray-100' },
  { regex: /(?<!dark:)text-gray-800/g, replacement: 'text-gray-800 dark:text-gray-200' },
  { regex: /(?<!dark:)text-gray-700/g, replacement: 'text-gray-700 dark:text-gray-300' },
  { regex: /(?<!dark:)text-gray-600/g, replacement: 'text-gray-600 dark:text-gray-400' },
  { regex: /(?<!dark:)text-gray-500/g, replacement: 'text-gray-500 dark:text-gray-400' },
  { regex: /(?<!dark:)border-gray-100/g, replacement: 'border-gray-100 dark:border-white/10' },
  { regex: /(?<!dark:)border-gray-200/g, replacement: 'border-gray-200 dark:border-white/20' }
];

const files = glob.sync('src/**/*.{tsx,jsx,ts,js}');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    modifiedCount++;
  }
});

console.log('Modified ' + modifiedCount + ' files for dark mode.');
