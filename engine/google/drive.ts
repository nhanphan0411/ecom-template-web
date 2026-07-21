import { google } from "googleapis";
import { auth } from "./sheets";
import { getVariantId } from "@/lib/images";

const drive = google.drive({
    version: "v3",
    auth,
});

export async function listFolder(folderId: string) {
    const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: "files(id,name,mimeType)",
        pageSize: 1000,
    });

    return res.data.files ?? [];
}

export async function listChildren(folderId: string) {
    const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: "files(id,name,mimeType)",
        pageSize: 1000,
    });

    return res.data.files ?? [];
}

export async function scanCollection(folderId: string) {
    const images: any[] = [];
    const products = await listChildren(folderId);
    for (const product of products) {
        const variant1Folders = await listChildren(product.id!);
        for (const variant1 of variant1Folders) {
            const children = await listChildren(variant1.id!);
            // 1-variant product
            const imageFiles = children.filter(
                c => c.mimeType !== "application/vnd.google-apps.folder"
            );

            if (imageFiles.length > 0) {
                const variant: any = getVariantId(
                    product.name!,
                    variant1.name!
                );

                if (!variant) {
                    console.log(
                        "Variant not found:",
                        product.name,
                        variant1.name
                    );
                    continue;
                }
                for (let i = 0; i < imageFiles.length; i++) {
                    images.push({
                        variant_id: variant.id,
                        drive_file_id: imageFiles[i].id,
                        filename: imageFiles[i].name,
                        url: null,
                        sort_order: i + 1,
                    });

                }
                continue;
            }

            // 2-variant product
            for (const variant2 of children) {

                const imageFiles = await listChildren(variant2.id!);

                const variant: any = getVariantId(
                    product.name!,
                    variant1.name!,
                    variant2.name!
                );

                if (!variant) {
                    console.log(
                        "Variant not found:",
                        product.name,
                        variant1.name,
                        variant2?.name
                    );
                    continue;
                }

                for (let i = 0; i < imageFiles.length; i++) {

                    images.push({
                        variant_id: variant.id,
                        drive_file_id: imageFiles[i].id,
                        filename: imageFiles[i].name,
                        url: null,
                        sort_order: i + 1,
                    });

                }

            }

        }

    }

    return images;

}

export async function scanAllCollections(rootFolderId: string) {

    const images: any[] = [];

    const collections = await listChildren(rootFolderId);

    for (const collection of collections) {

        const collectionImages = await scanCollection(collection.id!);

        images.push(...collectionImages);

    }

    return images;

}


export async function testDrive(folderId: string) {
    const files = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: "files(id,name,mimeType)",
        pageSize: 100,
    });

    // console.log(files.data.files);
    return files.data.files ?? [];
}