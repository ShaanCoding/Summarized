import sys
import subprocess

# https://artwilton.medium.com/running-ffmpeg-commands-from-a-python-script-676eaf2b2739
def runFFmpeg(commands):
    if subprocess.run(commands).returncode == 0:
        print ("FFmpeg Script Ran Successfully")
    else:
        print ("There was an error running your FFmpeg script")

#TODO: How will we know where this is on the server?
FFMPEG = "/usr/bin/ffmpeg"

if len(sys.argv) < 3:
    print("Error: expected encoder.py path/in path/out")
    print("Will run assuming in.mp4 out.flac")
    commands_list = [
        FFMPEG,
        "-y",
        "-i",
        "../video_data/in.mp4",
        "-ac",
        "1",
        "../video_data/out.flac"
    ]
else:
    commands_list = [
        FFMPEG,
        "-y",
        "-i",
        sys.argv[1],
        "-ac",
        "1",
        sys.argv[2]
    ]



runFFmpeg(commands_list)