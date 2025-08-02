from flask import Flask, render_template
import json

app = Flask(__name__)


def load_home():
    with open("data/home.json") as f:
        return json.load(f)


def load_project():
    with open("data/projects.json") as f:
        return json.load(f)


def load_work_experience():
    with open("data/work_experience.json") as f:
        return json.load(f)


@app.route("/")
def home():
    profile = load_home()
    return render_template("index.html", profile=profile)


@app.route("/projects")
def projects():
    projects_data = load_project()
    return render_template("projects.html", projects=projects_data)


@app.route("/experience")
def experience():
    work_experience = load_work_experience()
    return render_template("experience.html", work_experience=work_experience)


if __name__ == "__main__":
    app.run(debug=True)
