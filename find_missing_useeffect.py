import os
import re

root_dir = r'c:\Users\hssan\projet\plateforme-edu\frontend\src'

print(f"Scanning directory: {root_dir}")

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    # Check if useEffect is used as an identifier
                    if re.search(r'\buseEffect\b', content):
                        
                        # Check if imported from react (basic check)
                        # We look for: import ... from 'react'
                        # And ensure useEffect is mentioned in that import block
                        
                        # Regex to capture import { ... } from 'react';
                        # Handling multiline imports is important.
                        
                        is_imported = False
                        
                        # Case 1: import { ..., useEffect, ... } from 'react'
                        react_imports = re.findall(r'import\s+\{([^}]*)\}\s+from\s+[\'"]react[\'"]', content, re.DOTALL)
                        for imp in react_imports:
                            if 'useEffect' in imp:
                                is_imported = True
                                break
                        
                        # Case 2: import React, { useEffect } from 'react'
                        if not is_imported:
                             # simpler regex: just check if 'react' import contains useEffect before the 'from'
                             # This assumes standard import syntax
                             pass 

                        # Alternative: Just check if 'useEffect' appears in any line that starts with 'import' and contains 'react'
                        # This generates fewer false positives for the "missing" case
                        
                        lines = content.split('\n')
                        imported_in_line = False
                        for line in lines:
                            if 'import' in line and 'react' in line.lower() and 'useEffect' in line:
                                imported_in_line = True
                                break
                        
                        if imported_in_line:
                            is_imported = True
                            
                        # Case 3: React.useEffect usage
                        if 'React.useEffect' in content:
                            is_imported = True
                            
                        if not is_imported:
                            print(f'SUSPICIOUS: {filepath}')
                            
            except Exception as e:
                print(f'Error processing {filepath}: {e}')
