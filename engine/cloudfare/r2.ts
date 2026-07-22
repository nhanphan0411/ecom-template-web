import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function uploadImage(
  key: string,
  body: Buffer,
  contentType: string
) {
  await r2.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );

  return `${process.env.R2_PUBLIC_URL}/${key}`;
}

export async function deleteImage(key: string) {
  await r2.send(
    new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      Key: key,
    })
  );
}

export async function renameImage(oldKey: string, newKey: string) {
  await r2.send(
    new CopyObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      CopySource: `${process.env.R2_BUCKET}/${oldKey}`,
      Key: newKey,
    })
  );

  await deleteImage(oldKey);

  return `${process.env.R2_PUBLIC_URL}/${newKey}`;
}