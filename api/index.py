import sys
sys.path.append('..')  # Ensure parent directory is in path for templates/static
from flask import Flask, render_template

app = Flask(__name__, template_folder='../templates', static_folder='../static')

@app.route('/')
def home():
    return render_template('index.html')

# Vercel handler
def handler(environ, start_response):
    return app(environ, start_response)

# For local testing (not used by Vercel)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
