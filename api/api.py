from flask import Flask

app = Flask(__name__, static_folder="../build", static_url_path="/")


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/message")
def get_current_time():
    return {"message": "Hello from Flask!"}


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
