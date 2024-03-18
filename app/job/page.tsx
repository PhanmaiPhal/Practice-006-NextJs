import { Card } from 'flowbite-react';

export default function ITcomponet() {
    return (
        <div>
            <p className="text-3xl font-bold my-6 mx-32">USEFUL CONTENTS</p>
            <div className="grid grid-cols-4 justify-center gap-5 pt-2 px-40">
                <Card
                    className="max-w-sm" // Custom class for styling the card
                    imgAlt="Meaningful alt text for an image that is not purely decorative" // Alternate text for the image
                    imgSrc="https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg" // Source URL for the image
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest
                    </p>
                </Card>
                <Card
                    className="max-w-sm" // Custom class for styling the card
                    imgAlt="Meaningful alt text for an image that is not purely decorative" // Alternate text for the image
                    imgSrc="https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png" // Source URL for the image
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest
                    </p>
                </Card>
                <Card
                    className="max-w-sm" // Custom class for styling the card
                    imgAlt="Meaningful alt text for an image that is not purely decorative" // Alternate text for the image
                    imgSrc="https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg" // Source URL for the image
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest
                    </p>
                </Card>
                <Card
                    className="max-w-sm" // Custom class for styling the card
                    imgAlt="Meaningful alt text for an image that is not purely decorative" // Alternate text for the image
                    imgSrc="https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png" // Source URL for the image
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest
                    </p>
                </Card>
            </div>
        </div>
    );
}