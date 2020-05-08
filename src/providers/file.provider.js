'use strict';

const uploadPreset = 'o4hiovzf';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dd6bjgims/upload';

export const uploadFile = async fileUpload => {
    const formData = new FormData();

    formData.append('upload_preset', uploadPreset);
    formData.append('file', fileUpload);

    try {
        const response = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch (error) {
        throw error;
    }
};