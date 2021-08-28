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

