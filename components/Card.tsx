
import { Card } from 'flowbite-react';
const CourseCardComponent = () => {
  return (
    <Card
      className="max-w-sm"
      imgSrc="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        FLUTTER MOBILE DEVELOPMENT
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Flutter course is designed to develop multi-platform like iOS and
        Android App ...
      </p>
    </Card>
    
    
  );
  
};
export default CourseCardComponent;




