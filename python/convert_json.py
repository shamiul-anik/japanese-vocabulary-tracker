import json

def convert_json_to_js():
    try:
        # Read the JSON file
        with open('../vocabulary.json', 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)
        
        # Create the JavaScript file content
        js_content = 'const vocabularyData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';'
        
        # Write to the JavaScript file
        with open('data.js', 'w', encoding='utf-8') as js_file:
            js_file.write(js_content)
            
        print("Successfully converted vocabulary.json to data.js!")
        
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    convert_json_to_js()