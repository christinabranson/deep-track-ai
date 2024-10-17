from projen.python import PythonProject

project = PythonProject(
    author_email="clbranson@gmail.com",
    author_name="Christina Branson",
    module_name="deep_track_ai",
    name="deep-track-ai",
    version="0.1.0",
)

project.synth()