import json
from google.cloud import storage

"""
    NEEDS TO BE DONE BEFORE RUNNING:
        you need a string path to a .flac file

    EXPECTED TO BE RUN LINE THIS:
        python cloud_upload.py some/path/filename.flac

    OUTPUTS:
        nothin, but only stops running when the video is uploaded
"""

BUCKET_NAME = 'video_storage_314'
DST_BLOB_NAME = 'video.flac'

def upload_blob(bucket_name, source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""
    # The ID of your GCS bucket
    # bucket_name = "your-bucket-name"
    # The path to your file to upload
    # source_file_name = "local/path/to/file"
    # The ID of your GCS object
    # destination_blob_name = "storage-object-name"
    
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )

"""
    NEEDS TO BE DONE BEFORE RUNNING:
        1. export GOOGLE_APPLICATION_CREDENTIALS="some_path/.../video-to-text-324211-dfded3aa3010.json" 
        2. you need to have uploaded the video file to a bucket and have its gsc_uri

    EXPECTED TO BE RUN LINE THIS:
        python video_to_text.py gs://video_storage_314/video.flac

    OUTPUTS:
        video_transcript.json in text_data folder
"""

GCS_URI = 'gs://video_storage_314/video.flac'

def transcribe_gcs(gcs_uri, timeout=2100):
    """Asynchronously transcribes the audio file specified by the gcs_uri."""
    from google.cloud import speech

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
        sample_rate_hertz=44100,
        language_code="en-US",
        max_alternatives=5,
        use_enhanced=True,
        model="phone_call"
    )

    operation = client.long_running_recognize(config=config, audio=audio)
    print("Waiting for operation to complete...")
    response = operation.result(timeout=timeout)
    return response

def parse_response(response):
    rows = []
    for res in response.results:
        max_conf = 0
        max_alt = ""
        for alt in res.alternatives:
            if alt.confidence > max_conf:
                max_alt = alt.transcript
        rows.append(max_alt)
        
    # convert to a json string or smth
    return rows

# TODO: We can have this export to a google cloud storage bucket if needed

def export_to_json(response, path="output.json"):
    rows = []
    for res in response.results:
        max_conf = 0
        max_alt = ""
        for alt in res.alternatives:
            if alt.confidence > max_conf:
                max_alt = alt.transcript
        rows.append(max_alt)

    with open(path, "w", encoding='utf-8') as f:
        json.dump(rows, f, indent = 4)

    print("Json file created.")

