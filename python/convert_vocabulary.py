import json
import os

def convert_vocabulary():
    # Get the path to vocabulary.json
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(os.path.dirname(script_dir), 'vocabulary.json')
    
    try:
        # Read the vocabulary.json file
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Ensure all required fields are present
        for item in data:
            item.setdefault('furigana', '')  # Set default empty string if missing
            item.setdefault('romaji', '')    # Set default empty string if missing
            if not isinstance(item.get('level'), int):
                item['level'] = 5  # Default to N5 if level is missing or invalid
        
        # Create the JavaScript content
        js_content = 'const vocabularyData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
        
        # Write to data.js
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(js_content)
            
        print(f'Successfully converted {len(data)} vocabulary items to data.js')
        
    except FileNotFoundError:
        print(f'Error: Could not find vocabulary.json at {json_path}')
    except json.JSONDecodeError:
        print('Error: vocabulary.json contains invalid JSON')
    except Exception as e:
        print(f'Error: {str(e)}')

if __name__ == '__main__':
    convert_vocabulary()