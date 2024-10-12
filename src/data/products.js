import productOneThumbnailOne from "../assets/image-product-1-thumbnail.jpg";
import productOneThumbnailTwo from "../assets/image-product-2-thumbnail.jpg";
import productOneThumbnailThree from "../assets/image-product-3-thumbnail.jpg";
import productOneThumbnailFour from "../assets/image-product-4-thumbnail.jpg";

import productOneImageOne from "../assets/image-product-1.jpg";
import productOneImageTwo from "../assets/image-product-2.jpg";
import productOneImageThree from "../assets/image-product-3.jpg";
import productOneImageFour from "../assets/image-product-4.jpg";

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        brand: 'Sneaker Company',
        name: 'Fall Limited Edition Sneakers',
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        gender: 'male',
        price: 250, //in USD
        discount: 50, // in percentage
        thumbnail: [
            {
                thumbnailId: 'p1Th1',
                imageId: 'p1Image1',
                thumbnailSrc: productOneThumbnailOne
            },
            {
                thumbnailId: 'p1Th2',
                imageId: 'p1Image2',
                thumbnailSrc: productOneThumbnailTwo
            },
            {
                thumbnailId: 'p1Th3',
                imageId: 'p1Image3',
                thumbnailSrc: productOneThumbnailThree
            },
            {
                thumbnailId: 'p1Th4',
                imageId: 'p1Image4',
                thumbnailSrc: productOneThumbnailFour
            }
        ],
        image: [
            {
                imageId: 'p1Image1',
                imageSrc: productOneImageOne
            },
            {
                imageId: 'p1Image2',
                imageSrc: productOneImageTwo
            },
            {
                imageId: 'p1Image3',
                imageSrc: productOneImageThree
            },
            {
                imageId: 'p1Image4',
                imageSrc: productOneImageFour
            },
        ],
    }
];

export default DUMMY_PRODUCTS;