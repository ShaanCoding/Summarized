import subprocess

FFMPEG = '/usr/bin/ffmpeg'


def mp4_to_flac(in_mp4, out_flac):
    """
    Converts an mp4 to flac
    """

    commands_list = [
        FFMPEG,
        "-y",
        "-i",
        in_mp4,  # "../video_data/in.mp4",
        "-ac",
        "1",
        out_flac,  # "../video_data/out.flac"
    ]

    return subprocess.run(commands_list).returncode == 0
